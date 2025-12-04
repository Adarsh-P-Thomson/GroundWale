**Expanded Database Architecture for GroundWale**

---

## **PostgreSQL - Single Instance, 2 Databases**

### **Database 1: `groundwale_users`**

**Tables:**

**1. users**
```sql
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    profile_image_url TEXT,
    date_of_birth DATE,
    gender VARCHAR(20),
    wallet_balance DECIMAL(10,2) DEFAULT 0.00,
    referral_code VARCHAR(20) UNIQUE,
    referred_by UUID REFERENCES users(user_id),
    whatsapp_opt_in BOOLEAN DEFAULT true,
    email_opt_in BOOLEAN DEFAULT false,
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP,
    INDEX idx_phone (phone_number),
    INDEX idx_email (email),
    INDEX idx_referral (referral_code)
);
```

**2. user_addresses**
```sql
CREATE TABLE user_addresses (
    address_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    address_type VARCHAR(20), -- 'home', 'work', 'other'
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    landmark VARCHAR(255),
    location GEOGRAPHY(POINT), -- PostGIS for lat/lng
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user (user_id),
    INDEX idx_location USING GIST (location)
);
```

**3. ground_managers**
```sql
CREATE TABLE ground_managers (
    manager_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    business_name VARCHAR(255) NOT NULL,
    business_type VARCHAR(50), -- 'individual', 'company', 'trust'
    gst_number VARCHAR(15) UNIQUE,
    pan_number VARCHAR(10) UNIQUE,
    bank_account_number VARCHAR(20),
    bank_ifsc_code VARCHAR(11),
    bank_account_holder_name VARCHAR(255),
    commission_rate DECIMAL(5,2) DEFAULT 15.00, -- Platform commission %
    verification_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'verified', 'rejected'
    verification_documents JSONB, -- {pan: "url", gst: "url", bank: "url"}
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user (user_id),
    INDEX idx_status (verification_status)
);
```

**4. venues**
```sql
CREATE TABLE venues (
    venue_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manager_id UUID REFERENCES ground_managers(manager_id) ON DELETE CASCADE,
    venue_name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL, -- URL-friendly name
    description TEXT,
    venue_type VARCHAR(50), -- 'turf', 'ground', 'court', 'stadium'
    sports TEXT[], -- ['cricket', 'football', 'tennis']
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    location GEOGRAPHY(POINT) NOT NULL, -- For proximity search
    area_sqft INTEGER,
    capacity INTEGER,
    amenities JSONB, -- {parking: true, washroom: true, cafe: false, lights: true}
    rules JSONB, -- {cancellation_hours: 24, advance_booking_days: 30}
    images JSONB, -- [{url: "...", is_primary: true}, ...]
    videos JSONB, -- [{url: "...", thumbnail: "..."}]
    rating_average DECIMAL(3,2) DEFAULT 0.00,
    rating_count INTEGER DEFAULT 0,
    total_bookings INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    verification_status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_manager (manager_id),
    INDEX idx_city (city),
    INDEX idx_sports USING GIN (sports),
    INDEX idx_location USING GIST (location),
    INDEX idx_active (is_active, verification_status),
    FULLTEXT INDEX idx_search (venue_name, description)
);
```

**5. venue_pricing**
```sql
CREATE TABLE venue_pricing (
    pricing_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    venue_id UUID REFERENCES venues(venue_id) ON DELETE CASCADE,
    day_of_week INTEGER, -- 0=Sunday, 1=Monday, ... 6=Saturday
    time_slot_start TIME NOT NULL,
    time_slot_end TIME NOT NULL,
    price_per_hour DECIMAL(10,2) NOT NULL,
    is_peak_hour BOOLEAN DEFAULT false,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_venue (venue_id),
    INDEX idx_day (day_of_week),
    CONSTRAINT unique_venue_slot UNIQUE (venue_id, day_of_week, time_slot_start)
);
```

**6. venue_facilities**
```sql
CREATE TABLE venue_facilities (
    facility_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    venue_id UUID REFERENCES venues(venue_id) ON DELETE CASCADE,
    facility_type VARCHAR(50), -- 'changing_room', 'parking', 'equipment_rental'
    facility_name VARCHAR(255) NOT NULL,
    description TEXT,
    is_free BOOLEAN DEFAULT true,
    price DECIMAL(10,2),
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**7. reviews**
```sql
CREATE TABLE reviews (
    review_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    venue_id UUID REFERENCES venues(venue_id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    booking_id UUID, -- References bookings table
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    images JSONB, -- [{url: "..."}, ...]
    likes_count INTEGER DEFAULT 0,
    is_verified BOOLEAN DEFAULT false, -- Verified booking review
    is_visible BOOLEAN DEFAULT true,
    manager_response TEXT,
    manager_response_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_venue (venue_id),
    INDEX idx_user (user_id),
    INDEX idx_rating (rating),
    CONSTRAINT unique_user_venue_booking UNIQUE (user_id, venue_id, booking_id)
);
```

---

### **Database 2: `groundwale_bookings`**

**Tables:**

**8. bookings**
```sql
CREATE TABLE bookings (
    booking_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_reference VARCHAR(20) UNIQUE NOT NULL, -- GW202512040001
    user_id UUID NOT NULL, -- References users
    venue_id UUID NOT NULL, -- References venues
    manager_id UUID NOT NULL, -- References ground_managers
    
    booking_date DATE NOT NULL,
    time_slot_start TIME NOT NULL,
    time_slot_end TIME NOT NULL,
    duration_hours DECIMAL(4,2) NOT NULL,
    
    sport_type VARCHAR(50),
    number_of_players INTEGER,
    
    -- Pricing
    base_price DECIMAL(10,2) NOT NULL,
    platform_fee DECIMAL(10,2) NOT NULL,
    gst_amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) DEFAULT 0.00,
    coupon_code VARCHAR(50),
    total_amount DECIMAL(10,2) NOT NULL,
    
    -- Payment
    payment_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'paid', 'refunded', 'failed'
    payment_method VARCHAR(20), -- 'razorpay', 'wallet', 'upi'
    payment_id VARCHAR(100),
    
    -- Booking flow
    booking_status VARCHAR(20) DEFAULT 'provisional', -- 'provisional', 'confirmed', 'cancelled', 'completed', 'no_show'
    confirmation_type VARCHAR(20), -- 'auto', 'manual'
    confirmed_at TIMESTAMP,
    
    -- Cancellation
    cancelled_at TIMESTAMP,
    cancelled_by VARCHAR(20), -- 'user', 'manager', 'system'
    cancellation_reason TEXT,
    refund_amount DECIMAL(10,2),
    refund_status VARCHAR(20), -- 'pending', 'processed', 'rejected'
    
    -- Special requests
    special_requests TEXT,
    manager_notes TEXT,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_user (user_id),
    INDEX idx_venue (venue_id),
    INDEX idx_manager (manager_id),
    INDEX idx_date (booking_date),
    INDEX idx_status (booking_status),
    INDEX idx_reference (booking_reference),
    INDEX idx_date_venue (booking_date, venue_id)
);
```

**9. payments**
```sql
CREATE TABLE payments (
    payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID REFERENCES bookings(booking_id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    
    payment_gateway VARCHAR(20), -- 'razorpay', 'stripe', 'paytm'
    transaction_id VARCHAR(100) UNIQUE,
    order_id VARCHAR(100),
    
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    
    payment_method VARCHAR(50), -- 'card', 'upi', 'netbanking', 'wallet'
    payment_details JSONB, -- {card_last4: "1234", bank: "HDFC"}
    
    status VARCHAR(20) DEFAULT 'initiated', -- 'initiated', 'success', 'failed', 'refunded'
    error_code VARCHAR(50),
    error_message TEXT,
    
    razorpay_signature VARCHAR(255),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_booking (booking_id),
    INDEX idx_user (user_id),
    INDEX idx_transaction (transaction_id),
    INDEX idx_status (status)
);
```

**10. refunds**
```sql
CREATE TABLE refunds (
    refund_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID REFERENCES bookings(booking_id) ON DELETE CASCADE,
    payment_id UUID REFERENCES payments(payment_id),
    user_id UUID NOT NULL,
    
    refund_amount DECIMAL(10,2) NOT NULL,
    refund_type VARCHAR(20), -- 'full', 'partial', 'wallet'
    refund_method VARCHAR(20), -- 'original_payment', 'wallet', 'bank_transfer'
    
    refund_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'processed', 'failed'
    gateway_refund_id VARCHAR(100),
    
    reason TEXT,
    processed_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_booking (booking_id),
    INDEX idx_user (user_id),
    INDEX idx_status (refund_status)
);
```

**11. availability_slots**
```sql
CREATE TABLE availability_slots (
    slot_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    venue_id UUID NOT NULL,
    slot_date DATE NOT NULL,
    time_slot_start TIME NOT NULL,
    time_slot_end TIME NOT NULL,
    
    is_available BOOLEAN DEFAULT true,
    is_blocked BOOLEAN DEFAULT false, -- Manager blocked
    blocked_reason VARCHAR(255),
    
    current_booking_id UUID, -- If booked
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_venue_date (venue_id, slot_date),
    INDEX idx_available (venue_id, slot_date, is_available),
    CONSTRAINT unique_venue_slot UNIQUE (venue_id, slot_date, time_slot_start)
);
```

**12. wallet_transactions**
```sql
CREATE TABLE wallet_transactions (
    transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    
    transaction_type VARCHAR(20), -- 'credit', 'debit'
    amount DECIMAL(10,2) NOT NULL,
    
    source VARCHAR(50), -- 'refund', 'referral', 'cashback', 'booking'
    reference_id UUID, -- booking_id or refund_id
    
    balance_before DECIMAL(10,2) NOT NULL,
    balance_after DECIMAL(10,2) NOT NULL,
    
    description TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_user (user_id),
    INDEX idx_type (transaction_type),
    INDEX idx_source (source)
);
```

**13. coupons**
```sql
CREATE TABLE coupons (
    coupon_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coupon_code VARCHAR(50) UNIQUE NOT NULL,
    
    description TEXT,
    discount_type VARCHAR(20), -- 'percentage', 'fixed'
    discount_value DECIMAL(10,2) NOT NULL,
    max_discount DECIMAL(10,2),
    min_booking_amount DECIMAL(10,2),
    
    applicable_sports TEXT[], -- ['cricket', 'football']
    applicable_cities TEXT[],
    applicable_venue_ids UUID[],
    
    usage_limit_total INTEGER,
    usage_limit_per_user INTEGER DEFAULT 1,
    usage_count INTEGER DEFAULT 0,
    
    valid_from TIMESTAMP NOT NULL,
    valid_until TIMESTAMP NOT NULL,
    
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_code (coupon_code),
    INDEX idx_active (is_active, valid_from, valid_until)
);
```

**14. coupon_usage**
```sql
CREATE TABLE coupon_usage (
    usage_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coupon_id UUID REFERENCES coupons(coupon_id),
    user_id UUID NOT NULL,
    booking_id UUID REFERENCES bookings(booking_id),
    
    discount_amount DECIMAL(10,2) NOT NULL,
    
    used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_coupon (coupon_id),
    INDEX idx_user (user_id)
);
```

**15. notifications**
```sql
CREATE TABLE notifications (
    notification_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    
    notification_type VARCHAR(50), -- 'booking_confirmed', 'payment_success', 'cancellation'
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    
    channel VARCHAR(20), -- 'push', 'sms', 'email', 'whatsapp'
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'sent', 'failed', 'read'
    
    reference_id UUID, -- booking_id or other reference
    action_url TEXT,
    
    metadata JSONB,
    
    sent_at TIMESTAMP,
    read_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_user (user_id),
    INDEX idx_status (status),
    INDEX idx_type (notification_type)
);
```

---

## **Firestore - Real-time Data**

### **Collections:**

**1. `live_availability`**
```json
{
  "venueId": "uuid",
  "date": "2025-12-04",
  "slots": {
    "06:00-07:00": {
      "available": true,
      "price": 1500,
      "activeViewers": 3
    },
    "07:00-08:00": {
      "available": false,
      "bookingId": "uuid",
      "activeViewers": 0
    }
  },
  "lastUpdated": "timestamp"
}
```
**Use Case:** Real-time slot availability, prevent double booking

**2. `active_sessions`**
```json
{
  "userId": "uuid",
  "sessionId": "uuid",
  "currentPage": "/bookings/venue-123",
  "cartItems": [
    {
      "venueId": "uuid",
      "date": "2025-12-05",
      "slot": "18:00-19:00",
      "lockedUntil": "timestamp"
    }
  ],
  "lastActivity": "timestamp"
}
```
**Use Case:** Hold slots during checkout, session management

**3. `live_notifications`**
```json
{
  "userId": "uuid",
  "notifications": [
    {
      "id": "uuid",
      "type": "booking_confirmed",
      "message": "Your booking is confirmed",
      "timestamp": "timestamp",
      "read": false
    }
  ],
  "unreadCount": 1
}
```
**Use Case:** Real-time push notifications

**4. `venue_activity`**
```json
{
  "venueId": "uuid",
  "currentViewers": 15,
  "recentBookings": 3,
  "trendingScore": 87,
  "lastBookingAt": "timestamp"
}
```
**Use Case:** Show "3 people viewing" or "5 booked today"

**5. `chat_rooms`**
```json
{
  "roomId": "user-uuid_manager-uuid",
  "participants": ["user-uuid", "manager-uuid"],
  "messages": [
    {
      "id": "uuid",
      "senderId": "uuid",
      "text": "Is the ground available?",
      "timestamp": "timestamp",
      "read": false
    }
  ],
  "lastMessage": "timestamp"
}
```
**Use Case:** User-manager chat support

---

## **Redis (Memorystore) - Caching & Temporary Data**

### **Keys & Use Cases:**

**1. Search Results Cache**
```
Key: search:cricket:bangalore:2025-12-04
Value: [venue_ids...]
TTL: 300 seconds (5 minutes)
```
**Use Case:** Cache venue search results

**2. Venue Details Cache**
```
Key: venue:uuid:details
Value: JSON(venue data)
TTL: 3600 seconds (1 hour)
```
**Use Case:** Cache frequently accessed venue details

**3. User Session**
```
Key: session:uuid
Value: {userId, token, expires}
TTL: 86400 seconds (24 hours)
```
**Use Case:** JWT token validation, session management

**4. OTP Storage**
```
Key: otp:+919876543210
Value: "123456"
TTL: 300 seconds (5 minutes)
```
**Use Case:** Phone verification OTPs

**5. Booking Locks**
```
Key: lock:venue:uuid:2025-12-04:18:00
Value: user_id
TTL: 600 seconds (10 minutes)
```
**Use Case:** Prevent double booking during checkout

**6. Rate Limiting**
```
Key: ratelimit:user:uuid:api
Value: request_count
TTL: 60 seconds
```
**Use Case:** API rate limiting (100 requests/minute)

**7. Popular Venues**
```
Key: trending:venues:bangalore
Value: SORTED SET {venue_id: score}
TTL: 1800 seconds (30 minutes)
```
**Use Case:** Show trending/popular venues

**8. Recently Viewed**
```
Key: recent:user:uuid
Value: LIST [venue_ids...]
TTL: 604800 seconds (7 days)
```
**Use Case:** "Recently Viewed" section

---

## **Use Case Examples:**

### **Scenario 1: User books a ground**
1. **PostgreSQL**: Check `venues`, `venue_pricing`
2. **Redis**: Check/set booking lock `lock:venue:uuid:date:time`
3. **Firestore**: Update `live_availability` (real-time)
4. **PostgreSQL**: Create `booking`, `payment` records
5. **Firestore**: Add to `live_notifications`
6. **PostgreSQL**: Insert `notification` record
7. **Redis**: Clear cache `search:*`, `venue:uuid:*`

### **Scenario 2: Search for grounds**
1. **Redis**: Check cache `search:cricket:bangalore:date`
2. If miss → **PostgreSQL**: Query `venues` with PostGIS
3. **Redis**: Store results for 5 minutes
4. Return to user

### **Scenario 3: Real-time availability**
1. User opens venue page
2. **Firestore**: Subscribe to `live_availability/{venueId}`
3. Other user books → **Firestore** updates instantly
4. First user sees slot as unavailable in real-time

### **Scenario 4: Manager updates pricing**
1. **PostgreSQL**: Update `venue_pricing`
2. **Redis**: Delete cache `venue:uuid:*`
3. **Firestore**: Update `live_availability` for today's slots

---

**This architecture handles:**
✅ 10K+ concurrent users
✅ Real-time booking updates
✅ Fast search with caching
✅ Prevent double bookings
✅ Location-based queries
✅ Complex pricing rules
✅ Scalable payments
✅ Analytics & reporting

Want me to create the SQL migration scripts or help with specific queries?