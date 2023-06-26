import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import benefits from '@/constants/benefits';
import { MiniLogoSparkles, Button } from '@/components';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center w-full h-screen text-text"
    >
      <div className="grid justify-center w-full grid-cols-3 gap-10">
        <div className="col-span-3 bg-seasalt h-[30rem] rounded-2xl flex flex-col items-center justify-center shadow">
          <div className="w-[22rem] flex flex-col self-end gap-5 mr-24">
            <p className="text-5xl font-calistoga">
              Running your own business is
              <br />
              <span className="text-gradient">tough enough</span>
            </p>
            <p className="mb-6 leading-5 w-80">
              Thats why Majic wants to provide a one stop shop for businesses
              who need worry-free web design & development services at a fair
              rate.
            </p>
            <Button>
              <Image
                src="/images/play-icon.svg"
                alt="play"
                width={20}
                height={20}
                className="inline -translate-y-[1px] mr-3"
              />
              How the Majic happens
            </Button>
          </div>
        </div>
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-evenly p-14 bg-seasalt rounded-2xl h-[30rem] relative group shadow"
          >
            <MiniLogoSparkles className="invisible -top-5 -left-4 group-hover:visible" />
            <MiniLogoSparkles className="invisible -bottom-5 -right-5 group-hover:visible" />
            <Image src={item.icon} alt={item.alt} width={140} height={40} />
            <p className="mt-10 mb-6 text-4xl text-center text-text font-calistoga">
              <span className="text-gradient">{item.topText}</span>
              <br />
              {item.bottomText}
            </p>
            <p className="leading-5 text-center text-text">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
