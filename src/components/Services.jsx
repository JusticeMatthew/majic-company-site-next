import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import services from '@/constants/services';

const Services = () => {
  return (
    <section
      id="services"
      className="mx-6 flex items-center max-w-full px-4 h-[50vh] text-seasalt"
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full gap-6"
      >
        <h4 className="text-5xl tracking-wide font-calistoga">What we offer</h4>
        <div className="flex justify-between w-full">
          <p className="w-80 text-seasalt/70">
            You have a business to run. That’s why we go above and beyond to
            provide the most complete digital service to our clients. From your
            own domain and hosting, to webdesign and email support.
            <br />
            <br />
            <span className="font-bold">We take care of it.</span>
          </p>
          <motion.div className="grid grid-cols-2 grid-rows-5 gap-4">
            {services.map((item, idx) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx}
                className={`${
                  item.offset ? '-translate-x-20' : ''
                } flex items-center gap-5 px-6 py-4 rounded-full bg-primary-gradient`}
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
