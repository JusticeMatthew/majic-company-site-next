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
      className="flex flex-col items-center justify-center h-screen pt-20 text-center text-text gap-10 relative"
    >
      <h2 className="text-7xl font-calistoga">
        We build beautiful websites
        <br />
        for great businesses like&nbsp;
        <span className="bg-primary-gradient bg-clip-text text-transparent">
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
        <div className="w-8 h-12 bg-primary-gradient absolute rounded-full" />
        <Lottie animationData={scrollDown} className="w-12 h-12 absolute" />
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
