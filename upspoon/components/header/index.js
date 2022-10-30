import styles from "./style.module.css";
import { User } from "../icons";

const Header = ({ className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <p>Header</p>
      <User width="28" height="28" />
    </div>
  );
};

export default Header;
