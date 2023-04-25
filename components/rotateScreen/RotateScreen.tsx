import { SlScreenSmartphone } from "react-icons/sl";

const RotateScreen = () => {
  return (
    <div className="absolute h-[100dvh] w-full overflow-hidden z-50 bg-light-primary gap-2 dark:bg-dark-primary text-light-content dark:text-dark-content flex flex-col justify-center items-center portrait:hidden lg:landscape:hidden">
      <div className="relative w-32 h-12 z-10">
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
      <p className="uppercase font-semibold z-10">please turn your phone</p>
    </div>
  );
};

export default RotateScreen;
