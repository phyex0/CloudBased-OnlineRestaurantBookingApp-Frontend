import { useState, useEffect } from "react";
import styles from "../../styles/restaurant/RestaurantLogin.module.css";
import UpButton from "../../components/upButton";
import UpInput from "../../components/upInput";
import UpDropdown from "../../components/upDropdown";
import { packageServices } from "../../constants/package-services";
import Link from "next/link";

const RestaurantLogin = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRestaurantInfo((prevRestaurantInfo) => {
      return {
        ...prevRestaurantInfo,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(restaurantInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftArea}>
        <div className={styles.inputContainer}>
          <h2 className={styles.inputHeading}>UpSpoon'a Giriş Yap!</h2>
          <form onSubmit={handleSubmit}>
            <UpInput
              name="email"
              value={restaurantInfo?.email}
              placeholder="E-Posta"
              onChange={handleChange}
              className={[styles.input, styles.emailInput].join(" ")}
              required
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <UpInput
              name="password"
              value={restaurantInfo?.password}
              placeholder="Şifre"
              onChange={handleChange}
              className={[styles.input, styles.passwordInput].join(" ")}
              type="password"
              required
            />
            <UpInput
              value="Giriş Yap"
              type="submit"
              className={styles.loginSubmitButton}
            />
          </form>

          <div className={styles.linkContainer}>
            <Link
              href="/restaurant/forgot-password"
              className={styles.forgotPassword}
            >
              Şifremi Unuttum
            </Link>

            <Link href="/restaurant/register" className={styles.register}>
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightArea}>
        <img src="/images/upspoon-logo.png" alt="upspoon-logo" />
        <h4 className={styles.rightAreaHeading}>UpSpoon'a Hoşgeldiniz</h4>
      </div>
    </div>
  );
};

export default RestaurantLogin;
