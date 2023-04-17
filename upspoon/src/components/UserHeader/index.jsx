import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { FiGlobe } from 'react-icons/fi';
import { BiFoodMenu } from 'react-icons/bi';
import { HiUser, HiUserAdd } from 'react-icons/hi';
import { MdFastfood } from 'react-icons/md';
import { Link, useLocation } from "react-router-dom";

function UserHeader() {
    const [currentTitle, setCurrentTitle] = useState('Food')
    const location = useLocation()
    const [crumbAmount, setCrumbAmout] = useState(0)

    const crumbs = () => {
        setCrumbAmout(location.pathname.split('/').length)
    }

    useEffect(() => {
        crumbs()
    }, [currentTitle]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <nav className={styles.headerGroup}>
                        <button onClick={() => setCurrentTitle('Food')}>
                            <Link to={'/user'} className={currentTitle == 'Food' && styles.currentHeader}>
                                <a href="#"
                                    className={styles.headerText}>
                                    <MdFastfood size={18} />
                                    Food
                                </a>
                            </Link>
                        </button>
                        <button onClick={() => setCurrentTitle('Booking')}>
                            <Link to={'/user/booking'} className={currentTitle == 'Booking' && styles.currentHeader}>
                                <a href="#"
                                    className={styles.headerText}>
                                    <BiFoodMenu size={18} />
                                    Booking
                                </a>
                            </Link>
                        </button>
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
            {crumbAmount >= 3 &&
                <div className={styles.subtitleHeader}>
                    <a href="#">
                        {currentTitle}
                    </a>
                </div>
            }
        </>
    )
}

export default UserHeader