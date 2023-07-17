import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Examples = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <motion.section
      initial={{ x: 800, opacity: '0%' }}
      whileInView={{ x: 0, opacity: '100%' }}
      transition={{ duration: 1.3 }}
      ref={ref}
      id="examples"
      className="flex flex-col justify-center w-full min-h-[70vh] text-seasalt"
    >
      <h4 className="mb-16 text-6xl font-calistoga">Our latest client</h4>
      <p className="mb-8 font-medium tracking-wider opacity-80">
        B&C Pest Control
      </p>
      <div className="relative flex items-center w-full max-mg:flex-col">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="max-h-[25.4rem] rounded-2xl bg-transparent mg:inline hidden shadow"
        >
          <source src="/videos/bc-example-new.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          playsInline
          loop
          muted
          className="h-[16rem] sm:h-[20rem] object-cover rounded-t-2xl bg-black mg:hidden"
        >
          <source src="/videos/bc-example-new.webm" type="video/webm" />
        </video>
        <div className="relative mg:ml-24">
          <h4 className="text-4xl font-calistoga max-w-[25ch]">
            A <span className="text-gradient">striking</span> new website for
            Florida&apos;s finest pest control service
          </h4>
          <span className="absolute translate-y-10 -translate-x-10 text-[8rem] leading-none font-calistoga text-gradient opacity-20">
            &quot;
          </span>
          <p className="mt-16 text-sm opacity-75 sm:text-lg">
            Majic created the website for our company B&C Pest Control. We told
            them we wanted something simple and informative and they delivered
            better than we expected. We would highly recommend Majic for website
            design, especially for companies looking for someone with a creative
            eye.
          </p>
          <p className="mt-8 mb-16 text-lg">
            Garry & JJ Reese
            <span className="block text-sm opacity-75">Owners</span>
          </p>
          <Link
            href="https://www.bandcpestcontrol.com/"
            target="_blank"
            className="inline-flex text-xs font-light tracking-wider opacity-75 hover:border-b-2"
          >
            Visit
            <Image
              src="/images/right-arrow-icon.svg"
              alt="arrow"
              height={10}
              width={10}
              className="ml-2"
            />
          </Link>
        </div>
        {/* <div className="h-auto border-b-2 border-transparent w-fit hover:border-b-2 hover:border-text/50"> */}

        {/* </div> */}
      </div>
    </motion.section>
  );
};

export default Examples;
