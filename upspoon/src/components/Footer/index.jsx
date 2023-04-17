import styles from "./style.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Footer = ({ className, ...props }) => {
  return (
    <footer
      className={[styles.container, className, "dark:bg-gray-800"].join(" ")}
      {...props}
    >
      <h3 className={[styles.footerTitle, "dark:text-white"].join(" ")}>
        UPSPOON
      </h3>
      <ThemeSwitcher />
    </footer>
  );
};

export default Footer;
