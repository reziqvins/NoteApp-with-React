import React, { useContext } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-theme" type="button" onClick={toggleTheme}>
      {theme === "dark" ? <BsFillMoonFill /> : <BsSun />}
    </button>
  );
};

export default ThemeButton;
