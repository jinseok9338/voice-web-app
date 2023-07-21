import React, { ReactNode, useMemo } from "react";
import TokenManager from "src/utils/tokenManager";

const AuthContext = React.createContext({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Here you can use your authentication logic
  // For simplicity I'll just simulate authenticated state using useState

  // check TokenManager for tokens
  const isAuthenticated = useMemo(() => {
    const accessToken = TokenManager.getAccessToken();
    const refreshToken = TokenManager.getRefreshToken();
    if (accessToken && refreshToken) {
      return true;
    }
    return false;
  }, []);

  const contextValue = {
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
