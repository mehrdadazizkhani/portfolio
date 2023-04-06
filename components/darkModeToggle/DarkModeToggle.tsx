import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    handleDarkMode();
  }, []);

  const handleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.className = "dark";
      setToggle(false);
    } else {
      document.documentElement.className = "";
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    handleDarkMode();
  };

  return (
    <div
      className="cursor-pointer rounded-full border border-light-content p-2 text-2xl text-light-content dark:border-dark-content dark:text-dark-content"
      onClick={handleToggle}
    >
      {" "}
      {toggle ? <MdDarkMode /> : <MdLightMode />}
    </div>
  );
};

export default DarkModeToggle;
