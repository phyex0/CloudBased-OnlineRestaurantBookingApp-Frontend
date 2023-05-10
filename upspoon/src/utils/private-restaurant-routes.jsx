import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import AuthContext from "../context/Auth";

const PrivateRestaurantRoutes = () => {
  const { isAuthRestaurant } = useContext(AuthContext);

  useEffect(() => {
    console.log("isAuthRestaurant: ", isAuthRestaurant);
  }, []);

  return true ? <Outlet /> : <Navigate to="/restaurant/login" replace={true} />;
};

export default PrivateRestaurantRoutes;
