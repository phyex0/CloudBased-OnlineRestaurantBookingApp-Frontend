import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider, AuthService } from "react-oauth2-pkce";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const authService = new AuthService({
  clientId: "CHANGEME",
  location: window.location,
  provider: "https://sandbox.auth.ap-southeast-2.amazoncognito.com/oauth2",
  redirectUri: window.location.origin,
  scopes: ["openid", "profile"],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AuthProvider authService={authService}>
          <App />
        </AuthProvider>
      </GoogleOAuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
