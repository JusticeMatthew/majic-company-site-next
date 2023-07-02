import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ children, to, className, onClick, offset, alt }) => {
  return (
    <Link
      href="/"
      to={to}
      offset={offset}
      smooth={true}
      duration={500}
      className={className}
      onClick={onClick}
      alt={alt}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
