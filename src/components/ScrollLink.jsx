import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ children, to, active, className, offset, onClick }) => {
  return (
    <Link
      href="/"
      to={to}
      activeClass={active}
      spy={true}
      offset={offset}
      smooth={true}
      duration={500}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
