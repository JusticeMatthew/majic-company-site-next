import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import services from '@/constants/services';

const Services = ({ setInView }) => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section
      ref={ref}
      id="services"
      className="relative flex w-full h-[min(auto, 60vh)] my-16 items-center text-seasalt max-sm:my-16 max-sm:text-sm md:px-6"
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full gap-8"
      >
        <h4 className="text-5xl tracking-wide font-calistoga">What we offer</h4>
        <div className="flex flex-col justify-between w-auto mg:w-full mg:flex-row max-mg:gap-10">
          <div>
            <p className="leading-[1.7rem] w-80 text-seasalt/75">
              You have a business to run. That’s why we go above and beyond to
              provide the most complete digital solution for our clients. All of
              our website packages include these services to ensure your
              customers online experience is
              <span className="text-lg font-bold tracking-wide text-gradient font-calistoga">
                &nbsp;Majical.
              </span>
            </p>
          </div>
          <motion.div className="grid grid-cols-1 grid-rows-5 gap-4 sm:grid-cols-2">
            {services.map((item, idx) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx}
                className={`${
                  item.offset ? 'mg:-translate-x-20' : ''
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
