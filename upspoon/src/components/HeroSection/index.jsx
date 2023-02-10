import { useState } from 'react'
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import { FaFacebook } from 'react-icons/fa';
import styles from "./style.module.css";

function HeroSection() {

    const [selected, setSelected] = useState('TR');

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: false,
    };

    const flags = {
        US: '+1',
        GB: '+5',
        FR: '+70',
        DE: '+30',
        IT: '+11',
        TR: '+90',
    }

    return (
        <div
            className={styles.container}>
            <Slider className={styles.slider} {...settings}>
                <div>
                    <div className={styles.bgImage}
                        style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/background-blurry-restaurant-shop-interior_1203-4031.jpg)' }}></div>
                </div>

            </Slider>
            <div className={styles.body}>
                <div className={styles.bodyInner}>
                    <div className={styles.titleContainer}>
                        <h3 className={[styles.footerTitle, "dark:text-white"].join(" ")}>
                            UPSPOON<br />LOGO
                        </h3>
                        <h3 className={styles.subTitle}>
                            Dakikalar içinde<br />kapınızda
                        </h3>
                    </div>
                    <div className={styles.authContainer}>
                        <h3 className={styles.authText}>Giriş yap veya kayıt ol</h3>
                        <div className={styles.authDiv}>
                            <div className={styles.phoneFlag}>
                                <ReactFlagsSelect
                                    countries={Object.keys(flags)}
                                    customLabels={flags}
                                    selected={selected}
                                    onSelect={code => setSelected(code)}
                                />
                                <label className={styles.phoneInput}>
                                    <input required
                                        className={styles.phoneCover} />
                                    <span
                                        className={styles.phoneNumber}>
                                        Telefon Numarası
                                    </span>
                                </label>
                            </div>
                            <button className={styles.continueWithPhone}>
                                Telefon numarası ile devam et
                            </button>
                            <button className={styles.facebookButton}>
                                <FaFacebook size={26} className={styles.faFacebook} />
                                <span className={styles.facebookText}>
                                    Facebook ile devam et
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection