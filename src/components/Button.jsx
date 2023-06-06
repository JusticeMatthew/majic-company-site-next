import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} bg-primary-gradient rounded-full p-1 text-seasalt font-medium text-lg tracking-wide group relative`}
      {...props}
    >
      <div className="absolute w-full h-full rounded-full bg-primary-gradient -inset-[2px] group-hover:blur z-10" />
      <span className="relative z-20 block px-8 py-3 rounded-full group-hover:bg-text">
        {children}
      </span>
    </button>
  );
};

export default Button;
