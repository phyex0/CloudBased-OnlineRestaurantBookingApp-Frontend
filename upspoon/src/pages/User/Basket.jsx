import { useContext, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import styles from "../../styles/user/Basket.module.css";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import MiniLoading from "../../components/Loading/MiniLaoding";
import { createOrder } from "../../api/order";
import { errorMessage, successMessage } from "../../helpers/toast";
import AuthContext from "../../context/Auth";
import Food5 from "../../assets/images/food-5.webp";
import { useNavigate } from "react-router-dom";

const UserBasket = () => {
  const [loadingOrder, setLoadingOrder] = useState(false);

  const width = useWindowWidth();

  const navigate = useNavigate();

  const { cartProducts, removeProductFromCart, removeAllProductsFromCart } =
    useContext(AuthContext);

  const approveCart = async () => {
    setLoadingOrder(true);
    try {
      let response = await createOrder({
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        productId: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
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
    <div>
      {loadingOrder && <MiniLoading />}
      {cartProducts.length == 0 ? (
        <div className="flex flex-col text-center items-center mt-4 w-full md:w-1/2 ml-auto mr-auto">
          <h2 className="font-semibold text-xl">Sepetin şu an boş</h2>
          <p className="mt-2">
            Sepetini Upspoon'un fırsatlarla dolu dünyasından doldur!
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
    </div>
  );
};

export default UserBasket;
