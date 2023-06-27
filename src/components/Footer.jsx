import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full max-w-[72rem] h-40 px-8 mx-auto md:justify-between md:flex-row text-seasalt/40">
      <p>©️2023 Majic Web Design</p>
      <div className="flex flex-col items-center md:flex-row">
        <p>
          info@majicwebdesign.com <span className="hidden md:inline">|</span>
        </p>
        <p>&nbsp;{`(386) 601-9344`}</p>
      </div>
    </footer>
  );
};

export default Footer;
