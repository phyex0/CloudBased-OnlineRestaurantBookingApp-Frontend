import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/Auth";

const PrivateRestaurantRoutes = () => {
  const { isAuthRestaurant } = useContext(AuthContext);

  return isAuthRestaurant ? (
    <Outlet />
  ) : (
    <Navigate to="/user/login" replace={true} />
  );
};

export default PrivateRestaurantRoutes;
