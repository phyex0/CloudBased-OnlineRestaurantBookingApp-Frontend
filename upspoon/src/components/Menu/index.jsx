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
          <div className="flex justify-between w-full items-center mb-3">
            <h2 className={styles.menuName}>{menuData?.name}</h2>
            <button
              className="border rounded-md px-3 py-2 font-semibold bg-main text-white"
              onClick={() => {
                addProduct(menuData);
              }}
            >
              Add Product
            </button>
          </div>
          <div className="flex flex-col gap-16">
            {menuData?.productList?.map((product) => (
              <Product productData={product} key={product.productCode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
