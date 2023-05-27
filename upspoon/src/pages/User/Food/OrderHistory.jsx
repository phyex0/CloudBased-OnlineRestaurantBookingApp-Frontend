import { useState, useEffect } from "react";
import MiniLoading from "../../../components/Loading/MiniLaoding";
import { errorMessage } from "../../../helpers/toast";
import { getOrderHistory } from "../../../api/order";

const OrderHistory = () => {
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    setLoadingOrders(true);
    try {
      let response = await getOrderHistory(userId);
      setOrderHistory(response.data.content);
    } catch (err) {
      errorMessage("Can't get orders");
    } finally {
      setLoadingOrders(false);
    }
  };

  return (
    <div>
      {loadingOrders && <MiniLoading />}
      {orderHistory.length == 0 ? (
        <div className="flex flex-col text-center items-center mt-4 w-full md:w-1/2 ml-auto mr-auto">
          <h2 className="font-semibold text-xl">
            Your order history is currently empty
          </h2>
          <p className="mt-2">
            Fill your basket from the world of Upspoon full of opportunities!
          </p>
        </div>
      ) : (
        <div className="w-full md:w-full px-4 py8 flex flex-col gap-6">
          {orderHistory.map((product) => (
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
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
