import { ReactNode } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="bg-light-primary dark:bg-dark-primary relative">
      <Header />
      <Navbar />
      <section className="md:h-[calc(100vh-192px)] h-[calc(100dvh-112px)] px-4 flex items-center justify-center container mx-auto">
        <div className="w-[calc(100%-72px)] h-full overflow-hidden z-10">
          {children}
        </div>
      </section>
      <Footer />
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <div className="mx-auto container flex justify-center items-center">
          <div className="md:h-[calc(100vh-96px)] h-[calc(100vh-56px)] rounded-xl md:w-[calc(100%-72px)] w-[calc(100%-50px)] border border-light-content dark:border-dark-content"></div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
