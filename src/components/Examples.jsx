import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Examples = () => {
  return (
    <section
      id="examples"
      className="flex items-center justify-center h-screen max-w-full mx-6 text-text"
    >
      <div className="w-full h-[40rem] bg-seasalt rounded-2xl relative flex">
        <div className="h-[40rem] w-80 relative bg-[#18181B] rounded-l-2xl">
          <Image
            src="/images/bcmockup.png"
            alt="b & c pest control website"
            fill
            className="rounded-l-2xl"
          />
        </div>
        <div className="relative p-24">
          <p className="font-semibold tracking-tighter">B & C Pest Control</p>
          <h4 className="mt-6 text-5xl font-calistoga">
            A fresh look for a <span className="text-gradient">local pro</span>
          </h4>
          <span className="absolute translate-y-10 text-[8rem] leading-none font-calistoga text-gradient opacity-20">
            {'"'}
          </span>
          <p className="w-[40rem] mt-16">
            Majic created the website for our company B&C Pest Control. We told
            them we wanted something simple and informative and they delivered
            better than we expected while keeping us updated along the way and
            listening to our feedback. Their team also assisted in designing a
            company logo, acquiring our domain name, and took care of hosting
            everything and all of the related services. We would highly
            recommend Majic for website design, especially for companies looking
            for someone with a creative eye.
          </p>
          <p className="mt-6 mb-8 text-lg tracking-tight">
            Garry & JJ Reese
            <span className="block text-sm opacity-75">Owners</span>
          </p>
          <div className="h-auto w-fit hover:border-b-2 border-text/50">
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
