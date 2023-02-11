import styles from "./style.module.css";
import { FiGlobe } from 'react-icons/fi';
import { BiFoodMenu } from 'react-icons/bi';
import { HiUser, HiUserAdd } from 'react-icons/hi';
import { MdFastfood } from 'react-icons/md';

function OrderHeader() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <nav className={styles.headerGroup}>
                        <a href="#"
                            className={styles.headerText}>
                            <MdFastfood size={18} />
                            Food
                        </a>
                        <a href="#"
                            className={styles.headerText}>
                            <BiFoodMenu size={18} />
                            Booking
                        </a>
                    </nav>
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