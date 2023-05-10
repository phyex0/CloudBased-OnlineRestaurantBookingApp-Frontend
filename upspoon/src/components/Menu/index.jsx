import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Product from "../Product";

const Menu = ({ menuData, addProduct = () => {}, ...props }) => {
  useEffect(() => {
    console.log("menuData: ", menuData);
  }, []);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.productSection}>
        <div className={styles.menusContainer}>
          <h2 className={styles.menuName}>{menuData?.name}</h2>
          {menuData?.productList?.map((product) => (
            <Product productData={product} key={product.productCode} />
          ))}
        </div>
      </div>
      <button
        className="border rounded-md px-3 py-2 mr-auto mt-4 font-semibold bg-blue-600 text-white"
        onClick={() => {
          addProduct(menuData);
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default Menu;
