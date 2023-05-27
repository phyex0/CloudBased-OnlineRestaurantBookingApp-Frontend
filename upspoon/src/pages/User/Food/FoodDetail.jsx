import { useState, useEffect, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ContentMenu from "../../../components/ContentMenu";
import { useLocation, useParams } from "react-router-dom";
import { getProduct } from "../../../api/order";
import { errorMessage, successMessage } from "../../../helpers/toast";
import MiniLoading from "../../../components/Loading/MiniLaoding";
import Food5 from "../../../assets/images/food-5.webp";
import AuthContext from "../../../context/Auth";

const FoodDetail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    description: null,
    price: null,
    productCode: null,
    productImage: null,
    productName: null,
  });

  const { addProductToCart } = useContext(AuthContext);

  const { name } = useParams();
  const location = useLocation();

  useEffect(() => {
    document.title = name;

    const organizationId = getOrganizationId();
    const productId = getProductId();

    getRestaurantProduct(organizationId, productId);
  }, [location.search]);

  const getOrganizationId = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("organizationId");
  };

  const getProductId = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("productId");
  };

  const getRestaurantProduct = async (organizationId, productId) => {
    setLoading(true);
    try {
      let response = await getProduct(organizationId, productId);
      setProduct(response.data);
    } catch (err) {
      errorMessage("Can't get product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start justify-center bg-white p-4 md:p-8">
      {loading && <MiniLoading />}
      <div className="w-full md:w-1/3 border-2 border-green-500 border-opacity-50">
        <img
          src={product.productImage ? product.productImage : Food5}
          alt={product.productName}
          className="w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0 flex flex-col justify-start">
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
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none w-1/4 mb-4"
          onClick={() => {
            addProductToCart(product);
            successMessage("Product added to cart.");
          }}
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default FoodDetail;
