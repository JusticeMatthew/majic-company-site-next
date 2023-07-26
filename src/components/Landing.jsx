import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MagicParticles, ScrollLink } from '@/components';
import { PrimaryButton, SecondaryButton } from '@/components/Button';

const Landing = () => {
  const [particlesVisible, setParticlesVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setParticlesVisible(false), 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-text max-sm:h-[45rem]"
    >
      <AnimatePresence>
        {particlesVisible && (
          <motion.div
            key="particles"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="z-50 max-w-[75rem] w-full h-[40rem] absolute rounded-full overflow-hidden"
          >
            <MagicParticles />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center justify-center"
      >
        <h2 className="mt-32 mb-8 text-4xl sm:text-6xl md:text-8xl font-calistoga">
          We build beautiful websites for great businesses like&nbsp;
          <span className="text-gradient">yours</span>
        </h2>
        <p className="mb-16 md:text-xl max-w-[65ch]">
          We help local businesses find new customers online and grow their
          digital presence through stand-out websites & videos. With our
          affordable plans and enchanting design we&apos;ll create a captivating
          experience for your audience.
        </p>
        <div className="flex flex-col gap-6 mb-16">
          <ScrollLink to="contact">
            <PrimaryButton className="px-12 py-3">
              Connect with us today
            </PrimaryButton>
          </ScrollLink>
          <ScrollLink to="about" offset={-100}>
            <SecondaryButton className="">More about Majic</SecondaryButton>
          </ScrollLink>
        </div>
      </motion.div>
      {/*BG items*/}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
          opacity: 0.25,
          y: [0, -20, 10, -15, 15, -20, 20],
          transition: {
            y: {
              ease: 'easeInOut',
              repeatType: 'reverse',
              duration: 22,
              repeat: Infinity,
            },
            opacity: { duration: 1 },
          },
        }}
        className="w-80 h-80 absolute left-[-20rem] bottom-40 pointer-events-none"
      >
        <Image src="/images/logo-svg.svg" alt="company logo" fill />
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
          opacity: 0.25,
          y: [0, -20, 10, -15, 15, -20, 20],
          transition: {
            y: {
              ease: 'easeInOut',
              repeatType: 'reverse',
              duration: 22,
              repeat: Infinity,
            },
            opacity: { duration: 1 },
          },
        }}
        className="w-80 h-80 absolute right-[-20rem] top-40 pointer-events-none"
      >
        <Image src="/images/logo-svg.svg" alt="company logo" fill />
      </motion.div>
    </section>
  );
};

export default Landing;
