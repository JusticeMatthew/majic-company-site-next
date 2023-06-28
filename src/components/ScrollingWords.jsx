import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollingWords = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-600, -1800]);
  const spring = useSpring(x);

  return (
    <div className="flex flex-row h-1 pointer-events-none sm:h-20 sm:max-mg:h-40">
      <div className="flex flex-row h-40 pointer-events-none">
        <motion.p
          style={{ x: spring }}
          transition={{
            duration: 2,
          }}
          className="flex items-center overflow-visible uppercase text-7xl text-gradient font-calistoga sm:text-9xl"
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
    </div>
  );
};

export default ScrollingWords;
