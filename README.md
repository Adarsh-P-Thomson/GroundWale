# GroundWale - Sports Facility Booking Platform

GroundWale is a comprehensive sports facility booking platform consisting of two frontend applications:

1. **user-nextjs** - Public-facing marketing and booking website (Next.js + TypeScript + Tailwind CSS + Framer Motion)
2. **admin-vite** - Internal admin dashboard (Vite + React + TypeScript + Tailwind CSS)

## 🎨 Design System

- **Primary Blue**: `#0088CC`
- **Accent Orange**: `#FF9222`
- **Neutral Light**: `#F5F7FA`
- **Dark Gray**: `#222831`
- **Font**: "Poppins", sans-serif
- **Border Radius**: `rounded-2xl` (1rem)
- **Shadows**: `shadow-lg`
- **Button Hover**: Gradient from blue to orange

## 📁 Folder Structure

```
GroundWale/
├── user-nextjs/              # Public user website
│   ├── src/
│   │   ├── app/              # Next.js app directory
│   │   │   ├── login/        # Login page
│   │   │   ├── static/       # Static pages (Privacy, Terms, FAQ)
│   │   │   ├── layout.tsx    # Root layout
│   │   │   ├── page.tsx      # Home page
│   │   │   └── globals.css   # Global styles
│   │   ├── components/       # Reusable components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── utils/
│   │       └── auth.ts       # Authentication utilities
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── Dockerfile
│   └── nginx.conf
│
├── admin-vite/               # Admin dashboard
│   ├── src/
│   │   ├── pages/            # Page components
│   │   │   ├── Login.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── components/       # Reusable components
│   │   │   └── ProtectedRoute.tsx
│   │   ├── utils/
│   │   │   └── auth.ts       # Authentication utilities
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── Dockerfile
│   └── nginx.conf
│
├── docker-compose.yml        # Docker Compose configuration
├── .gitignore
└── README.md

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)

### Installation

#### User Website (Next.js)

```bash
cd user-nextjs
npm install
npm run dev
```

The user website will be available at `http://localhost:3000`

#### Admin Dashboard (Vite)

```bash
cd admin-vite
npm install
npm run dev
```

The admin dashboard will be available at `http://localhost:4000`

## 🏗️ Building for Production

### User Website

```bash
cd user-nextjs
npm run build
```

This creates an optimized production build in the `out/` directory.

### Admin Dashboard

```bash
cd admin-vite
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 🐳 Docker Deployment

Build and run both applications using Docker Compose:

```bash
# Build and start containers
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop containers
docker-compose down
```

The applications will be available at:
- User Website: `http://localhost:3000`
- Admin Dashboard: `http://localhost:4000`

## 🔐 Test Credentials

### User Website
- **Email**: `user@example.com`
- **Password**: `password123`

### Admin Dashboard
- **Email**: `admin@example.com`
- **Password**: `admin123`

**Note**: Both apps include a link to verify credentials in DynamoDB (placeholder for future implementation).

## 🌐 AWS S3 + CloudFront Deployment

### Step 1: Build the Applications

```bash
# Build user website
cd user-nextjs
npm run build

# Build admin dashboard
cd ../admin-vite
npm run build
```

### Step 2: Create S3 Buckets

```bash
# Create buckets for both apps
aws s3 mb s3://groundwale-user
aws s3 mb s3://groundwale-admin

# Enable static website hosting
aws s3 website s3://groundwale-user --index-document index.html --error-document index.html
aws s3 website s3://groundwale-admin --index-document index.html --error-document index.html
```

### Step 3: Upload Build Files

```bash
# Upload user website
cd user-nextjs
aws s3 sync out/ s3://groundwale-user --delete

# Upload admin dashboard
cd ../admin-vite
aws s3 sync dist/ s3://groundwale-admin --delete
```

### Step 4: Set Bucket Policies

Create a bucket policy for public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::groundwale-user/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy --bucket groundwale-user --policy file://bucket-policy.json
aws s3api put-bucket-policy --bucket groundwale-admin --policy file://bucket-policy.json
```

### Step 5: Create CloudFront Distributions

```bash
# Create distribution for user website
aws cloudfront create-distribution \
  --origin-domain-name groundwale-user.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html

# Create distribution for admin dashboard
aws cloudfront create-distribution \
  --origin-domain-name groundwale-admin.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

### Step 6: Configure Custom Error Pages

In CloudFront distribution settings, add a custom error response:
- HTTP Error Code: 404
- Response Page Path: /index.html
- HTTP Response Code: 200

This ensures proper routing for single-page applications.

### Step 7: Update DNS

Point your domain to the CloudFront distribution:
- User Website: `www.groundwale.com` → CloudFront distribution
- Admin Dashboard: `admin.groundwale.com` → CloudFront distribution

## 📚 Features

### User Website Features
- ✨ Animated landing page with Framer Motion
- 🏟️ Hero section with CTA buttons
- 💡 Features showcase
- 📖 How It Works guide
- 🏆 Top Grounds display
- 💬 Customer Testimonials
- 🔐 User authentication (mock)
- 📄 Static pages (Privacy Policy, Terms, FAQ)
- 📱 Fully responsive design
- 🎨 Modern gradient UI with Tailwind CSS

### Admin Dashboard Features
- 🔐 Admin authentication (mock)
- 📊 Statistics dashboard
- 📅 Recent bookings overview
- ⚡ Quick action buttons
- 🛡️ Protected routes
- 📱 Responsive layout

## 🛠️ Technology Stack

### User Website (Next.js)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Next.js built-in

### Admin Dashboard (Vite)
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite

## 🔮 Backend TODOs

The following features require backend implementation:

### Authentication & User Management
- [ ] Integrate AWS DynamoDB for user credentials
- [ ] Implement JWT-based authentication
- [ ] Add password reset functionality
- [ ] Implement role-based access control (RBAC)
- [ ] Add OAuth/Social login (Google, Facebook)

### Booking System
- [ ] Create booking API endpoints
- [ ] Implement real-time availability checking
- [ ] Add booking confirmation emails
- [ ] Implement cancellation and refund logic
- [ ] Add booking history and management

### Payment Integration
- [ ] Integrate payment gateway (Razorpay/Stripe)
- [ ] Implement secure payment processing
- [ ] Add invoice generation
- [ ] Implement refund processing

### Ground Management
- [ ] CRUD operations for sports grounds
- [ ] Image upload and management (S3)
- [ ] Availability calendar management
- [ ] Pricing and discount management
- [ ] Review and rating system

### Admin Features
- [ ] Real-time analytics dashboard
- [ ] User management interface
- [ ] Booking management system
- [ ] Revenue reports and analytics
- [ ] Email notification system

### Infrastructure
- [ ] Set up AWS Lambda for serverless functions
- [ ] Configure API Gateway
- [ ] Implement CloudWatch logging
- [ ] Set up automated backups
- [ ] Configure CDN for static assets

## 🧪 Testing

```bash
# Run linting
cd user-nextjs && npm run lint
cd ../admin-vite && npm run lint
```

## 📝 License

This project is proprietary and confidential.

## 👥 Contributing

Please contact the project maintainers for contribution guidelines.

## 📧 Contact

For questions or support, please contact: support@groundwale.com

---

**Last Updated**: October 2024