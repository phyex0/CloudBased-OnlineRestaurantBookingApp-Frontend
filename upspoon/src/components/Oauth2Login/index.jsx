import { useContext } from "react";
import LoginOAuth2 from "@okteto/react-oauth2-login";
import axios from "axios";
import * as querystring from "querystring";
import AuthContext from "../../context/Auth";
const url_auth = import.meta.env.VITE_API_AUTH

const Oauth2Login = ({ className, type = "", ...props }) => {
  const onSuccess = (response) => getAccessToken(response.code);
  const onFailure = (response) => console.error(response);
  const { setIsAuthUser, setIsAuthRestaurant } = useContext(AuthContext);

  const getAccessToken = (responseCode) => {
    axios
      .post(
        `${url_auth}/oauth2/token`,
        querystring.stringify({
          grant_type: "authorization_code",
          code: responseCode,
          client_id: "upspoon",
          client_secret: "secret",
          redirect_uri: "http://127.0.0.1:5173",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log("response: ", response);
        localStorage.setItem("token", response?.data?.access_token);
        setIsAuthUser(true);
        if (type == "restaurant") {
          console.log("yep");
          setIsAuthRestaurant(true);
        }
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <LoginOAuth2
      clientId="upspoon"
      authorizeUri={`${url_auth}/oauth2/authorize`}
      redirectUri="http://127.0.0.1:5173"
      scope="openid"
      responseType="code"
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Giriş Yap"
      className={className}
    />
  );
};

export default Oauth2Login;
