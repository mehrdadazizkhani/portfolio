import Link from "next/link";

interface Props {
  title: string;
  to: string;
}

const NavItem = ({ title, to }: Props) => {
  return (
    <div className="group w-fit h-fit uppercase font-bold text-light-content dark:text-dark-content">
      <Link href={to}>{title}</Link>
    </div>
  );
};

export default NavItem;
