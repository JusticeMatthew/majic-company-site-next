import React from 'react';
import Image from 'next/image';
import { ScrollLink } from '@/components';

const Header = ({ pos }) => {
  const aboutPosition = pos > 700 && pos < 1800 ? true : false;
  const examplePosition = pos > 2150 && pos < 2900 ? true : false;

  return (
    <header
      id="header"
      className={`transition-colors fixed z-40 flex items-center justify-between w-[73rem] px-4 h-20 mt-4 shadow ${
        pos >= 2200 ? 'bg-seasalt' : 'bg-seasalt/10'
      } rounded-2xl text-text backdrop-blur`}
    >
      <ScrollLink to="home" className="flex gap-2 cursor-pointer">
        <Image
          src="/images/logo-svg.svg"
          alt="company logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-semibold leading-7">
          Majic
          <br />
          Webdesign
        </h1>
      </ScrollLink>
      <nav className="flex gap-2">
        {[
          ['about', 'About Us', aboutPosition],
          ['examples', 'Examples', examplePosition],
          ['services', 'Services', false],
          ['contact', 'Contact', false],
        ].map((item, idx) => (
          <ScrollLink
            key={idx}
            to={item[0]}
            className={`${
              item[2] ? 'bg-bottom bg-[length:100%_6px]' : ''
            } py-2 px-3 font-semibold text-lg bg-primary-gradient bg-bottom bg-[length:100%_0%] bg-no-repeat hover:bg-[length:100%_100%] transition-[background-size] rounded-xl hover:text-seasalt`}
          >
            <p>{item[1]}</p>
          </ScrollLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
