import React from 'react';
import Image from 'next/image';
import { ScrollLink, MobileNav } from '@/components';

const Header = ({ pos, bgInView, about, examples, services, contact }) => {
  const navItems = [
    ['about', 'About Us', about, -100],
    ['examples', 'Examples', examples, 0],
    ['services', 'Services', services, -200],
    ['contact', 'Contact', contact, 0],
  ];

  return (
    <header
      id="header"
      className={`${
        pos === 0
          ? `bg-none`
          : `${bgInView ? 'bg-seasalt shadow' : 'bg-seasalt/10 shadow'}`
      } transition-colors fixed z-50 px-4 flex items-center h-20 top-0 backdrop-blur duration-300 w-screen`}
    >
      <div className="flex items-center justify-between px-2 mx-auto sm:px-4 main-container">
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
        <nav className="hidden gap-2 md:flex last:mr-4">
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
      </div>
    </header>
  );
};

export default Header;
