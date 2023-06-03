import { useState, useEffect, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    role: null,
    token: null,
    email: null,
  });

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");

    if (token && role && email) {
      setAuth({
        role: role,
        token: token,
        email: email,
      });
    }
  }, []);

  useEffect(() => {
    const cartProducts = localStorage.getItem("cartProducts");
    if (cartProducts) {
      setCartProducts(JSON.parse(cartProducts));
    }
  }, []);

  /*
          if (role === "BUSINESS_ROLE" || role === "ORGANIZATION_ROLE") {
          let response = await getRestaurantUserByEmail(token, email);
          console.log("resutaurnt id response: ", response);
          userId = response?.data?.id;
        } else if (role === "USER_ROLE") {
          let response = await getUser(token, email);
          console.log("user id response: ", response);
          userId = response?.data?.id;
        }
  */

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
        auth,
        setAuth,
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
