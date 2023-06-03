import { useContext } from "react";
import LoginOAuth2 from "@okteto/react-oauth2-login";
import axios from "axios";
import * as querystring from "querystring";
import AuthContext from "../../context/Auth";
import { authUrl, redirectUrl } from "../../constants/apiUrl";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Oauth2Login = ({ className, type = "", ...props }) => {
  const onSuccess = (response) => getAccessToken(response.code);
  const onFailure = (response) => console.error(response);

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const getAccessToken = (responseCode) => {
    axios
      .post(
        `${authUrl}/oauth2/token`,
        querystring.stringify({
          grant_type: "authorization_code",
          code: responseCode,
          client_id: "upspoon",
          client_secret: "secret",
          redirect_uri: redirectUrl,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(async (response) => {
        console.log("login response: ", response);
        let token = response?.data?.access_token;
        let decodedData = jwt_decode(token);
        console.log("decoded data: ", decodedData);

        let role = decodedData.roles[0]; // USER_ROLE, BUSINESS_ROLE, ORGANIZATION_ROLE, ADMIN_ROLE
        let email = decodedData?.sub;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);

        setAuth({
          role: role,
          token: token,
          email: email,
        });

        if (role === "USER_ROLE") {
          navigate("/user");
        } else if (role === "BUSINESS_ROLE" || role === "ORGANIZATION_ROLE") {
          navigate("/restaurant");
        } else if (role === "ADMIN_ROLE") {
          navigate("/user");
        } else {
          navigate("/user");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <LoginOAuth2
      clientId="upspoon"
      authorizeUri={`${authUrl}/oauth2/authorize`}
      redirectUri={redirectUrl}
      scope="openid"
      responseType="code"
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Start Ordering"
      className={className}
    />
  );
};

export default Oauth2Login;
