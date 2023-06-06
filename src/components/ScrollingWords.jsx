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
          className="flex items-center overflow-visible text-transparent uppercase font-calistoga bg-primary-gradient text-9xl bg-clip-text"
        >
          {['pocus', 'lumos', 'abracadabra', 'presto', 'alakazam', 'hocus'].map(
            (item, idx) => (
              <>
                <span key={idx}>{item}</span>
                <span className="relative inline w-8 h-8">
                  <Image src="/images/logo-svg.svg" alt="company logo" fill />
                </span>
              </>
            ),
          )}
        </motion.p>
      </div>
    </div>
  );
};

export default ScrollingWords;
