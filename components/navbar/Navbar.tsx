import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center z-10">
      <div className="container mx-auto">
        <div className=" w-7 h-80 ml-3 md:ml-6 flex justify-center items-center bg-light-primary dark:bg-dark-primary">
          <div className="flex gap-4 -rotate-90 h-fit">
            <NavItem title="home" to="/" />
            <NavItem title="about" to="" />
            <NavItem title="skills" to="" />
            <NavItem title="projects" to="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
