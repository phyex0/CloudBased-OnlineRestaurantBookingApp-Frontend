import { useState } from "react";
import styles from "./style.module.css";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { Sun, Moon } from "../icons";

const ThemeButton = ({ className, ...props }) => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center gap-4">
      <Sun width="22" height="22" className="text-black dark:text-white" />
      <Switch
        checked={enabled}
        onChange={changeTheme}
        className={`${enabled ? "bg-gray-200" : "bg-gray-800"}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Moon width="22" height="22" className="text-black dark:text-white" />
    </div>
  );
};

export default ThemeButton;
