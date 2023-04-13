import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  target?: string;
  download?: boolean;
  href: string;
  locale?: false | string;
}

const Button = ({ children, target, download, href, locale }: Props) => {
  return (
    <Link
      href={href}
      target={target}
      locale={locale}
      download={download}
      className="flex text-xs md:text-base transition duration-300 font-semibold w-fit items-center gap-2 bg-light-content text-light-primary capitalize dark:text-dark-primary dark:bg-dark-content rounded-md py-2 px-4 whitespace-nowrap hover:bg-light-accent dark:hover:bg-dark-accent cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Button;
