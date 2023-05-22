import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/Auth";

const UserBookingLayout = () => {
  const { isAuthUser } = useContext(AuthContext);

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserBookingLayout;
