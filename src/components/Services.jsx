import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import services from '@/constants/services';

const Services = () => {
  return (
    <section
      id="services"
      className="relative flex w-full min-h-[60vh] mb-12 items-center text-seasalt max-sm:my-12 max-sm:text-sm px-6"
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 sm:w-full w-80"
      >
        <h4 className="text-5xl tracking-wide font-calistoga">What we offer</h4>
        <div className="flex flex-col justify-between w-auto mg:w-full mg:flex-row max-mg:gap-10">
          <p className="w-80 text-seasalt/70">
            You have a business to run. That’s why we go above and beyond to
            provide the most complete digital service to our clients. From your
            own domain and hosting, to webdesign and email support.
            <br />
            <br />
            <span className="font-bold">We take care of it.</span>
          </p>
          <motion.div className="grid grid-cols-1 grid-rows-5 gap-4 sm:grid-cols-2 md:max-mg:translate-x-20">
            {services.map((item, idx) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx}
                className={`${
                  item.offset ? 'md:-translate-x-20' : ''
                } items-center gap-5 flex px-6 py-4 rounded-full bg-primary-gradient sm:max-md:text-sm ${
                  idx > 6 ? 'hidden sm:flex' : ''
                }`}
              >
                <Image
                  src="/images/circle-check-icon.svg"
                  alt="checkmark"
                  width={32}
                  height={32}
                />
                <p>{item.service}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
