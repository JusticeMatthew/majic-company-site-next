import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Examples = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <motion.section
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      ref={ref}
      id="examples"
      className="flex flex-col justify-end w-full min-h-screen sm:justify-center text-seasalt"
    >
      <h4 className="mb-16 text-6xl font-calistoga">Our latest client...</h4>
      <div className="relative flex items-center w-full max-mg:flex-col">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="h-[24rem] rounded-lg bg-black mg:inline hidden"
        >
          <source src="/videos/bc-example-new.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          playsInline
          loop
          muted
          className="h-[16rem] sm:h-[20rem] object-cover rounded-t-2xl bg-black relative mg:hidden"
        >
          <source src="/videos/bc-example-new.webm" type="video/webm" />
        </video>
        {/* <div className="h-[42rem] mg:w-[100rem] relative bg-[#18181B] rounded-t-2xl mg:rounded-l-2xl">
          <Image
            src="/images/bc-example.gif"
            alt="b & c pest control website"
            fill
            className="object-cover object-top mg:object-fill max-mg:rounded-t-2xl mg:rounded-l-2xl"
          />
        </div> */}
        <div className="relative p-8 sm:p-16 md:py-0 md:pl-24 md:pr-0">
          <p className="text-lg font-bold tracking-tighter text-gradient">
            B & C Pest Control
          </p>
          <p className="mt-8 text-2xl text-seasalt/75">
            Establishing a professional and polished website that underscores
            the brand&apos;s reputation for exceptional quality and attention to
            detail
          </p>

          {/* <div className="h-auto border-b-2 border-transparent w-fit hover:border-b-2 hover:border-text/50"> */}
          {/* <Link
              href="https://www.bandcpestcontrol.com"
              target="blank"
              className="text-xs text-[#7b8c96]"
            >
              Visit
              <Image
                src="/images/up-right-arrow.svg"
                alt="arrow icon"
                height={12}
                width={12}
                className="inline ml-2 opacity-6"
              />
            </Link> */}
          {/* </div> */}
        </div>
      </div>
      <h4 className="mx-auto mt-32 text-5xl font-calistoga">
        ...and what they have to say about us
      </h4>
      <div className="relative mx-auto">
        <span className="absolute translate-y-10 -translate-x-20 text-[8rem] leading-none font-calistoga text-gradient">
          &quot;
        </span>
        <p className="mt-16 text-sm sm:text-lg max-w-[75ch] text-center">
          Majic created the website for our company B&C Pest Control. We told
          them we wanted something simple and informative and they delivered
          better than we expected while keeping us updated along the way and
          listening to our feedback. Their team also assisted in designing a
          company logo and acquiring our domain name. We would highly recommend
          Majic for website design, especially for companies looking for someone
          with a creative eye.
        </p>
        <span className="absolute translate-x-16 -translate-y-10 right-0 text-[8rem] leading-none font-calistoga text-gradient">
          &quot;
        </span>
        <p className="mt-16 text-lg tracking-tight">
          Garry & JJ Reese
          <span className="block text-sm opacity-75">Owners</span>
        </p>
      </div>
    </motion.section>
  );
};

export default Examples;
