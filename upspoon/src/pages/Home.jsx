import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import IconCover from "../components/IconCover";
import UpButton from "../components/UpButton";
import homeBg from "../assets/images/home-bg.png";
import Footer from "../components/Footer";
import OAuth2Login from "react-simple-oauth2-login";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import ClientOAuth2 from "client-oauth2";
import Facebook from "react-oauth2";

const Home = () => {
  const [credentialResponse, setCredentialResponse] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!credentialResponse?.credential) return;
    setUser(jwtDecode(credentialResponse.credential));
  }, [credentialResponse]);

  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.error(response);

  const facebook = (err, res) => {
    if (!err) {
      console.log("res: ", res);
    } else {
      console.log("err: ");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainBox}>
          <div className={styles.mainTextBox}>
            <h1 className={styles.heading}>
              Premium quality cateritng diets{" "}
              <IconCover className="bg-red-600 w-8 h-8 lg:w-16 lg:h-16">
                🍔
              </IconCover>{" "}
              for
              <IconCover className="bg-blue-600 mx-2 w-8 h-8 lg:w-16 lg:h-16">
                🍎
              </IconCover>
              exactin
            </h1>
            <h4 className={styles.subHeading}>
              Upspoon is always with you to order food easily. A fast,
              effective, inexpensive solution!
            </h4>

            <div>
              <h4>GOOGLE</h4>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(
                    "Login Success Current User: ",
                    credentialResponse
                  );
                  setCredentialResponse(credentialResponse);
                }}
                onError={(res) => {
                  console.log("Login Failed: ", res);
                }}
                useOneTap
              />

              <div className="flex flex-col items-center">
                <h1>Current User Google</h1>
                <img
                  src={user?.picture}
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full mt-6 mb-4"
                />
                <h2>{user?.name}</h2>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </div>

              <div>
                <h1>Current User Custom</h1>
                <OAuth2Login
                  authorizationUrl="https://accounts.spotify.com/authorize"
                  responseType="token"
                  clientId="9822046hvr4lnhi7g07grihpefahy5jb"
                  redirectUri="http://localhost:3000/oauth-callback"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </div>

              <div>
                <h4>Custom USER 2</h4>

                <Facebook
                  url={"http://localhost:5173/"}
                  clientId={""}
                  clientSecret={""}
                  redirectUri={"http://localhost:5173/"}
                  scope={"email,user_location"}
                  width={300}
                  height={300}
                  callback={facebook}
                  style={{ color: "green" }}
                >
                  Login With Facebook From component
                </Facebook>
              </div>
            </div>

            <UpButton
              href="/user"
              className={[styles.orderButton, "mt-10"].join(" ")}
            >
              Start Ordering!
            </UpButton>
          </div>

          <div className={styles.homeImageContainer}>
            <img src={homeBg} alt="home" className={styles.homeImage} />
          </div>
        </div>

        <div className={styles.partnerBox}>
          <h3 className={styles.partnerHeading}>Become our partner</h3>
          <div className={[styles.partnerTextBox].join(" ")}>
            <h5 className={styles.partnerTextHeading}>
              Join now, start multiplying your sales with UpSpoon
            </h5>
            <p>
              Do you want to reach thousands of new users? Not only those in
              your own district, but also thousands of users in the surrounding
              districts will now be able to order from your business. A house, a
              plaza, a workplace or a university campus, whoever you want to
              serve is now your customer.
            </p>
            <p>
              It's pretty simple! We list your menu and send you the order
              information. If you wish, you can do the delivery of the order
              yourself, or UpSpoon delivers it to the user on your behalf.
            </p>
            <p>
              You can join our family now and become one of our business
              partners with great advantages.
            </p>
            <UpButton href="/restaurant" className={styles.bePartnerButton}>
              Be Partner
            </UpButton>
          </div>
        </div>
      </div>
      <Footer className="py-8" />
    </>
  );
};

export default Home;
