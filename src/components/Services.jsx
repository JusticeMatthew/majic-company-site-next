import React, { useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import { CombinedServices } from '.';
import pricingPlans from '@/constants/pricingPlans';

const Services = ({ setInView }) => {
  const { ref, inView } = useInView({ rootMargin: '-10% 0px -50%' });

  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      ref={ref}
      id="services"
      className={`relative flex w-full h-[min(auto, 60vh)] my-16 items-center text-seasalt max-sm:text-sm ${
        inView ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-200`}
    >
      <div className="flex flex-col w-full gap-8">
        <h4 className="text-4xl tracking-wide sm:text-6xl font-calistoga">
          What we offer
        </h4>
        <div className="flex flex-col justify-between w-auto mg:w-full max-mg:gap-10 mg:text-lg">
          <p className="max-w-[75ch] text-seasalt/75">
            You have a business to run. That’s why we go above and beyond to
            provide the most complete digital service to our clients at an
            affordable price. Everything you need to thrive online.
          </p>
          <p className="font-bold sm:mt-8">We take care of it.</p>
          <CombinedServices />
          <div className="hidden grid-cols-3 gap-8 mt-16 mg:grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col justify-between h-auto py-16 shadow bg-seasalt rounded-2xl text-text relative ${
                  plan.recommended ? 'ring-[3px] ring-blurple' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute left-0 flex justify-center w-full text-center -top-4 text-seasalt">
                    <p className="px-20 py-1 font-medium rounded-full w-fit bg-primary-gradient">
                      Recommended
                    </p>
                  </div>
                )}
                <div>
                  <Lottie
                    animationData={plan.lottie}
                    className="w-[16rem] h-[16rem] mx-auto"
                  />
                  <h4 className="w-full mt-8 text-4xl text-center font-calistoga">
                    {plan.name}
                  </h4>
                  <div className="px-12 mt-8 mb-16">
                    {plan.services.map((service) => (
                      <div key={service} className="flex mb-6">
                        <Image
                          src="/images/check-icon.svg"
                          alt="checkmark"
                          width={20}
                          height={20}
                        />
                        <p className="inline ml-6">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="w-full text-3xl text-center font-calistoga">
                    {plan.price}
                  </p>
                  <p className="w-full mt-3 text-sm text-center">
                    {plan.monthly}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
