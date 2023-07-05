import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { useGlobalContext } from "../context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? <BiSolidMoon className="toggle-icon" /> : <BiSolidSun className="toggle-icon" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
