import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-[70vh] w-full text-text relative"
    >
      <div className="w-full bg-seasalt h-[50rem] sg:h-[34rem] rounded-2xl p-24 sg:flex-row flex-col flex max-sg:items-center justify-between">
        <div className="w-60">
          <h6 className="mb-8 text-5xl font-calistoga">
            Request a<br />
            <span className="text-gradient">free quote</span>
          </h6>
          <p>
            Get started and request a free quote for your website, video or
            managing your social media platform!
          </p>
        </div>
        <ContactForm />
      </div>
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
        className="w-80 h-80 absolute opacity-20 -left-[25rem] bottom-60 pointer-events-none"
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
        className="w-80 h-80 absolute opacity-20 -right-[25rem] bottom-0 pointer-events-none"
      >
        <Image src="/images/logo-svg.svg" alt="company logo" fill />
      </motion.div>
    </section>
  );
};

export default Contact;
