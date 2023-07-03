import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import scrollDown from '@/scrollDown.json';
import { Button, ScrollLink } from '@/components';

const Landing = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-text max-sm:h-[45rem]"
    >
      <h2 className="mt-32 mb-8 text-4xl sm:text-6xl md:text-7xl font-calistoga">
        We build beautiful website for great businesses like&nbsp;
        <span className="text-gradient">yours</span>
      </h2>
      <p className="mb-16 md:text-lg max-w-[65ch]">
        We help local businesses find new customers online and grow their
        digital presence through stand-out websites & videos. Reach out today
        and get a free quote.
      </p>
      <ScrollLink to="contact" className="mb-32">
        <Button>Get a free quote</Button>
      </ScrollLink>
      <ScrollLink
        alt="scroll down indicator"
        to="about"
        className="flex items-center justify-center w-8 h-10 rounded-full bg-primary-gradient"
      >
        <Lottie animationData={scrollDown} className="w-8 h-12" />
      </ScrollLink>
      {/*BG items*/}
      <motion.div
        animate={{
          y: [0, -20, 10, -15, 15, -20, 20],
          transition: {
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 22,
            repeat: Infinity,
          },
        }}
        className="w-80 h-80 absolute opacity-25 left-[-20rem] bottom-40 pointer-events-none"
      >
        <Image src="/images/logo-svg.svg" alt="company logo" fill />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, -10, 15, -15, 20, -20],
          transition: {
            ease: 'easeInOut',
            repeatType: 'reverse',
            duration: 18,
            repeat: Infinity,
          },
        }}
        className="w-80 h-80 absolute opacity-25 right-[-20rem] top-40 pointer-events-none"
      >
        <Image src="/images/logo-svg.svg" alt="company logo" fill />
      </motion.div>
    </section>
  );
};

export default Landing;
