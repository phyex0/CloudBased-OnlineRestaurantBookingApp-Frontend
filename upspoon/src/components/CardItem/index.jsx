import styles from "./style.module.css";

function CardItem({ card: { title, image, description } }) {
    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} />
            <h3 className={styles.titleText}>{title}</h3>
            <p className={styles.descriptionText}>
                {description}
            </p>
        </div>
    )
}

export default CardItem