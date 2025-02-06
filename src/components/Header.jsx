'use client';
import { useSession } from "next-auth/react"; // Import useSession
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/contants/appdata";
import { usePathname } from "next/navigation";
import UserButton from "./user-button";

const Header = () => {
  const { data: session } = useSession(); // Get session data
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  const router = useRouter(); // Initialize router

  const handleLinkClick = (link) => {
    // Check if the user is logged in
    if (!session) {
      // If not logged in, redirect to login page
      router.push("/sign-in");
    } else {
      // If logged in, navigate to the link
      router.push(link);
    }
  };

  return (
    <div className="bg-white shadow-lg h-16 flex justify-between items-center md:px-[5%]">
      <Link
        href="/"
        className="text-third-color font-bold text-2xl pl-5 md:pl-0"
      >
        Car Wala
      </Link>
      <div
        className="md:hidden border[] pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 mb-1 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 mt-1 bg-black"></div>
      </div>
      <div
        className={` ${isMenu ? "flex flex-col absolute z-10 top-16 w-full" : "h-[100%] items-center hidden md:flex"
          } gap-5 md:flex-row  md:static bg-white md:w-auto text-center`}
      >
        {links?.map((link) => (
          <div key={link.link}>
            <span
              className={`${pathname === link.link ? "text-third-color" : "text-gray-400"
                } cursor-pointer`}
              onClick={() => handleLinkClick(link.link)} // Use the click handler
            >
              {link.text}
            </span>
          </div>
        ))}
        <div><UserButton /></div>
      </div>
    </div>
  );
};

export default Header;
// ---------------------------------------------------------------
