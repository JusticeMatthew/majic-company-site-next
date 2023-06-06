import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ children, to, className, onClick }) => {
  return (
    <Link
      href="/"
      to={to}
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
