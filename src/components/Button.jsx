import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, className, disabled, ...props }) => {
  return (
    <motion.button
      layout
      disabled={disabled}
      transition={{ duration: 0.2 }}
      className="relative p-1 text-lg font-medium tracking-wide rounded-full bg-primary-gradient text-seasalt group disabled:opacity-50 disabled:pointer-events-none"
      {...props}
    >
      <motion.div
        layout
        transition={{ duration: 0.2 }}
        className="absolute w-full h-full rounded-full bg-primary-gradient -inset-[2px] group-hover:blur z-10"
      />
      <motion.span
        layout
        transition={{ duration: 0.2 }}
        className={`${className} relative z-20 block rounded-full group-hover:bg-text`}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
const SecondaryButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} rounded-full p-1 text-[#5672ce] font-semibold text-lg tracking-wide group relative`}
      {...props}
    >
      <div className="absolute w-full h-full rounded-full -inset-[0px] group-hover:blur z-10 border-[3px] border-blurple group-hover:bg-primary-gradient" />
      <span className="relative z-20 block px-12 py-3 rounded-full group-hover:bg-text group-hover:text-seasalt">
        {children}
      </span>
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
