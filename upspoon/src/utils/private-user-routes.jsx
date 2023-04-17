import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/Auth";

const PrivateUserRoutes = () => {
  const { isAuthUser } = useContext(AuthContext);

  return !isAuthUser ? <Outlet /> : <Navigate to="/user/login" replace={true} />;
};

export default PrivateUserRoutes;
