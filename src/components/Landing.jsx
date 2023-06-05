import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import scrollDown from '@/scrollDown.json';
import { Button } from '@/components';

const Landing = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen gap-10 pt-20 text-center text-text"
    >
      <h2 className="text-7xl font-calistoga">
        We build beautiful websites
        <br />
        for great businesses like&nbsp;
        <span className="text-transparent bg-primary-gradient bg-clip-text">
          yours
        </span>
      </h2>
      <p className="w-5/12 text-lg">
        We help local business find new customers online and grow their business
        through stand-out websites & videos. Reach out today and get a free
        quote.
      </p>
      <Button className="mt-10">Get a free quote</Button>
      <div className="absolute flex items-center justify-center bottom-12">
        <div className="absolute w-8 h-12 rounded-full bg-primary-gradient" />
        <Lottie animationData={scrollDown} className="absolute w-12 h-12" />
      </div>
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
        className="w-80 h-80 absolute opacity-25 left-[-20rem] bottom-40"
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
        className="w-80 h-80 absolute opacity-25 right-[-20rem] top-40"
      >
        <Image src="/images/logo-svg.svg" alt="company logo" fill />
      </motion.div>
    </section>
  );
};

export default Landing;
