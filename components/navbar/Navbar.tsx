import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import NavItem from "./NavItem";
import { SiLinkedin, SiGithub, SiTwitter, SiInstagram } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex gap-4">
        <NavItem title="home" to="/" />
        <NavItem title="about" to="" />
        <NavItem title="projects" to="" />
      </div>
      <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-dark-primary text-3xl font-bold text-dark-content dark:bg-light-primary dark:text-light-content">
        MA
      </div>
      <div className="flex items-center gap-4">
        <a
          className="social"
          href="https://linkedin.com/in/mehrdad-azizkhani-2a8313a5/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
        <a
          className="social"
          href="https://github.com/mehrdadazizkhani"
          target="_blank"
        >
          <SiGithub />
        </a>
        <a className="social" href={""}>
          <SiTwitter />
        </a>
        <a
          className="social"
          href="https://instagram.com/mehrdadazizkhani"
          target="_blank"
        >
          <SiInstagram />
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
