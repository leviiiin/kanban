import { useEffect, useState } from "react";
import "./ThemeToggle.scss";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-toggle">
      <img
        className="theme-toggle__img"
        src="../../theme-light-icon.png"
        alt="Light Theme"
        onClick={() => setTheme("light")}
      />
      <label htmlFor="toggle" className="theme-toggle__label">
        <input
          type="checkbox"
          id="toggle"
          className="theme-toggle__checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="toggle-button"></div>
      </label>
      <img
        className="theme-toggle__img"
        src="../../theme-dark-icon.png"
        alt="Dark Theme"
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeToggle;
