import Link from "next/link";

interface Props {
  title: string;
  to: string;
}

const NavItem = ({ title, to }: Props) => {
  return (
    <div className="group w-fit uppercase text-light-content dark:text-dark-content">
      <Link href={to}>{title}</Link>
      <div className="h-[1px] w-0 bg-light-content dark:bg-dark-content transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

export default NavItem;
