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
        className="grid justify-center w-full grid-cols-3 gap-4 mg:gap-8"
      >
        <div className="col-span-3 bg-seasalt max-h-[40rem] rounded-2xl flex items-center justify-evenly shadow py-4 md:py-16">
          <Lottie
            animationData={workingV2}
            className="max-w-[36rem] max-h-[36rem] hidden md:inline p-4 mx-4 mg:mx-16"
          />
          <div className="flex flex-col p-8 max-md:items-center max-md:justify-center max-md:text-center">
            <p className="text-4xl mg:text-6xl font-calistoga w-[12ch] mb-8">
              Running your own business is
              <span className="text-gradient"> tough enough</span>
            </p>
            <p className="mb-8 mg:mb-16 w-[25ch] sm:w-[30ch] mg:w-[40ch] mg:text-xl">
              Thats why Majic wants to provide a one stop shop for businesses
              who need worry-free web design & development services at a fair
              rate.
            </p>
            <ScrollLink to="services" offset={-200}>
              <PrimaryButton className="sm:w-[17rem] mg:w-[21rem] w-60 px-3 py-4 max-sm:text-sm">
                See our affordable plans
              </PrimaryButton>
            </ScrollLink>
          </div>
        </div>
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex max-md:flex-row flex-col items-center justify-center max-md:justify-between p-14 md:max-mg:p-6 bg-seasalt rounded-2xl h-[40rem] md:max-mg:h-[28rem] relative group shadow max-md:col-span-3 max-md:h-48 max-sm:p-8"
          >
            <MiniLogoSparkles className="invisible -top-5 -left-4 group-hover:visible" />
            <MiniLogoSparkles className="invisible -bottom-5 -right-5 group-hover:visible" />
            <div className="relative h-32 w-80 max-mg:h-18 max-mg:w-24 max-md:mr-6 max-sm:hidden">
              <Image src={item.icon} alt={item.alt} fill />
            </div>
            <div>
              <p className="mt-10 mb-4 text-5xl text-center sm:mt-4 mg:mb-14 mg:mt-14 max-mg:text-3xl text-text font-calistoga max-md:text-2xl">
                <span className="text-gradient">{item.topText} </span>
                <br className="max-md:hidden" />
                <span className="whitespace-nowrap">{item.bottomText}</span>
              </p>
              <p className="h-24 text-xl text-center text-text max-mg:text-sm max-md:w-96 max-sm:w-72">
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
