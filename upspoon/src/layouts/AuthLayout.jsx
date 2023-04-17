import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthContext from "../context/Auth";

const AuthLayout = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="bg-white dark:bg-black grid grid-rows-layoutSecond">
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;
