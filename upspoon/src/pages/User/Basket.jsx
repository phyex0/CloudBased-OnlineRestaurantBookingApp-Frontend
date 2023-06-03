import { useContext, useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import styles from "../../styles/user/Basket.module.css";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import MiniLoading from "../../components/Loading/MiniLaoding";
import { createOrder } from "../../api/order";
import { errorMessage, successMessage } from "../../helpers/toast";
import AuthContext from "../../context/Auth";
import Food5 from "../../assets/images/food-5.webp";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../api/user";
import { getRestaurantUserByEmail } from "../../api/restaurant-user";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

const UserBasket = () => {
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [userId, setUserId] = useState(null);

  const width = useWindowWidth();

  const navigate = useNavigate();

  const {
    auth,
    cartProducts,
    removeProductFromCart,
    removeAllProductsFromCart,
  } = useContext(AuthContext);

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    let email = localStorage.getItem("email");
    let response = await getUser(email);
    setUserId(response?.data?.id);
  };

  /*
  const getUserId = async () => {
    let role = localStorage.getItem("role");
    let email = localStorage.getItem("email");
    if (role === "BUSINESS_ROLE" || role === "ORGANIZATION_ROLE") {
      let response = await getRestaurantUserByEmail(email);
      console.log("resutaurnt id response: ", response);
      setUserId(response?.data?.id);
    } else if (role === "USER_ROLE") {
      let response = await getUser(email);
      console.log("user id response: ", response);
      setUserId(response?.data?.id);
    }
  };

  */

  const approveCart = async () => {
    setLoadingOrder(true);
    let productIds = cartProducts.map((product) => product.id);
    try {
      let response = await createOrder({
        userId: userId,
        productId: productIds,
        orderStatus: "ORDER_CREATED",
        orderNote: "",
      });
      successMessage("Order created.");
      removeAllProductsFromCart();
      navigate("/user/order-history");
    } catch (err) {
      errorMessage("Can't create order.");
    } finally {
      setLoadingOrder(false);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProducts.forEach((product) => {
      totalPrice += product.price;
    });

    return totalPrice;
  };

  return (
    <div className="flex flex-col items-center">
      {loadingOrder && <MiniLoading />}
      {cartProducts.length == 0 ? (
        <div className="flex flex-col text-center items-center mt-4 w-full md:w-1/2 ml-auto mr-auto">
          <h2 className="font-semibold text-xl">Your cart is empty now</h2>
          <p className="mt-2">
            Fill up your cart from Upspoon's world full of opportunities!
          </p>
        </div>
      ) : (
        <div className="px-2 md:px-8 py-8">
          <h5 className="mb-3 font-semibold text-lg">
            Sepetinde şu an {cartProducts.length} ürün var
          </h5>
          <div className="flex gap-10 ">
            <div className="w-full md:w-3/4 flex flex-col gap-6">
              {cartProducts.map((product) => (
                <>
                  <div className="w-full flex flex-col md:w-1/3 border-2 border-green-500 border-opacity-50">
                    <img
                      src={product.productImage ? product.productImage : Food5}
                      alt={product.productName}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-start">
                    <h1 className="text-xl md:text-2xl font-semibold mb-1">
                      {product.productName}
                    </h1>

                    <p className="text-lg md:text-xl font-medium text-gray-700 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center flex-col">
                        <span className="text-lg md:text-xl font-semibold">
                          ₺{product.price}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        removeProductFromCart(product);
                      }}
                      className="flex justify-betwen items-center w-40 md:w-28 text-white px-2 py-1 rounded-md bg-red-500"
                    >
                      <span className="w-full">Delete</span>
                      <Trash className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </>
              ))}
            </div>
            <div className="w-full md:w-1/4">
              <h4>Toplam Fiyat</h4>
              <h2 className="font-semibold text-lg">
                ₺{calculateTotalPrice()}
              </h2>
              <button
                onClick={() => {
                  approveCart();
                }}
                className="bg-main px-2 py-3 rounded-md text-white font-semibold w-full mt-4"
              >
                Approve Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Link
        to="/user/order-history"
        className="mt-4 font-semibold text-xl flex items-center"
      >
        <span className="mr-2">Order History</span>
        <ArrowRight width="22" height="22" className="text-black" />
      </Link>
    </div>
  );
};

export default UserBasket;
