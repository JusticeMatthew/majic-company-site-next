import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Examples = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      ref={ref}
      id="examples"
      className="flex flex-col items-center justify-end sm:justify-center min-h-[75vh] w-full text-text"
    >
      <div className="w-full h-[57rem] sm:h-[60rem] mg:h-[42rem] bg-seasalt rounded-2xl relative flex max-mg:flex-col">
        <div className="h-[42rem] mg:w-[100rem] relative bg-[#18181B] rounded-t-2xl mg:rounded-l-2xl">
          <Image
            src="/images/bcmockup.webp"
            alt="b & c pest control website"
            fill
            className="object-cover object-top mg:object-fill max-mg:rounded-t-2xl mg:rounded-l-2xl"
          />
        </div>
        <div className="relative p-8 sm:p-16 md:p-24">
          <p className="font-semibold tracking-tighter">B & C Pest Control</p>
          <h4 className="mt-8 text-4xl md:text-5xl font-calistoga md:max-mg:whitespace-nowrap">
            A <span className="text-gradient">fresh look</span> for a local pro
          </h4>
          <span className="absolute translate-y-10 text-[8rem] leading-none font-calistoga text-gradient opacity-20">
            &quot;
          </span>
          <p className="mt-16 text-sm sm:text-base">
            Majic created the website for our company B&C Pest Control. We told
            them we wanted something simple and informative and they delivered
            better than we expected while keeping us updated along the way and
            listening to our feedback. Their team also assisted in designing a
            company logo, acquiring our domain name, and took care of hosting
            everything and all of the related services. We would highly
            recommend Majic for website design, especially for companies looking
            for someone with a creative eye.
          </p>
          <p className="mt-16 mb-8 text-lg tracking-tight">
            Garry & JJ Reese
            <span className="block text-sm opacity-75">Owners</span>
          </p>
          <div className="h-auto border-b-2 border-transparent w-fit hover:border-b-2 hover:border-text/50">
            <Link
              href="https://www.bandcpestcontrol.com"
              target="blank"
              className="text-xs text-text/80"
            >
              Visit
              <Image
                src="/images/up-right-arrow.svg"
                alt="arrow icon"
                height={15}
                width={15}
                className="inline ml-2 opacity-60"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
