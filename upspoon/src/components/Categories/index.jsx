import { useEffect, useState } from 'react'
import categoriesData from '../../api/categories.json'
import CategoryItem from '../CategoryItem';
import styles from "./style.module.css";

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(categoriesData)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h3 className={styles.categoriesText}>Kategoriler</h3>
                <div className={styles.categoryList}>
                    {categories && categories.map(category => <CategoryItem key={category.id} category={category} />)}
                </div>
            </div>
        </div>
    )
}

export default Categories