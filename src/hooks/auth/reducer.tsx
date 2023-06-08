import React, { useState } from 'react';
import { AuthContextType } from './type';

const initAuthType: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: (_: boolean) => { },
};

const AuthContext = React.createContext<AuthContextType>(initAuthType);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext);
