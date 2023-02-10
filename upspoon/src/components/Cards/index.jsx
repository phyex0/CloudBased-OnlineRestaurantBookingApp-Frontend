import CardItem from '../CardItem'
import styles from "./style.module.css";
import cards from '../../api/cards.json'
function Cards() {

    return (
        <>
            <div className={styles.container}>
                {cards.map((card, key) => <CardItem key={key} card={card} />)}
            </div>
        </>
    )
}

export default Cards