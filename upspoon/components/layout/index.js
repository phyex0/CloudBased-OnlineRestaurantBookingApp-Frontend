import Head from "next/head";
import Footer from "../footer";
import Header from "../header";
import styles from "./style.module.css";
import { isUser } from "../../helpers/layout-type";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>UpSpoon</title>
        <meta name="description" content="Book and Order" />
        <meta property="og:image" content={require("/public/vercel.svg")} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div
        className={
          isUser(router.asPath)
            ? styles.layoutUserContainer
            : styles.layoutRestaurantContainer
        }
      >
        <Header className="bg-red-400" />
        <main className={styles.mainLayout}>{children}</main>
        <Footer className="bg-blue-300" />
      </div>
    </>
  );
};

export default Layout;
