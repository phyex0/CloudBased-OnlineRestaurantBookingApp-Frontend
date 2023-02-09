import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AuthContext from "../context/Auth";

const RestaurantLayout = () => {
  const { isAuthRestaurant } = useContext(AuthContext);

  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RestaurantLayout;
