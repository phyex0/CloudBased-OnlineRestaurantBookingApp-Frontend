import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/Auth";

const RootLayout = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="bg-white dark:bg-black">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
