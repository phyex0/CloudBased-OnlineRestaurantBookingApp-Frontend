import { Link } from "react-router-dom";
import styles from "./style.module.css";

function CategoryItem({ category }) {
  return (
    <Link to={`/user/food/${category.title}`} className={styles.container}>
      <img src={category.image} className={styles.image} />
      <span className={styles.title}>{category.title}</span>
    </Link>
  );
}

export default CategoryItem;
