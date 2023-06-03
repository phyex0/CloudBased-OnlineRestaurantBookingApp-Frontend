import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/Auth";

const PrivateRoute = ({ allowedRoles = [] }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return allowedRoles?.includes(localStorage.getItem("role")) ? (
    <Outlet />
  ) : localStorage.getItem("token") ? ( //changed from user to accessToken to persist login after refresh
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

/*
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/Auth";

const PrivateUserRoutes = () => {

  return !isAuthUser ? <Outlet /> : <Navigate to="/user/login" replace={true} />;
};

export default PrivateUserRoutes;
*/
