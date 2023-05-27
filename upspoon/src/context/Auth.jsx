import { useState, useEffect, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isAuthRestaurant, setIsAuthRestaurant] = useState(false);
  const [organizationId, setOrganizationId] = useState(
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  );
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   setIsAuthRestaurant(true);
    //   setOrganizationId("3fa85f64-5717-4562-b3fc-2c963f66afa6");
    // }

    const cartProducts = localStorage.getItem("cartProducts");
    if (cartProducts) {
      setCartProducts(JSON.parse(cartProducts));
    }
  }, []);

  const addProductToCart = async (product) => {
    // add array and localstorage

    let cartProductsInsideCart = [...cartProducts, product];

    setCartProducts(cartProductsInsideCart);

    localStorage.setItem(
      "cartProducts",
      JSON.stringify(cartProductsInsideCart)
    );
  };

  const removeProductFromCart = (product) => {
    // remove array and localstorage
    let cartProductsInside = cartProducts.filter(
      (cartProduct) => cartProduct.productCode !== product.productCode
    );

    setCartProducts(cartProductsInside);

    localStorage.setItem("cartProducts", JSON.stringify(cartProductsInside));
  };

  const removeAllProductsFromCart = () => {
    setCartProducts([]);

    localStorage.setItem("cartProducts", JSON.stringify([]));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthUser,
        isAuthRestaurant,
        setIsAuthUser,
        setIsAuthRestaurant,
        organizationId,
        addProductToCart,
        cartProducts,
        removeProductFromCart,
        removeAllProductsFromCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
