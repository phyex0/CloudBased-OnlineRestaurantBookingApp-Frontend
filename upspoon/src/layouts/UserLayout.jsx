import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import AuthContext from "../context/Auth";

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
