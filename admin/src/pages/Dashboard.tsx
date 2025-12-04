// Admin Dashboard page - Main dashboard with statistics and management options
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-accent text-white font-bold text-2xl px-4 py-2 rounded-2xl">
                GW
              </div>
              <span className="text-2xl font-bold text-dark">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Bookings', value: '1,234', icon: '📅', color: 'from-blue-500 to-blue-600' },
            { label: 'Active Users', value: '567', icon: '👥', color: 'from-green-500 to-green-600' },
            { label: 'Total Revenue', value: '₹2.5L', icon: '💰', color: 'from-yellow-500 to-yellow-600' },
            { label: 'Ground Partners', value: '89', icon: '🏟️', color: 'from-purple-500 to-purple-600' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className={`bg-gradient-to-r ${stat.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-dark">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-dark mb-4">Recent Bookings</h2>
            <div className="space-y-3">
              {[
                { ground: 'Champions Arena', user: 'Rahul S.', time: '2 hours ago', amount: '₹500' },
                { ground: 'Victory Courts', user: 'Priya P.', time: '5 hours ago', amount: '₹400' },
                { ground: 'Elite Turf', user: 'Amit K.', time: '1 day ago', amount: '₹600' },
              ].map((booking, index) => (
                <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-dark">{booking.ground}</p>
                      <p className="text-sm text-gray-600">{booking.user} • {booking.time}</p>
                    </div>
                    <span className="text-accent font-bold">{booking.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-primary hover:text-accent transition-colors font-semibold">
              View All Bookings →
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-dark mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {[
                { label: 'Add New Ground', icon: '➕' },
                { label: 'Manage Users', icon: '👥' },
                { label: 'View Reports', icon: '📊' },
                { label: 'Settings', icon: '⚙️' },
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full bg-neutral hover:bg-gray-200 p-4 rounded-2xl text-left transition-colors flex items-center space-x-3"
                >
                  <span className="text-2xl">{action.icon}</span>
                  <span className="font-semibold text-dark">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TODO Section */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-dark mb-3">🚧 Backend Integration Required</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Connect to DynamoDB for user authentication</li>
            <li>• Implement real-time booking data fetching</li>
            <li>• Add API endpoints for CRUD operations</li>
            <li>• Integrate payment gateway</li>
            <li>• Add email notification service</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
