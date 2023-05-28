import styles from "./style.module.css";
import Food5 from "../../assets/images/food-5.webp";

const Product = ({ productData, className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <img
        src={productData.productImage ? productData.productImage : Food5}
        alt={productData.productName}
        className="w-full object-cover"
      />
      <div>
        <p className={styles.name}>{productData?.productName}</p>
        <p className={styles.description}>{productData?.description}</p>
        <p className={styles.price}>{productData?.price}₺</p>
        <img src={productData?.productImage} alt="Product Image" width={100} />
      </div>
    </div>
  );
};

export default Product;
