import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const { toggleTheme } = useContext(ThemeContext);

  const style = isLightTheme ? light : dark;

  return (
    <div className="toggle-theme" onClick={toggleTheme}>
      <button style={style}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
