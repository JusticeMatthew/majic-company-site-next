import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import pricingPlans from '@/constants/pricingPlans';

const CombinedServices = () => {
  const [personal, business, commerce] = pricingPlans;
  const [activePlan, setActivePlan] = useState(business);

  return (
    <motion.div
      layout
      className="flex flex-col items-center mt-16 text-text mg:hidden"
    >
      <motion.div
        key={activePlan.name}
        layout
        className={`flex flex-col justify-between h-auto py-16 shadow bg-seasalt rounded-b-2xl relative`}
      >
        <motion.div
          layout
          className="absolute flex items-center w-full h-20 text-lg text-center -top-20 bg-seasalt/60 rounded-t-2xl"
        >
          {['Personal', 'Business', 'Commerce'].map((tabName, idx) => (
            <motion.div
              layout
              key={idx}
              className={`w-1/3 flex items-center justify-center h-full ${
                activePlan.name === tabName ? 'bg-seasalt font-semibold' : ''
              }  ${activePlan === personal ? 'rounded-tl-2xl' : ''} ${
                activePlan === commerce ? 'rounded-tr-2xl' : ''
              }`}
              onClick={() => setActivePlan(eval(tabName.toLowerCase()))}
            >
              {tabName}
            </motion.div>
          ))}
        </motion.div>
        {activePlan.recommended && (
          <div className="absolute left-0 flex justify-center w-full text-center top-6 text-seasalt">
            <p className="px-20 py-1 font-medium rounded-full bg-primary-gradient">
              Recommended
            </p>
          </div>
        )}
        <div>
          <Lottie
            animationData={activePlan.lottie}
            className="w-[16rem] h-[16rem] mx-auto"
          />
          <h4 className="w-full mt-8 text-4xl text-center font-calistoga">
            {activePlan.name}
          </h4>
          <div className="px-12 mt-8 mb-16">
            {activePlan.services.map((service) => (
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
            {activePlan.price}
          </p>
          <p className="w-full mt-3 text-sm text-center">
            {activePlan.monthly}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CombinedServices;
