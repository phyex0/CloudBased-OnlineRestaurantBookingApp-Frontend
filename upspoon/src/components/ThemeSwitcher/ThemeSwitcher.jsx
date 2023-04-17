import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";
import styles from "./style.module.css";

const ThemeSwitcher = ({ className, ...props }) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      className={[styles.switcher, className].join(" ")}
      checked={darkSide}
      onChange={toggleDarkMode}
      size={30}
      {...props}
    />
  );
};

export default ThemeSwitcher;
