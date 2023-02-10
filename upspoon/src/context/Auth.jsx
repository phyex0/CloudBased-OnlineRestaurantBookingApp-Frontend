import { useState, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isAuthRestaurant, setIsAuthRestaurant] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthUser,
        isAuthRestaurant,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
