import { useState, useEffect, useContext } from "react";
import styles from "./style.module.css";
import { FiGlobe } from "react-icons/fi";
import { BiFoodMenu } from "react-icons/bi";
import { HiUser, HiUserAdd } from "react-icons/hi";
import { MdFastfood } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Oauth2Login from "../Oauth2Login";
import Modal from "react-modal";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import AuthContext from "../../context/Auth";

const RestaurantHeader = () => {
  const [currentTitle, setCurrentTitle] = useState("Food");
  const [crumbAmount, setCrumbAmout] = useState(0);
  const [userRegisterModal, setUserRegisterModal] = useState(false);

  const location = useLocation();

  const { cartProducts } = useContext(AuthContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <nav className={styles.headerGroup}>
            <button onClick={() => setCurrentTitle("Food")}>
              <Link
                to={"/restaurant"}
                className={currentTitle == "Food" && styles.currentHeader}
              >
                <a href="#" className={styles.headerText}>
                  <MdFastfood size={18} />
                  Food
                </a>
              </Link>
            </button>
            <button onClick={() => setCurrentTitle("Booking")}>
              <Link
                to={"/restaurant/booking"}
                className={currentTitle == "Booking" && styles.currentHeader}
              >
                <a href="#" className={styles.headerText}>
                  <BiFoodMenu size={18} />
                  Booking
                </a>
              </Link>
            </button>
          </nav>
          <nav className={styles.headerGroup}>
            {/* <a href="#" className={styles.headerText}>
              <FiGlobe size={18} />
              Türkçe (TR)
            </a> */}
            <div className={styles.headerText}>
              <HiUser size={18} />
              {localStorage.getItem("token") ? "Admin" : <Oauth2Login />}
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                localStorage.removeItem("email");
                window.location.reload();
              }}
              className={styles.headerText}
            >
              Çıkış Yap
            </button>
          </nav>
        </div>
      </div>
      {/*crumbAmount >= 3 && (
        <div className={styles.subtitleHeader}>
          <a href="#">{currentTitle}</a>
        </div>
      )*/}
    </>
  );
};

export default RestaurantHeader;
