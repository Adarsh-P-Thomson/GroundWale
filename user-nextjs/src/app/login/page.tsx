// Login page - User authentication with mock credentials and DynamoDB integration placeholder
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { login } from '@/utils/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // TODO: Replace with API call to verify credentials in DynamoDB
    const success = login(email, password);

    if (success) {
      router.push('/');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary to-accent text-white font-bold text-3xl px-6 py-3 rounded-2xl inline-block mb-4">
            GW
          </div>
          <h1 className="text-3xl font-bold text-dark mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your GroundWale account</p>
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
              placeholder="user@example.com"
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

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-primary hover:text-accent transition-colors font-semibold">
              Sign up
            </a>
          </p>
        </div>

        <div className="mt-8 p-4 bg-neutral rounded-2xl">
          <p className="text-xs text-gray-600 mb-2">
            <strong>Test Credentials:</strong>
          </p>
          <p className="text-xs text-gray-600">User: user@example.com / password123</p>
          <p className="text-xs text-gray-600">Admin: admin@example.com / admin123</p>
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
      </motion.div>
    </div>
  );
}
