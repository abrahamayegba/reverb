import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import ReverbLogo from "./icons/reverb";

const Header = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between py-[35px] lg:w-[85%] w-[90%] max-w-[1296px] mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className="flex items-center gap-x-3 w-[200px] absolute -top-[46px]">
                <ReverbLogo />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ml-20">
            <Link href="/about">
              <button className=" hover:text-gray-800 opacity-80 font-medium flex flex-row items-center gap-x-[6px] leading-6 cursor-pointer">
                Demos
              </button>
            </Link>
            <Link href="/about">
              <button className="hover:text-gray-800 opacity-80 font-medium flex flex-row items-center gap-x-[6px] leading-6  cursor-pointer">
                About
              </button>
            </Link>
            <Link href="/pricing">
              <button className="hover:text-gray-800 opacity-80 font-medium flex flex-row items-center gap-x-[6px] leading-6  cursor-pointer">
                Pricing
              </button>
            </Link>
            <Link href="/contact">
              <button className="hover:text-gray-800 opacity-80 font-medium flex flex-row items-center gap-x-[6px] leading-6 cursor-pointer">
                Contact
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex gap-x-10 items-center">
            <Link
              href="https://beta.verzo.app/"
              className="hover:text-gray-800 font-medium flex flex-row items-center gap-x-[6px] leading-6  cursor-pointer"
            >
              Log in
            </Link>
            <Link
              href="https://beta.verzo.app/"
              className="rounded-[4px] md:px-7 px-5 py-2.5 text-base text-white bg-primary-blue font-medium "
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
