import styles from "./style.module.css";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <span>Light</span> : <span>Dark</span>}
    </button>
  );
};

export default ThemeButton;
