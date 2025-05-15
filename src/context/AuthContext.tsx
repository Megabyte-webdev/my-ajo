import React, { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
//import { useQueryClient } from "@tanstack/react-query";

// Define token and auth types
interface Token {
  token: string;
  expiresAt: string; // ISO string
}

interface AuthUser {
  id: string;
  email: string;
  name: string;
  token: Token;
  [key: string]: any; // For any additional fields
}

interface AuthContextType {
  authDetails: AuthUser | undefined ;
  updateAuth: (user: AuthUser | undefined) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
 // const queryClient = useQueryClient();

  const [authDetails, setAuthDetails] = useState<AuthUser>(() => {
    const storedUser = sessionStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  /*const isTokenExpired = (expiresAt: string): boolean => {
    return new Date(expiresAt) <= new Date();
  };*/

  const refreshToken = async () => {
    if (!authDetails?.token?.token) return;

    try {
      const response = await fetch("/api/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authDetails.token.token}`,
        },
      });

      if (!response.ok) throw new Error("Token refresh failed");

      const newToken: Token = await response.json();
      updateAuth({ ...authDetails, token: newToken });
    } catch (error) {
      console.error("Failed to refresh token:", error);
      updateAuth(null);
    }
  };

  const updateAuth = (user: AuthUser | undefined) => {
    setAuthDetails(user);
    if (user) {
      sessionStorage.setItem("authUser", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("authUser");
    }
  };

  useEffect(() => {
    // if (!authDetails?.token?.expiresAt) return;

    // if (isTokenExpired(authDetails.token.expiresAt)) {
    //   updateAuth(null);
    // }
    setAuthDetails({
    id: "1",
    email: "agent@example.com",
    name: "Agent",
    token: {
      token: "dummy-token",
      expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(), // 1 hour from now
    },
  });
  }, []);

  useEffect(() => {
    if (!authDetails?.token?.expiresAt) return;

    const expiresIn =
      new Date(authDetails.token.expiresAt).getTime() - Date.now();

    if (expiresIn > 0) {
      const timer = setTimeout(refreshToken, expiresIn - 60000);
      return () => clearTimeout(timer);
    }
  }, [authDetails]);

  return (
    <AuthContext.Provider value={{ authDetails, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
