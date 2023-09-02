import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MiniLogoSparkles = ({ className }) => {
  return (
    <div
      className={`${className} absolute flex items-center justify-between h-14 w-14`}
    >
      <motion.div
        animate={{
          scale: 0.9,
          transition: {
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 0.9,
            repeat: Infinity,
          },
        }}
        className="relative w-10 h-10"
      >
        <Image
          src="/images/large-logo-star.svg"
          alt="star"
          fill
          className="drop-shadow"
        />
      </motion.div>
      <motion.div
        animate={{
          scale: 0.9,
          transition: {
            delay: 0.2,
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 1,
            repeat: Infinity,
          },
        }}
        className="absolute right-[4px] w-5 h-5 top-[2px]"
      >
        <Image
          src="/images/small-logo-star-top.svg"
          alt="star"
          fill
          className="drop-shadow"
        />
      </motion.div>
      <motion.div
        animate={{
          scale: 0.9,
          transition: {
            delay: 0.5,
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 1,
            repeat: Infinity,
          },
        }}
        className="absolute bottom-[2px] right-[9px] w-4 h-4"
      >
        <Image
          src="/images/small-logo-star-bottom.svg"
          alt="star"
          fill
          className="drop-shadow"
        />
      </motion.div>
    </div>
  );
};

export default MiniLogoSparkles;
