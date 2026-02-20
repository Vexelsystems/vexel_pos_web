"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserProfile {
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  currentShopId?: string | null;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  [key: string]: any;
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  loading: boolean;
  login: (user: UserProfile, token: string) => void;
  updateUser: (newData: Partial<UserProfile>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Initialize Auth from localStorage
    const storedUser = localStorage.getItem("vexel_user");
    const storedToken = localStorage.getItem("vexel_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = (userData: UserProfile, authToken: string) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("vexel_user", JSON.stringify(userData));
    localStorage.setItem("vexel_token", authToken);
  };

  const updateUser = (newData: Partial<UserProfile>) => {
    if (!user) return;
    const updatedUser = { ...user, ...newData };
    setUser(updatedUser);
    localStorage.setItem("vexel_user", JSON.stringify(updatedUser));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("vexel_user");
    localStorage.removeItem("vexel_token");
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, updateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
