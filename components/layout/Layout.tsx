import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="bg-light-primary dark:bg-dark-primary">
      <Navbar />
      <div className="h-[calc(100%-0px)] bg-dark-accent">{children}</div>
    </main>
  );
};

export default Layout;
