import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { FiGlobe } from "react-icons/fi";
import { BiFoodMenu } from "react-icons/bi";
import { HiUser, HiUserAdd } from "react-icons/hi";
import { MdFastfood } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Oauth2Login from "../Oauth2Login";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserHeader = () => {
  const [currentTitle, setCurrentTitle] = useState("Food");
  const [crumbAmount, setCrumbAmout] = useState(0);
  const [userRegisterModal, setUserRegisterModal] = useState(false);

  const location = useLocation();

  const crumbs = () => {
    setCrumbAmout(location.pathname.split("/").length);
  };

  const openRegisterModal = () => {
    setUserRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setUserRegisterModal(false);
  };

  useEffect(() => {
    crumbs();
  }, [currentTitle]);

  return (
    <>
      <Modal
        isOpen={userRegisterModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeRegisterModal}
        className="bg-red-500 z-50 relative flex flex-col items-center w-full md:w-1/2 mx-auto mt-20 dark:bg-gray-800 dark:text-white rounded-md shadow-md p-4"
        contentLabel="Regsiter"
      >
        <h2>Register</h2>
        <p>email input</p>
        <p>password input</p>
      </Modal>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <nav className={styles.headerGroup}>
            <button onClick={() => setCurrentTitle("Food")}>
              <Link
                to={"/user"}
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
                to={"/user/booking"}
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

            {/* burada modal açman gerekebilir register modal */}
            <Link to="/user/register" className={styles.headerText}>
              <HiUserAdd size={19} />
              Kayıt ol
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className={styles.headerText}
            >
              Çıkış Yap
            </button>
          </nav>
        </div>
      </div>
      {crumbAmount >= 3 && (
        <div className={styles.subtitleHeader}>
          <a href="#">{currentTitle}</a>
        </div>
      )}
    </>
  );
};

export default UserHeader;
