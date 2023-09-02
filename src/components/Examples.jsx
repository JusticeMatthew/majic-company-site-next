import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Examples = ({ setInView, bgDark }) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      ref={ref}
      id="examples"
      className={`flex-col justify-center w-full min-h-[60vh] text-seasalt ${
        bgDark ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-200`}
    >
      <h4 className="mb-16 text-6xl font-calistoga">Our latest client</h4>
      <p className="mb-8 font-medium tracking-wider max-sm:text-sm">
        B&C Pest Control
      </p>
      <div className="relative flex items-start w-full mg:items-center max-mg:flex-col">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="max-h-[30rem] mg:max-h-[25.4rem] rounded-2xl bg-transparent inline shadow mb-8 sm:mb-16"
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
          <p className="mt-16 text-sm opacity-75 sm:text-lg max-w-[75ch]">
            Majic created the website for our company B&C Pest Control. We told
            them we wanted something simple and informative and they delivered
            better than we expected. We would highly recommend Majic for website
            design, especially for companies looking for someone with a creative
            eye and affordable pricing.
          </p>
          <div className="flex items-end justify-between w-full mt-8 mb-16">
            <p className="text-lg">
              Garry & JJ Reese
              <span className="block text-sm opacity-75">Owners</span>
            </p>
            <Link
              href="https://www.bandcpestcontrol.com/"
              target="_blank"
              className="inline-flex h-10 text-xs font-light tracking-wider opacity-75 hover:border-b-2"
            >
              Visit
              <Image
                src="/images/right-arrow-icon.svg"
                alt="arrow"
                height={10}
                width={10}
                className="mb-6 ml-2"
              />
            </Link>
          </div>
        </div>
        {/* <div className="h-auto border-b-2 border-transparent w-fit hover:border-b-2 hover:border-text/50"> */}

        {/* </div> */}
      </div>
    </section>
  );
};

export default Examples;
