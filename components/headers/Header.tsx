"use client";
import React, { Suspense } from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {  Search } from "lucide-react";
import { Separator } from "radix-ui";
import { constants } from "buffer";

const Header = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      link: "/",
      isActive: pathname === "/",
    },
    {
      label: "Shop",
      link: "/shop",
      isActive: pathname.startsWith("/shop"),
    }
  ];
  return (
    <header className="sticky bg-slate-100 dark:bg-slate-950 top-0 z-50 w-full ">
      <div className="max-w-2xl mx-auto md:py-4 md:px-8 flex items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <div className="ml-4">
        <Logo />
        </div>
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-lg ">
          {links.map((link) => (
            <Link
              key={link.link}
              className={cn(
                "font-medium px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800",
                link.isActive && "bg-gray-200 dark:bg-gray-800  rounded-full"
              )}
              href={link.link}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <Suspense fallback={<p>Loading...</p>}>
            <SearchBox />
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Header

