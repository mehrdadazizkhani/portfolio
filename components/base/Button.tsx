import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  target?: string;
  download?: boolean;
  href: string;
}

const Button = ({ children, target, download, href }: Props) => {
  return (
    <Link
      href={href}
      target={target}
      download={download}
      className="flex w-fit items-center gap-2 bg-light-content text-light-primary capitalize dark:text-dark-primary dark:bg-dark-content rounded-md py-2 px-4 whitespace-nowrap"
    >
      {children}
    </Link>
  );
};

export default Button;
