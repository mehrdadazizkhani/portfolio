import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [toggle, setToggle] = useState(true);
  const sunRays = [1, 2, 3, 4, 5, 6];

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
      className="p-2 cursor-pointer rounded-full border border-light-content dark:border-dark-content"
      onClick={handleToggle}
    >
      <div className="relative rounded-full text-2xl text-light-content dark:text-dark-content">
        <div
          className={`relative aspect-square w-3 bg-dark-primary rounded-full z-10 ${
            !toggle && "invisible"
          }`}
        >
          <div
            className={`absolute w-full h-full transition-all duration-300 dark:bg-dark-primary bg-light-primary rounded-full ${
              !toggle ? "top-0 left-0" : "-top-1/4 -left-1/4"
            }`}
          ></div>
        </div>
        <div
          className={`absolute top-0 left-0 w-3 aspect-square bg-light-primary rounded-full ${
            toggle && "invisible"
          }`}
        >
          <div className="absolute w-full h-full top-0 left-0 animate-spin-slow">
            <div
              className={`absolute w-[180%] h-[20%] left-[calc(50%-90%)] top-[calc(50%-10%)] justify-between flex`}
            >
              <div className={`sun ${toggle ? "ml-2" : "ml-0"}`}></div>
              <div className={`sun ${toggle ? "mr-2" : "mr-0"}`}></div>
            </div>
            <div
              className={`absolute w-[180%] h-[20%] left-[calc(50%-90%)] top-[calc(50%-10%)] justify-between flex rotate-[60deg]`}
            >
              <div className={`sun ${toggle ? "ml-2" : "ml-0"}`}></div>
              <div className={`sun ${toggle ? "mr-2" : "mr-0"}`}></div>
            </div>
            <div
              className={`absolute w-[180%] h-[20%] left-[calc(50%-90%)] top-[calc(50%-10%)] justify-between flex rotate-[120deg]`}
            >
              <div className={`sun ${toggle ? "ml-2" : "ml-0"}`}></div>
              <div className={`sun ${toggle ? "mr-2" : "mr-0"}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
