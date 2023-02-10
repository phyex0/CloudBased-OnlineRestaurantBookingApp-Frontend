import styles from "./style.module.css";

function CategoryItem({ category }) {
    return (
        <a href="/order/detail" className={styles.container}>
            <img src={category.image} className={styles.image} />
            <span className={styles.title}>{category.title}</span>
        </a>
    )
}

export default CategoryItem