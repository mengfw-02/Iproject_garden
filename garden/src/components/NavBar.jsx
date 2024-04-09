// components/Navbar.jsx
import React from 'react';
import { MdModeStandby } from 'react-icons/md';

const Navbar = () => {
  const menu = [
    { name: 'Home', url: '#home' },
    { name: 'Services', url: '#services' },
    { name: 'Map', url: '#map' },
    { name: 'Tarif', url: '#price' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className="ml-0 fixed z-10">
      <ul className="list-disc flex flex-col gap-5 fixed right-0 top-0 bottom-0 justify-center sm:m-10 m-3 ">
        {menu.map((x, index) => (
          <a
            href={x.url}
            key={index}
            className="flex items-center flex-row-reverse group "
          >
            <MdModeStandby className="sm:text-4 xl text-2xl text-primary group-hover:text-accent  transition-all ease-in-out duration-700  sm:ml-5  flex-shrink-0" />
            <p
              className={`opacity-0 group-hover:opacity-100 transition duration-700  text-2xl mr-3 font-bold uppercase`}
            >
              {x.name}
            </p>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;