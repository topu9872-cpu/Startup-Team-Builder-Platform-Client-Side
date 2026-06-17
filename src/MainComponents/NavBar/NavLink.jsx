"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive && "text-white bg-purple-500"} rounded-full px-3 py-1 font-bold duration-500`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
