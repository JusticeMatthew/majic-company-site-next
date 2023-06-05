import React from 'react';
import Image from 'next/image';
// import { motion, LayoutGroup } from 'framer-motion';
import { ScrollLink } from '@/components';

const Header = () => {
  return (
    <header className="h-20 z-10 fixed center-column backdrop-blur-md rounded-2xl mt-4 flex justify-between px-4 items-center text-text">
      <ScrollLink to="home" className="cursor-pointer flex gap-2">
        <Image
          src="/images/logo-svg.svg"
          alt="company logo"
          width={50}
          height={50}
        />
        <h1 className="font-semibold text-2xl leading-7">
          Majic
          <br />
          Webdesign
        </h1>
      </ScrollLink>
      <nav className="flex gap-2">
        {[
          ['about', 'About Us', 0],
          ['examples', 'Examples', 0],
          ['services', 'Services', 0],
          ['contact', 'Contact', 0],
        ].map((item, idx) => (
          <ScrollLink
            key={idx}
            to={item[0]}
            offset={item[2]}
            active="bg-primary-gradient bg-bottom bg-[length:100%_6px] bg-no-repeat hover:bg-[length:100%_100%] transition-[background-size] rounded-xl"
            className="py-2 px-3 font-semibold text-lg bg-primary-gradient bg-bottom bg-[length:100%_0%] bg-no-repeat hover:bg-[length:100%_100%] transition-[background-size] rounded-xl"
          >
            <p>{item[1]}</p>
          </ScrollLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
