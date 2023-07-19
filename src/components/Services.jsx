import React, { useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ScrollLink } from '@/components';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import pricingPlans from '@/constants/pricingPlans';

const Services = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <motion.section
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1.3 }}
      ref={ref}
      id="services"
      className="relative flex w-full h-[min(auto, 60vh)] my-16 items-center text-seasalt max-sm:text-sm"
    >
      <div className="flex flex-col w-full gap-8">
        <h4 className="text-6xl tracking-wide font-calistoga">What we offer</h4>
        <div className="flex flex-col justify-between w-auto mg:w-full max-mg:gap-10 mg:text-lg">
          <p className=" max-w-[75ch] text-seasalt/75">
            You have a business to run. That’s why we go above and beyond to
            provide the most complete digital service to our clients at an
            affordable price. Everything you need to thrive online.
          </p>
          <p className="mt-8 font-bold">We take care of it.</p>
          <div className="grid grid-cols-3 gap-8 mt-16">
            {pricingPlans.map((plan) => (
              <div
                key={plan}
                className={`flex flex-col justify-between h-auto p-16 shadow bg-seasalt rounded-2xl text-text relative ${
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
                  <div className="mt-8 mb-16">
                    {plan.services.map((service) => (
                      <div key={service} className="flex mb-6">
                        <Image
                          src="/images/check-icon.svg"
                          alt="checkmark"
                          width={20}
                          height={20}
                        />
                        <p className="inline ml-8">{service}</p>
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
                  <div className="flex justify-center w-full mt-8">
                    <ScrollLink to="contact">
                      {plan.recommended ? (
                        <PrimaryButton className="px-12 py-3">
                          Contact us
                        </PrimaryButton>
                      ) : (
                        <SecondaryButton>Contact us</SecondaryButton>
                      )}
                    </ScrollLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
