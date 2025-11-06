'use client';
import { useState } from 'react';

export default function Userprofile() {
  const [activeSection, setActiveSection] = useState('bookings');
  const [activeFilter, setActiveFilter] = useState('All');
  const [firstName, setFirstName] = useState('Kaushik');
  const [lastName, setLastName] = useState('Raj');
  const [email, setEmail] = useState('info@gmail.com');
  const [phone, setPhone] = useState('+0000000000');

  const bookings = [
    {
      id: 1,
      groundName: 'Central Sports Complex',
      date: '2025-10-25',
      time: '10:00 AM - 12:00 PM',
      status: 'Confirmed',
      amount: '₹150',
      sport: 'Football',
      location: 'Downtown'
    },
    {
      id: 2,
      groundName: 'Elite Cricket Ground',
      date: '2025-10-28',
      time: '2:00 PM - 4:00 PM',
      status: 'Pending',
      amount: '₹200',
      sport: 'Cricket',
      location: 'Uptown'
    },
    {
      id: 3,
      groundName: 'Premium Basketball Court',
      date: '2025-10-22',
      time: '6:00 PM - 8:00 PM',
      status: 'Completed',
      amount: '₹120',
      sport: 'Basketball',
      location: 'Eastside'
    }
  ];

  const transactions = [
    { id: 1, date: '2025-10-20', description: 'Booking Payment - Central Sports Complex', amount: '-₹150', type: 'debit' },
    { id: 2, date: '2025-10-18', description: 'Wallet Topup', amount: '+₹500', type: 'credit' },
    { id: 3, date: '2025-10-15', description: 'Booking Payment - Elite Cricket Ground', amount: '-₹200', type: 'debit' },
    { id: 4, date: '2025-10-12', description: 'Refund - Cancelled Booking', amount: '+₹180', type: 'credit' },
    { id: 5, date: '2025-10-10', description: 'Booking Payment - Premium Basketball Court', amount: '-₹120', type: 'debit' }
  ];

  const handleSaveProfile = () => {
    console.log('Profile saved');
  };

  const handleTopup = () => {
    console.log('Topup wallet');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  const renderBookings = () => (
    <section className="content-section">
      <div className="section-header">
        <h1 className="section-title">My Bookings</h1>
        <button className="btn-primary">+ New Booking</button>
      </div>

      <div className="filter-tabs">
        <button className={`filter-tab ${activeFilter === 'All' ? 'active' : ''}`} onClick={() => setActiveFilter('All')}>All</button>
        <button className={`filter-tab ${activeFilter === 'Upcoming' ? 'active' : ''}`} onClick={() => setActiveFilter('Upcoming')}>Upcoming</button>
        <button className={`filter-tab ${activeFilter === 'Completed' ? 'active' : ''}`} onClick={() => setActiveFilter('Completed')}>Completed</button>
        <button className={`filter-tab ${activeFilter === 'Cancelled' ? 'active' : ''}`} onClick={() => setActiveFilter('Cancelled')}>Cancelled</button>
      </div>

      <div className="bookings-grid">
        {bookings.filter(booking => activeFilter === 'All' || booking.status === activeFilter).map((booking) => (
          <div key={booking.id} className="booking-card">
            <div className="booking-header">
              <h3 className="booking-title">{booking.groundName}</h3>
              <span className={`status-badge status-${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </div>
            <div className="booking-details">
              <div className="detail-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{booking.date} • {booking.time}</span>
              </div>
              <div className="detail-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{booking.location}</span>
              </div>
              <div className="detail-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
                <span>{booking.sport}</span>
              </div>
            </div>
            <div className="booking-footer">
              <span className="booking-amount">{booking.amount}</span>
              <div className="booking-actions">
                <button className="btn-secondary-small">View Details</button>
                {booking.status === 'Confirmed' && (
                  <button className="btn-danger-small">Cancel</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderWallet = () => (
    <section className="content-section">
      <h1 className="section-title">Wallet</h1>

      <div className="wallet-balance-card">
        <div className="balance-content">
          <p className="balance-label">Available Balance</p>
          <h2 className="balance-amount">₹1,250.00</h2>
          <p className="balance-subtitle">Last updated: Today at 3:45 PM</p>
        </div>
        <button className="btn-primary" onClick={handleTopup}>+ Add Money</button>
      </div>

      <div className="wallet-stats">
        <div className="stat-card">
          <div className="stat-icon stat-icon-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Received</p>
            <p className="stat-value">₹680.00</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Spent</p>
            <p className="stat-value">₹470.00</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Transactions</p>
            <p className="stat-value">{transactions.length}</p>
          </div>
        </div>
      </div>

      <div className="transactions-section">
        <h2 className="subsection-title">Recent Transactions</h2>
        <div className="transactions-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">
                {transaction.type === 'credit' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                )}
              </div>
              <div className="transaction-details">
                <p className="transaction-description">{transaction.description}</p>
                <p className="transaction-date">{transaction.date}</p>
              </div>
              <span className={`transaction-amount ${transaction.type}`}>
                {transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProfile = () => (
    <section className="content-section">
      <h1 className="section-title">Profile Settings</h1>

      <div className="profile-form">
        <div className="form-section">
          <h3 className="form-section-title">Personal Information</h3>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">Preferences</h3>

          <div className="preferences-grid">
            <label className="preference-item">
              <input type="checkbox" className="preference-checkbox" defaultChecked />
              <span className="preference-label">Email notifications for bookings</span>
            </label>

            <label className="preference-item">
              <input type="checkbox" className="preference-checkbox" defaultChecked />
              <span className="preference-label">SMS notifications for confirmations</span>
            </label>

            <label className="preference-item">
              <input type="checkbox" className="preference-checkbox" />
              <span className="preference-label">Promotional emails</span>
            </label>

            <label className="preference-item">
              <input type="checkbox" className="preference-checkbox" defaultChecked />
              <span className="preference-label">Booking reminders</span>
            </label>
          </div>
        </div>

        <button className="btn-primary" onClick={handleSaveProfile}>
          Save Changes
        </button>
      </div>
    </section>
  );

  const renderContactUs = () => (
    <section className="content-section">
      <h1 className="section-title">Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-info-title">Get in Touch</h3>
          <p className="contact-info-text">
            Have questions or need assistance? We're here to help! Reach out to us through any of the following channels.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-method-content">
                <p className="contact-method-label">Email</p>
                <p className="contact-method-value">support@groundbooking.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-method-content">
                <p className="contact-method-label">Phone</p>
                <p className="contact-method-value">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-method-content">
                <p className="contact-method-label">Address</p>
                <p className="contact-method-value">123 Sports Avenue, City, State 12345</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="contact-method-content">
                <p className="contact-method-label">Working Hours</p>
                <p className="contact-method-value">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <h3 className="contact-form-title">Send us a Message</h3>

          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className="form-input"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              rows="5"
              placeholder="Tell us more about your inquiry..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .profile-container {
          display: flex;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background-color: #ffffff;
        }

        .sidebar {
          width: 320px;
          background: linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%);
          padding: 60px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: fixed;
          height: 100vh;
          overflow: hidden;
          border-right: 1px solid rgba(0, 0, 0, 0.05);
        }

        .sidebar::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -50px;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          transform: rotate(-25deg);
        }

        .sidebar::after {
          content: '';
          position: absolute;
          bottom: -150px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .profile-image-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 20px;
          border: 4px solid rgba(255, 255, 255, 0.5);
          z-index: 1;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-name {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
          z-index: 1;
        }

        .profile-email {
          font-size: 14px;
          color: #666;
          margin-bottom: 40px;
          z-index: 1;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          z-index: 1;
        }

        .nav-item {
          padding: 16px 20px;
          text-decoration: none;
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          border-radius: 12px;
          cursor: pointer;
          background: transparent;
          border: none;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: translateX(4px);
        }

        .nav-item.active {
          background: rgba(255, 152, 0, 0.15);
          color: #ff9800;
        }

        .nav-item svg {
          width: 20px;
          height: 20px;
        }

        .main-content {
          flex: 1;
          margin-left: 320px;
          padding: 60px 80px;
          background-color: #fafafa;
          overflow-y: auto;
        }

        .content-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 32px;
        }

        .subsection-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .filter-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
        }

        .filter-tab {
          padding: 10px 20px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-tab:hover {
          border-color: #ff9800;
          color: #ff9800;
        }

        .filter-tab.active {
          background: #ff9800;
          border-color: #ff9800;
          color: #ffffff;
        }

        .bookings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .booking-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .booking-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .booking-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 20px;
        }

        .booking-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-confirmed {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .status-pending {
          background: #fff3e0;
          color: #ef6c00;
        }

        .status-completed {
          background: #e3f2fd;
          color: #1565c0;
        }

        .booking-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #666;
        }

        .detail-row svg {
          color: #ff9800;
        }

        .booking-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #f0f0f0;
        }

        .booking-amount {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .booking-actions {
          display: flex;
          gap: 8px;
        }

        .wallet-balance-card {
          background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
          border-radius: 20px;
          padding: 40px;
          color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          box-shadow: 0 8px 24px rgba(25, 118, 210, 0.25);
        }

        .balance-label {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 8px;
        }

        .balance-amount {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .balance-subtitle {
          font-size: 13px;
          opacity: 0.8;
        }

        .wallet-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-green {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .stat-icon-red {
          background: #ffebee;
          color: #c62828;
        }

        .stat-icon-blue {
          background: #e3f2fd;
          color: #1565c0;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .transactions-section {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 32px;
        }

        .transactions-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #fafafa;
          border-radius: 12px;
          transition: background 0.3s ease;
        }

        .transaction-item:hover {
          background: #f5f5f5;
        }

        .transaction-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f0f0;
        }

        .transaction-details {
          flex: 1;
        }

        .transaction-description {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .transaction-date {
          font-size: 13px;
          color: #999;
        }

        .transaction-amount {
          font-size: 16px;
          font-weight: 700;
        }

        .transaction-amount.credit {
          color: #2e7d32;
        }

        .transaction-amount.debit {
          color: #c62828;
        }

        .profile-form {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 40px;
        }

        .form-section {
          margin-bottom: 40px;
        }

        .form-section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 2px solid #f0f0f0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .form-input {
          padding: 14px 16px;
          font-size: 15px;
          color: #1a1a1a;
          background-color: #fafafa;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus {
          background-color: #ffffff;
          border-color: #ff9800;
          box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
        }

        .form-textarea {
          padding: 14px 16px;
          font-size: 15px;
          color: #1a1a1a;
          background-color: #fafafa;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
          resize: vertical;
        }

        .form-textarea:focus {
          background-color: #ffffff;
          border-color: #ff9800;
          box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
        }

        .preferences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .preference-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #fafafa;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .preference-item:hover {
          background: #f0f0f0;
        }

        .preference-checkbox {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #ff9800;
        }

        .preference-label {
          font-size: 14px;
          color: #1a1a1a;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
        }

        .contact-info {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 32px;
        }

        .contact-info-title {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .contact-info-text {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-method {
          display: flex;
          align-items: start;
          gap: 16px;
        }

        .contact-method-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1976d2;
          flex-shrink: 0;
        }

        .contact-method-label {
          font-size: 13px;
          color: #999;
          margin-bottom: 4px;
        }

        .contact-method-value {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .contact-form {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 32px;
        }

        .contact-form-title {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .btn-primary {
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
        }

        .btn-secondary-small {
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
          background: #f0f0f0;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary-small:hover {
          background: #e5e5e5;
        }

        .btn-danger-small {
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #c62828;
          background: #ffebee;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-danger-small:hover {
          background: #ffcdd2;
        }

        @media (max-width: 1200px) {
          .sidebar {
            width: 280px;
            padding: 40px 20px;
          }

          .main-content {
            margin-left: 280px;
            padding: 40px 40px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 992px) {
          .profile-container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            padding: 30px 20px;
            position: relative;
            height: auto;
          }

          .sidebar-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 12px;
          }

          .nav-item {
            white-space: nowrap;
          }

          .main-content {
            margin-left: 0;
            padding: 30px 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .bookings-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 26px;
          }

          .balance-amount {
            font-size: 36px;
          }

          .wallet-balance-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .btn-primary {
            width: 100%;
          }
        }
      `}</style>

      <div className="profile-container">
        <aside className="sidebar">
          <div className="profile-image-wrapper">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <h3 className="profile-name">{firstName} {lastName}</h3>
          <p className="profile-email">{email}</p>

          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeSection === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveSection('bookings')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Bookings
            </button>
            <button
              className={`nav-item ${activeSection === 'wallet' ? 'active' : ''}`}
              onClick={() => setActiveSection('wallet')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Wallet
            </button>
            <button
              className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveSection('profile')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </button>
            <button
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Us
            </button>
          </nav>
        </aside>

        <main className="main-content">
          {activeSection === 'bookings' && renderBookings()}
          {activeSection === 'wallet' && renderWallet()}
          {activeSection === 'profile' && renderProfile()}
          {activeSection === 'contact' && renderContactUs()}
        </main>
      </div>
    </>
  );
}
