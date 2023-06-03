import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/Auth";

const UserFoodLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserFoodLayout;
