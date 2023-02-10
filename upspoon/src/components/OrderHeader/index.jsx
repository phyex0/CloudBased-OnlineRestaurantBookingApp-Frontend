import styles from "./style.module.css";
import { FiGlobe } from 'react-icons/fi';
import { HiUser, HiUserAdd } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io'

function OrderHeader() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <a href="#" className={styles.logoMarkCotainer}>
                        <a href="#"
                            className={styles.logoMark}>
                            Upspoon LOGOMARK
                        </a>
                    </a>
                    <nav className={styles.headerGroup}>
                        <a href="#"
                            className={styles.headerText}>
                            <FiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                        <a href="#"
                            className={styles.headerText}>
                            <HiUser size={18} />
                            Giriş yap
                        </a>
                        <a href="#"
                            className={styles.headerText}>
                            <HiUserAdd size={19} />
                            Kayıt ol
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default OrderHeader