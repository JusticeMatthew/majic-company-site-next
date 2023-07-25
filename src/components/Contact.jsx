import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm';

const Contact = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  const [switchToggled, setSwitchToggled] = useState(false);

  const toggleSwitch = () => setSwitchToggled(!switchToggled);

  const handleLeftTextClick = () => setSwitchToggled(false);
  const handleRightTextClick = () => setSwitchToggled(true);

  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-text"
    >
      <h4 className="mb-8 text-6xl font-calistoga text-seasalt">
        Ready to see what Majic can do for&nbsp;
        <span className="text-gradient">your</span>&nbsp;business?
      </h4>
      <p className="text-seasalt/75 max-w-[60ch] text-center text-lg mb-16">
        Connect with us through a message or video call and let Majic illuminate
        the path to online greatness and amaze your audience with every click.
      </p>
      <div className="flex items-center justify-center gap-8 mb-8 text-seasalt">
        <p
          onClick={handleLeftTextClick}
          className={`cursor-pointer ${
            switchToggled ? 'opacity-40' : 'opacity-100'
          }`}
        >
          Send a message
        </p>
        <motion.div
          onClick={toggleSwitch}
          className={`flex items-center ${
            switchToggled ? 'justify-end' : 'justify-start'
          } h-8 p-1 rounded-full cursor-pointer w-14 bg-seasalt`}
        >
          <motion.div
            layout
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 30,
            }}
            className="z-10 w-6 h-6 rounded-full bg-primary-gradient"
          />
        </motion.div>
        <p
          onClick={handleRightTextClick}
          className={`cursor-pointer ${
            switchToggled ? 'opacity-100' : 'opacity-40'
          }`}
        >
          Schedule video call
        </p>
      </div>
      <div className="flex flex-col w-full p-24 min-h-20 bg-seasalt rounded-2xl max-sg:items-center justify-evenly">
        <div className="mb-20">
          <h5 className="mb-8 text-5xl font-calistoga">Send us a message</h5>
          <p className="max-w-[65ch] text-lg">
            Have questions? Need more information? We would love to hear about
            your business! Reach out today and you&apos;ll hear from us within
            48 hours.
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
