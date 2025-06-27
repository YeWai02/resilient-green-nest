
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  greenPoints: number;
  location: string;
  level: string;
  streak: number;
  totalTrashCaptured: number;
  co2Saved: string;
  treesPlanted: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateGreenPoints: (points: number) => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('resilient_asean_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo login - in real app, this would call an API
    if (email && password) {
      const userData: User = {
        id: 'user123',
        name: 'Kyaw Gyi',
        email: email,
        greenPoints: 245,
        location: 'Yangon, Myanmar',
        level: 'Climate Champion',
        streak: 12,
        totalTrashCaptured: 28,
        co2Saved: '15.2 kg',
        treesPlanted: 3
      };
      
      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem('resilient_asean_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('resilient_asean_user');
  };

  const updateGreenPoints = (points: number) => {
    if (user) {
      const updatedUser = { ...user, greenPoints: user.greenPoints + points };
      setUser(updatedUser);
      localStorage.setItem('resilient_asean_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateGreenPoints, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
