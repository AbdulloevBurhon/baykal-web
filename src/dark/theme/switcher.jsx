import { useState } from "react";
import DarkMode from "../Hook/darkMode.jsx";
/////  импортируй это переключатель в любой файл и пользуй
function Switcher() {
  const [theme, setTheme] = DarkMode();
  const [dark, setDark] = useState(theme === "dark" ? true : false);
  const toggleDark = () => {
    setTheme(dark ? "dark" : "light");
    setDark(!dark);
  };
  return (
    <>
      <button onClick={toggleDark}>{dark ? "🎇" : "🎆"}</button>
    </>
  );
}

export default Switcher;
