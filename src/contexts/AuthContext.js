import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setAuthentication] = useState(false);

  const toggleAuth = () => {
    setAuthentication(!isAuthenticated);
  };

  useEffect(() => {
    alert(
      isAuthenticated
        ? "Login successful"
        : "You are logged out. Please login to see todos"
    );
  });

  const authContextData = {
    isAuthenticated,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
