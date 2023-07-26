import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm';

const Contact = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  const [switchToggled, setSwitchToggled] = useState(false);
  const [morphing, setMorphing] = useState(false);

  const toggleSwitch = () => {
    setMorphing(true);
    setSwitchToggled(!switchToggled);
    setTimeout(() => setMorphing(false), 540);
  };

  const handleLeftTextClick = () => {
    if (switchToggled === true) {
      setMorphing(true);
    }
    setSwitchToggled(false);
    setTimeout(() => setMorphing(false), 540);
  };

  const handleRightTextClick = () => {
    if (switchToggled === false) {
      setMorphing(true);
    }
    setSwitchToggled(true);
    setTimeout(() => setMorphing(false), 540);
  };

  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-text"
    >
      <h4 className="mt-24 mb-8 text-6xl font-calistoga text-seasalt">
        Ready to see what Majic can do for&nbsp;
        <span className="text-gradient">your</span>&nbsp;business?
      </h4>
      <p className="text-seasalt/75 max-w-[60ch] text-center text-lg mb-32">
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
      <motion.div
        layout
        className="flex flex-col w-full p-24 overflow-x-hidden min-h-20 bg-seasalt rounded-2xl max-sg:items-center justify-evenly"
      >
        {morphing && (
          <svg id="filters" className="hidden">
            <defs>
              <filter id="threshold">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 400 255 -140"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div id="contactSectionMorphedText" className="relative mb-16">
          <div className="absolute">
            <motion.h4
              className={`${
                switchToggled ? 'blur-0' : 'blur-lg opacity-0'
              } mb-8 text-5xl font-calistoga transition-all duration-700`}
            >
              Schedule a video call
            </motion.h4>
            <motion.p
              className={`${
                switchToggled ? 'blur-0' : 'blur-sm opacity-0'
              } max-w-[65ch] text-lg transition-all duration-700`}
            >
              Set up a video conference to show us your vision and we’ll
              customize our web design solutions to fit your needs perfectly.
            </motion.p>
          </div>
          <div>
            <motion.h4
              className={`${
                !switchToggled ? 'blur-0' : 'blur-lg opacity-0'
              } mb-8 text-5xl font-calistoga transition-all duration-700`}
            >
              Send us a message
            </motion.h4>
            <motion.p
              className={`${
                !switchToggled ? 'blur-0' : 'blur-sm opacity-0'
              } max-w-[65ch] text-lg transition-all duration-700`}
            >
              Have questions? Need more information? We would love to hear about
              your business! Reach out today and we’ll respond within 48 hours.
            </motion.p>
          </div>
        </div>
        <div
          className={`${
            switchToggled ? 'hidden' : 'inline'
          } animate-in animate-out slide-in-from-right slide-out-to-right duration-200`}
        >
          <ContactForm />
        </div>
        <div
          className={`${
            switchToggled ? 'inline' : 'hidden'
          } animate-in animate-out slide-in-from-left slide-out-to-left duration-200`}
        >
          <InlineWidget
            url="https://calendly.com/majicwebdesign/meeting"
            styles={{ height: '500px', overflow: 'hidden' }}
          />
        </div>
      </motion.div>
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
