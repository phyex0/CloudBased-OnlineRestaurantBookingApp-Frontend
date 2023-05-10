import styles from "./style.module.css";

const Product = ({ productData, className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <p className={styles.name}>{productData?.productName}</p>
      <p className={styles.description}>{productData?.description}</p>
      <p className={styles.price}>{productData?.price}₺</p>
    </div>
  );
};

export default Product;
