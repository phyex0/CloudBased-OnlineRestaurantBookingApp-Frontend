import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import IconCover from "../components/IconCover";
import UpButton from "../components/UpButton";
import { getOrders } from "../api/order";
import { createOrganization } from "../api/organization";
import { getRestaurantUser } from "../api/restaurant-user";
// redux
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount } from "../redux/counter";

const Home = () => {
  useEffect(() => {
    //createOrganization();
    getRestaurantUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.mainTextBox}>
          <h1 className={styles.heading}>
            Premium quality cateritng diets{" "}
            <IconCover className="bg-red-600">🍔</IconCover> for
            <IconCover className="bg-blue-600 mx-2">🍎</IconCover>
            exactin
          </h1>
          <h4 className={styles.subHeading}>
            Upspoon is always with you to order food easily. A fast, effective,
            inexpensive solution!
          </h4>

          <UpButton href="/user" className={styles.orderButton}>
            Start Ordering!
          </UpButton>
        </div>

        <img
          src="/images/home-bg.jpeg"
          alt="home"
          className={styles.homeImage}
        />
      </div>

      <div className={styles.partnerBox}>
        <h3 className={styles.partnerHeading}>Become our partner</h3>
        <div className={styles.partnerTextBox}>
          <h5 className={styles.partnerTextHeading}>
            Join now, start multiplying your sales with UpSpoon
          </h5>
          <p>
            Do you want to reach thousands of new users? Not only those in your
            own district, but also thousands of users in the surrounding
            districts will now be able to order from your business. A house, a
            plaza, a workplace or a university campus, whoever you want to serve
            is now your customer.
          </p>
          <p>
            It's pretty simple! We list your menu and send you the order
            information. If you wish, you can do the delivery of the order
            yourself, or UpSpoon delivers it to the user on your behalf.
          </p>
          <p>
            You can join our family now and become one of our business partners
            with great advantages.
          </p>
          <UpButton href="/restaurant" className={styles.bePartnerButton}>
            Be Partner
          </UpButton>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  
    <div className={styles.container}>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </div>
*/
