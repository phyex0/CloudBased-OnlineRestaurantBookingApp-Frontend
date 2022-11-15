import styles from "./style.module.css";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(() => import("../theme-button"), { ssr: false });

const Footer = ({ className, ...props }) => {
  return (
    <div
      className={[styles.container, className, "dark:bg-gray-800"].join(" ")}
      {...props}
    >
      <h3 className={[styles.footerTitle, "dark:text-white"].join(" ")}>
        UPSPOON
      </h3>
      <ThemeButton />
    </div>
  );
};

export default Footer;
