// Authentication utilities for admin dashboard - mock login with localStorage
// This will be replaced with real API calls to DynamoDB in production

interface User {
  email: string;
  role: 'user' | 'admin';
  name: string;
}

interface AuthToken {
  token: string;
  user: User;
  expiry: number;
}

const MOCK_USERS = {
  'user@example.com': { password: 'password123', role: 'user' as const, name: 'Test User' },
  'admin@example.com': { password: 'admin123', role: 'admin' as const, name: 'Admin User' },
};

const TOKEN_KEY = 'groundwale_admin_token';
const TOKEN_EXPIRY_MINUTES = 30;

/**
 * Mock login function - validates credentials and stores token
 * TODO: Replace with API call to verify credentials in DynamoDB
 */
export const login = (email: string, password: string): boolean => {
  const mockUser = MOCK_USERS[email as keyof typeof MOCK_USERS];
  
  if (!mockUser || mockUser.password !== password) {
    return false;
  }

  // Only allow admin role to access admin dashboard
  if (mockUser.role !== 'admin') {
    return false;
  }

  const token = btoa(`${email}:${Date.now()}`);
  const expiry = Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000;
  
  const authToken: AuthToken = {
    token,
    user: {
      email,
      role: mockUser.role,
      name: mockUser.name,
    },
    expiry,
  };

  localStorage.setItem(TOKEN_KEY, JSON.stringify(authToken));
  return true;
};

/**
 * Logout function - clears authentication token
 */
export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * Check if user is authenticated with valid token
 */
export const isAuthenticated = (): boolean => {
  const tokenData = localStorage.getItem(TOKEN_KEY);
  if (!tokenData) return false;

  try {
    const authToken: AuthToken = JSON.parse(tokenData);
    
    // Check if token is expired
    if (Date.now() > authToken.expiry) {
      logout();
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
};

/**
 * Get current authenticated user
 */
export const getCurrentUser = (): User | null => {
  const tokenData = localStorage.getItem(TOKEN_KEY);
  if (!tokenData) return null;

  try {
    const authToken: AuthToken = JSON.parse(tokenData);
    
    // Check if token is expired
    if (Date.now() > authToken.expiry) {
      logout();
      return null;
    }
    
    return authToken.user;
  } catch {
    return null;
  }
};
