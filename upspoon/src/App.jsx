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
import RestaurantLayout from "./layouts/RestaurantLayout";
import Restaurant from "./pages/Restaurant/Restaurant";
import RestaurantSettings from "./pages/Restaurant/Settings";
import UserLayout from "./layouts/UserLayout";
import User from "./pages/User/User";
import FoodCategoryDetail from "./pages/User/Food/FoodCategoryDetail";
import FoodDetail from "./pages/User/Food/FoodDetail";
import UserRegister from "./pages/User/Register";
import RestaurantRegister from "./pages/Restaurant/Register";
import AuthLayout from "./layouts/AuthLayout";
import UserBookingLayout from "./layouts/UserBookingLayout";
import Booking from "./pages/User/Food/Booking";
import BookingDetail from "./pages/User/Food/BookingDetail";
import UserBasket from "./pages/User/Basket";
import { Toaster } from "react-hot-toast";
import UserFood from "./pages/User/Food/Food";
import OrderHistory from "./pages/User/Food/OrderHistory";
import RestaurantBooking from "./pages/Restaurant/Booking";
import { PrivateRoute } from "./utils/private-routes";
import Unauthorized from "./components/Unauthorized";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route
        element={
          <PrivateRoute
            allowedRoles={["ADMIN_ROLE", "BUSINESS_ROLE", "ORGANIZATION_ROLE"]}
          />
        }
      >
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<Restaurant />} />
          <Route path="/restaurant/detail" element={<RestaurantDetail />} />
          <Route path="/restaurant/settings" element={<RestaurantSettings />} />
          <Route path="/restaurant/booking" element={<RestaurantBooking />} />
        </Route>
      </Route>

      <Route
        element={<PrivateRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]} />}
      >
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<User />} />

          <Route path="/user/food" element={<UserFood />} />
          <Route path="/user/food/:name" element={<FoodCategoryDetail />} />
          <Route path="/user/food/detail/:name" element={<FoodDetail />} />
          <Route path="/user/order-history" element={<OrderHistory />} />

          <Route path="/user/booking" element={<UserBookingLayout />}>
            <Route index element={<Booking />} />
            <Route index path=":name" element={<BookingDetail />} />
          </Route>
          <Route path="/user/basket" element={<UserBasket />}>
            <Route index element={<Booking />} />
            <Route index path=":name" element={<BookingDetail />} />
          </Route>
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/restaurant/register" element={<RestaurantRegister />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
};

export default App;
