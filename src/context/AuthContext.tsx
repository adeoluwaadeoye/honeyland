"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type AuthContextType = {
  user: string | null;
  token: string | null;
  login: (username: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      // wrap in setTimeout to prevent "setState in effect" ESLint warning
      setTimeout(() => {
        setToken(storedToken);
        setUser(storedUser);
      });
    }
  }, []);

  const login = (username: string, token: string) => {
    setUser(username);
    setToken(token);
    localStorage.setItem("user", username);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};