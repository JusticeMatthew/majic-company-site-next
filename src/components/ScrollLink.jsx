import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ children, to, className, onClick, offset }) => {
  return (
    <Link
      href="/"
      to={to}
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
