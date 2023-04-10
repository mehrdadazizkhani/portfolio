import SincWave from "../sincWave/SincWave";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center z-10">
      <div className="container mx-auto">
        <div className="w-7 h-96 ml-3 md:ml-6 flex justify-center items-center">
          <div className="relative flex gap-4 -rotate-90 h-fit">
            <div className="absolute left-[calc(50%-200px)] top-[calc(50%-56px)] -z-10 w-[400px] h-[110px] bg-light-primary dark:bg-dark-primary">
              <SincWave
                color={"#3563E9"}
                thickness={0.5}
                scale={21}
                frequency={0.02}
                amplitudesMax={[150, 90, 50, 40, 300]}
                animationSpeed={0.05}
                animationAmplitude={0.2}
              />
            </div>
            <NavItem title="home" to="/" />
            <NavItem title="about" to="/about" />
            <NavItem title="projects" to="/projects" />
            <NavItem title="certificates" to="/certificates" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
