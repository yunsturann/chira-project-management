"use client";

// ** React Imports
import { useState } from "react";

// ** Next.js Imports
import Link from "next/link";
import dynamic from "next/dynamic";

// ** Third Party Components
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// ** Icons
import { IoMdMenu } from "react-icons/io";

// ** Custom Components
const HamburgerMenu = dynamic(() => import("./HamburgerMenu"), { ssr: false });
import Logo from "../logo";
import ThemeSwitcher from "../sidebar/ThemeSwitcher";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex lg:hidden justify-between items-center p-5 shadow-md shadow-purple-200/50">
      {/* Logo */}
      <Logo size="medium" />

      {/* Profile And Menu Icon */}
      <SignedIn>
        <div className="flex items-center gap-x-4">
          <UserButton afterSignOutUrl="/" />

          <div
            className="text-3xl cursor-pointer hover:opacity-50 transition duration-300"
            onClick={() => setIsOpen(true)}
          >
            <IoMdMenu />
          </div>
        </div>
        <HamburgerMenu isOpen={isOpen} onClose={onClose} />
      </SignedIn>
      <SignedOut>
        <ThemeSwitcher hasText={false} />
        <div className="flex items-center gap-x-2 sm:gap-x-6">
          <Link
            href="/contact"
            className="sm:text-lg tracking-tight text-center text-white font-semibold px-4 py-1.5 rounded-lg bg-gray-700 dark:bg-gray-700 hover:opacity-80 transition duration-300"
          >
            Feedback
          </Link>
          <Link
            href="/sign-in"
            className="sm:text-lg tracking-tight text-center text-white font-semibold px-4 py-1.5 rounded-lg bg-blue-500 dark:bg-blue-900 hover:opacity-70 transition duration-300"
          >
            Login
          </Link>
        </div>
      </SignedOut>
    </header>
  );
};

export default MobileNav;
