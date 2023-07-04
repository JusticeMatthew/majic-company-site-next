import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingWords = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-600, -1800]);

  return (
    <div
      id="scrolling-words"
      className="flex flex-row my-4 pointer-events-none"
    >
      <motion.p
        style={{ x: x }}
        transition={{
          duration: 2,
        }}
        className="flex items-center my-8 overflow-visible uppercase text-7xl text-gradient font-calistoga sm:text-9xl mg:my-0"
      >
        {['pocus', 'lumos', 'abracadabra', 'presto', 'alakazam', 'hocus'].map(
          (item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="relative inline w-8 h-8">
                <Image src="/images/logo-svg.svg" alt="company logo" fill />
              </span>
            </React.Fragment>
          ),
        )}
      </motion.p>
    </div>
  );
};

export default ScrollingWords;
