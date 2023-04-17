import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/Auth";
import PrivateUserRoutes from "./utils/private-user-routes";
import PrivateRestaurantRoutes from "./utils/private-restaurant-routes";
import RestaurantLayout from "./layouts/RestaurantLayout";
import Restaurant from "./pages/Restaurant/Restaurant";
import RestaurantSettings from "./pages/Restaurant/Settings";
import UserLayout from "./layouts/UserLayout";
import User from "./pages/User/User";
import UserBooking from "./pages/User/Food/Booking";
import UserFood from "./pages/User/Food/Food";
import UserLogin from "./pages/User/Login";
import UserRegister from "./pages/User/Register";
import RestaurantRegister from "./pages/Restaurant/Register";
import RestaurantLogin from "./pages/Restaurant/Login";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route element={<PrivateRestaurantRoutes />}>
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<Restaurant />} />
          <Route path="/restaurant/settings" element={<RestaurantSettings />} />
        </Route>
      </Route>

      <Route element={<PrivateUserRoutes />}>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<User />} />
          <Route path="/user/food" element={<UserFood />} />
          <Route path="/user/booking" element={<UserBooking />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route
          path="/user/login"
          element={<UserLogin />} /*loader={loginLoader}*/
        />
        <Route
          path="/user/register"
          element={<UserRegister />} /*loader={loginLoader}*/
        />
        <Route
          path="/restaurant/login"
          element={<RestaurantLogin />} /*loader={loginLoader}*/
        />
        <Route
          path="/restaurant/register"
          element={<RestaurantRegister />} /*loader={loginLoader}*/
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
