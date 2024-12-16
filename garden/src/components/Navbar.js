// navbar.js
//@client
import Link from 'next/link';
import React, { useState } from "react";
import Logo from "./Logo"; // refer to Logo.js
import PfpDropdown from "./Profile-dropdown"; // profile drop down
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/home",
      title: "My Garden"
    },
  ];

  return (
    <div className="flex items-center w-full h-20 px-4 text-black bg-white fixed nav">
      {/* includes logo */}
      <div className="flex-shrink-0">
        <h1 className="text-5xl font-signature ml-2">
          <Link
            href="/"
            className="link-underline link-underline-black"
          >
            <Logo/>
          </Link>
        </h1>
      </div> 

      {/* Links for Home */}
      <div className="hidden md:flex space-x-6 ml-auto">
        {links.map(({ id, link, title }) => (
          <Link key={id} href={link} className="text-gray-500 hover:text-black font-medium">
            {title}
          </Link>
        ))}

        {/* Profile dropdown */}
        <PfpDropdown />        
      </div>
    </div>
  );
};

export default Navbar;