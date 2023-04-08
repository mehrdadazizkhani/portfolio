import { ReactNode } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { TbRotate2 } from "react-icons/tb";
import { SlScreenSmartphone } from "react-icons/sl";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="h-[100dvh] w-full bg-light-primary gap-2 dark:bg-dark-primary text-light-content dark:text-dark-content flex flex-col justify-center items-center portrait:hidden lg:landscape:hidden">
        <div className="relative w-32 h-12">
          <SlScreenSmartphone
            size={50}
            className="absolute bottom-0 opacity-10"
          />
          <SlScreenSmartphone
            size={50}
            className="absolute bottom-0 rotate-45 opacity-30 origin-bottom-right"
          />
          <SlScreenSmartphone
            size={50}
            className="absolute bottom-0 rotate-90 origin-bottom-right animate-pulse"
          />
        </div>
        <p className="uppercase font-semibold">please turn your phone</p>
      </div>
      <main className="bg-light-primary dark:bg-dark-primary relative landscape:hidden lg:landscape:block">
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
            <div className="md:h-[calc(100vh-96px)] h-[calc(100dvh-56px)] rounded-xl md:w-[calc(100%-72px)] w-[calc(100%-50px)] border border-light-content dark:border-dark-content"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
