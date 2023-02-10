import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ReactComponent as ArrowRight } from "../../icons/ArrowRight.svg";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        as={RouterLink}
        to="/"
        className="text-center font-semibold text-base
        no-underline
        "
      >
        UPSPOON
      </Link>

      <Link
        as={RouterLink}
        to="/restaurant"
        className="text-center font-semibold text-base
        no-underline
        "
      >
        Restaurant
      </Link>
    </header>
  );
};

export default Header;
