import React from 'react';
import Image from 'next/image';
import { ScrollLink, MobileNav } from '@/components';

const Header = ({ pos }) => {
  const aboutPosition = pos > 700 && pos < 1800 ? true : false;
  const examplePosition = pos > 2150 && pos < 3200 ? true : false;
  const servicesPosition = pos > 3300 && pos < 4000 ? true : false;
  const contactPosition = pos > 4100 && pos < 10000 ? true : false;

  const navItems = [
    ['about', 'About Us', aboutPosition, 0],
    ['examples', 'Examples', examplePosition, 0],
    ['services', 'Services', servicesPosition, -300],
    ['contact', 'Contact', contactPosition, 0],
  ];

  return (
    <header
      id="header"
      className={`${
        pos === 0
          ? `bg-none`
          : `${pos >= 2200 ? 'bg-seasalt shadow' : 'bg-seasalt/10 shadow'}`
      } transition-colors fixed z-40 flex items-center justify-between px-4 h-20 mg:mt-4 mg:rounded-2xl text-text backdrop-blur duration-300 w-full mg:w-[72rem] mg:mr-[17px]`}
    >
      <ScrollLink to="home" className="flex gap-2 cursor-pointer">
        <Image
          src="/images/logo-svg.svg"
          alt="company logo"
          width={50}
          height={50}
        />
        <h1 className="text-lg md:text-2xl font-calistoga">
          Majic
          <br />
          Web Design
        </h1>
      </ScrollLink>
      <MobileNav navItems={navItems} />
      <nav className="hidden gap-2 md:flex">
        {navItems.map((item, idx) => (
          <ScrollLink
            key={idx}
            to={item[0]}
            offset={item[3]}
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
