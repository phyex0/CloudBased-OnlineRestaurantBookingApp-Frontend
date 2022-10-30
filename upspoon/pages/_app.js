import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

import Layout from "../components/layout";
import { StoreProvider } from "../context/store-context";

import "../styles/globals.css";

// notifiy the user
import { ToastContainer } from "react-toastify";

// top progress bar for page transitions
// import NProgress from "nprogress";
import "/public/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

// redux store
import { Provider } from "react-redux";
import store from "../redux/store";
import { handleUrlProgress } from "../helpers/url-progress";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    handleUrlProgress(router);
  }, [router]);

  return (
    <Provider store={store}>
      <StoreProvider>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <ToastContainer />
      </StoreProvider>
    </Provider>
  );
};

export default MyApp;
