import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} bg-primary-gradient rounded-full px-8 py-4 text-seasalt font-medium text-lg tracking-wide`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
