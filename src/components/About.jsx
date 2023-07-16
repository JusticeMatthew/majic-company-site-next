import React, { useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import benefits from '@/constants/benefits';
import { MiniLogoSparkles, ScrollLink } from '@/components';
import { PrimaryButton } from '@/components/Button';
import workingV2 from '@/workingV2.json';

const About = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      id="about"
      className="relative flex items-center justify-center w-full min-h-screen text-text md:max-mg:min-h-[80vh]"
    >
      <div
        ref={ref}
        className="grid justify-center w-full grid-cols-3 gap-4 md:gap-8"
      >
        <div className="col-span-3 bg-seasalt h-[30rem] rounded-2xl flex items-center justify-evenly shadow">
          <Lottie
            animationData={workingV2}
            className="w-[28rem] h-[28rem] hidden md:inline max-mg:p-6"
          />
          <div className="md:max-mg:w-[18rem] max-sm:w-[18rem] w-[22rem] mx-6 flex flex-col gap-5 max-md:items-center max-md:justify-center max-md:text-center">
            <p className="text-5xl md:max-mg:text-4xl max-sm:text-4xl font-calistoga">
              Running your own business is
              <span className="text-gradient"> tough enough</span>
            </p>
            <p className="mb-3 max-sm:w-60 w-80 md:max-mg:w-60">
              Thats why Majic wants to provide a one stop shop for businesses
              who need worry-free web design & development services at a fair
              rate.
            </p>
            <ScrollLink to="contact">
              <PrimaryButton className="md:max-mg:w-[17rem] w-[21rem] max-sm:w-60">
                Get a free quote
              </PrimaryButton>
            </ScrollLink>
          </div>
        </div>
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex max-md:flex-row flex-col items-center justify-center max-md:justify-between max-sm:justify-center p-14 md:max-mg:p-6 bg-seasalt rounded-2xl h-[30rem] md:max-mg:h-[28rem] relative group shadow max-md:col-span-3 max-md:h-48 max-sm:p-8"
          >
            <MiniLogoSparkles className="invisible -top-5 -left-4 group-hover:visible" />
            <MiniLogoSparkles className="invisible -bottom-5 -right-5 group-hover:visible" />
            <div className="relative h-24 w-60 max-mg:h-18 max-mg:w-20 max-md:mr-6 max-sm:hidden">
              <Image src={item.icon} alt={item.alt} fill />
            </div>
            <div>
              <p className="mt-10 mb-6 text-4xl md:text-center max-md:mb-2 max-mg:text-3xl text-text font-calistoga max-md:text-2xl">
                <span className="text-gradient">{item.topText} </span>
                <br className="max-md:hidden" />
                <span className="whitespace-nowrap">{item.bottomText}</span>
              </p>
              <p className="h-24 md:text-center text-text max-mg:text-sm max-md:w-96 max-sm:w-72">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
