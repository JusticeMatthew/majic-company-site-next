import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollingWords = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-200, -1300]);
  const spring = useSpring(x);

  return (
    <div className="flex flex-row h-40 pointer-events-none">
      <div className="flex flex-row h-40 pointer-events-none">
        <motion.p
          style={{ x: spring }}
          transition={{
            duration: 2,
          }}
          className="flex items-center overflow-visible uppercase text-gradient font-calistoga text-9xl"
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
