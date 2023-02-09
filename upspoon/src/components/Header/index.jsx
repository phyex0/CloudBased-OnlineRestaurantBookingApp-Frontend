import ThemeSwitcher from "../ThemeSwitcher";
import { ReactComponent as ArrowRight } from "../../icons/ArrowRight.svg";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ArrowRight />
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
