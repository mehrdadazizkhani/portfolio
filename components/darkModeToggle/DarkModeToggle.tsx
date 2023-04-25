import { ThemeContext } from "@/context/ThemProvider";
import { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, handleToggle } = useContext(ThemeContext);

  return (
    <div
      className="p-2 z-30 cursor-pointer rounded-full border border-light-content dark:border-dark-content bg-light-primary dark:bg-dark-primary"
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
