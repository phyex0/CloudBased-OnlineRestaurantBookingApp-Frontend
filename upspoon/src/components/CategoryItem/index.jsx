import styles from "./style.module.css";

function CategoryItem({ category }) {
    return (
        <a href={`/user/food/${category.title}`} className={styles.container}>
            <img src={category.image} className={styles.image} />
            <span className={styles.title}>{category.title}</span>
        </a>
    )
}

export default CategoryItem