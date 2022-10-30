import styles from "./style.module.css";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(
  () => import("../theme-button").then(({ ThemeButton }) => ThemeButton),
  { ssr: false }
);

const Footer = ({ className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}>
      <p>Footer</p>
      <ThemeButton />
    </div>
  );
};

export default Footer;
