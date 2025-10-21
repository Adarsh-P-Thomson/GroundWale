// Admin Login page - Authentication page for admin dashboard access
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // TODO: Replace with API call to verify credentials in DynamoDB
    const success = login(email, password);

    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary to-accent text-white font-bold text-3xl px-6 py-3 rounded-2xl inline-block mb-4">
            GW
          </div>
          <h1 className="text-3xl font-bold text-dark mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Sign in to manage GroundWale</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-dark mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-2xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 p-4 bg-neutral rounded-2xl">
          <p className="text-xs text-gray-600 mb-2">
            <strong>Admin Credentials:</strong>
          </p>
          <p className="text-xs text-gray-600">Email: admin@example.com</p>
          <p className="text-xs text-gray-600">Password: admin123</p>
          <p className="text-xs text-gray-600 mt-2">
            <a 
              href="https://console.aws.amazon.com/dynamodb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              Verify credentials in DynamoDB →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
