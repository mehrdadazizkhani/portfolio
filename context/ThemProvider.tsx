import {
  MouseEventHandler,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface ThemeContextInterface {
  toggle: boolean;
  handleToggle: MouseEventHandler;
  color: string;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  toggle: false,
  handleToggle: () => {},
  color: "#888888",
});

const ThemProvider = ({ children }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("#888888");

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
      setToggle(true);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setColor("666666");
      localStorage.theme = "dark";
    } else {
      setColor("#888888");
      localStorage.theme = "light";
    }
    handleDarkMode();
  };

  return (
    <ThemeContext.Provider value={{ toggle, handleToggle, color }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemProvider;
