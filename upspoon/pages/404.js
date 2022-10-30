import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {}, [router]);

  return (
    <div className={styles.notFoundContainer}>
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
    </div>
  );
};

export default NotFound;
