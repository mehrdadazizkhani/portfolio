import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { SiLinkedin, SiGithub, SiTwitter, SiInstagram } from "react-icons/si";
import SincWave from "../sincWave/SincWave";

const Header = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between px-12 md:px-20 h-14 md:h-24">
      <div className="flex items-center gap-3 bg-light-primary dark:bg-dark-primary z-20 pr-2 pb-2 mt-2">
        <div className="flex cursor-pointer aspect-square h-10 items-center justify-center rounded-full bg-dark-primary text-2xl p-2 font-bold text-dark-content dark:bg-light-primary dark:text-light-content">
          <Link href={"/"}>M</Link>
        </div>
        <span className="text-light-content md:inline hidden dark:text-dark-content uppercase text-sm lg:text-2xl">
          Mehrdad Azizkhani
        </span>
      </div>
      <div className="relative flex items-center gap-4 z-20 md:mr-12 mr-2">
        <div className="absolute hidden w-[300px] h-[80px] top-[calc(50%-40px)] md:flex left-[calc(50%-150px)] bg-light-primary dark:bg-dark-primary text-light-content dark:text-dark-content">
          <SincWave
            color={"#3563E9"}
            thickness={0.5}
            scale={16}
            frequency={0.02}
            amplitudesMax={[120, 90, 60, 40, 200]}
            animationSpeed={0.05}
            animationAmplitude={0.2}
          />
        </div>
        <a
          className="social"
          href="https://linkedin.com/in/mehrdad-azizkhani-2a8313a5/"
          target="_blank"
        >
          <SiLinkedin size={20} />
        </a>
        <a
          className="social"
          href="https://github.com/mehrdadazizkhani"
          target="_blank"
        >
          <SiGithub size={20} />
        </a>
        <a className="social" href={""}>
          <SiTwitter size={20} />
        </a>
        <a
          className="social"
          href="https://instagram.com/mehrdadazizkhani"
          target="_blank"
        >
          <SiInstagram size={20} />
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Header;
