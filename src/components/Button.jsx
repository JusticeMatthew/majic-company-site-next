import React from 'react';

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <button
      className="relative p-1 text-lg font-medium tracking-wide rounded-full bg-primary-gradient text-seasalt group"
      {...props}
    >
      <div className="absolute w-full h-full rounded-full bg-primary-gradient -inset-[2px] group-hover:blur z-10" />
      <span
        className={`${className} relative z-20 block rounded-full group-hover:bg-text`}
      >
        {children}
      </span>
    </button>
  );
};
const SecondaryButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} bg-primary-gradient rounded-full p-1 text-[#2155fc] font-medium text-lg tracking-wide group relative`}
      {...props}
    >
      <div className="absolute w-full h-full rounded-full bg-seasalt -inset-[0px] group-hover:blur z-10 border-[3px] border-blurple group-hover:bg-primary-gradient" />
      <span className="relative z-20 block px-12 py-3 rounded-full group-hover:bg-text group-hover:text-seasalt">
        {children}
      </span>
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
