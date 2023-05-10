import { useState, useEffect, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isAuthRestaurant, setIsAuthRestaurant] = useState(false);
  const [organizationId, setOrganizationId] = useState(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthRestaurant(true);
      setOrganizationId("3fa85f64-5717-4562-b3fc-2c963f66afa6");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthUser,
        isAuthRestaurant,
        setIsAuthUser,
        setIsAuthRestaurant,
        organizationId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
