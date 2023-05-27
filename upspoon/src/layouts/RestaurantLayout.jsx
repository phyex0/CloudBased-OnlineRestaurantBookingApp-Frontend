import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AuthContext from "../context/Auth";
import RestaurantHeader from "../components/RestaurantHeader";

const RestaurantLayout = () => {
  const { isAuthRestaurant } = useContext(AuthContext);

  return (
    <div>
      <RestaurantHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RestaurantLayout;
