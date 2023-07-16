import React from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormValidator } from '@/utils/contactFormValidator';
import { PrimaryButton } from '@/components/Button';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactFormValidator) });

  const sendEmail = async ({ name, email }) => {
    console.log(process.env.NEXT_PUBLIC_EMAILJS_USER);
    try {
      const validatedForm = contactFormValidator.parse({
        name,
        email,
      });

      await toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
          validatedForm,
          process.env.NEXT_PUBLIC_EMAILJS_USER,
        ),
        {
          loading: `We're summoning your message...`,
          success: (
            <span>
              The spell worked!
              <br />
              <b>Message Received.</b>
            </span>
          ),
          error: 'The summoning failed, try again later',
        },
      );
      reset();
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError) {
        setError('name', { message: error.message });
        setError('email', { message: error.message });
        return;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="w-[18.5rem] sm:w-[26rem] mg:w-[30rem] h-80 flex flex-col gap-2 text-text"
    >
      <div className="h-28">
        <label htmlFor="name" className="ml-5 text-lg font-semibold">
          Name
        </label>
        <div
          className={`flex flex-col w-full p-1 rounded-full ${
            errors.name
              ? 'bg-red-700 focus-within:bg-red-700 hover:red-700'
              : 'hover:bg-primary-gradient focus-within:bg-primary-gradient'
          }`}
        >
          <input
            id="name"
            type="text"
            {...register('name')}
            className="px-5 rounded-full h-14 bg-slate-200 focus:outline-none"
          />
        </div>
        <p
          className={
            errors.name
              ? 'text-red-500 text-xs ml-5 visible h-5 mt-1'
              : 'invisible'
          }
        >
          We need your name or your companies name
        </p>
      </div>
      <div className="h-28">
        <label htmlFor="email" className="ml-5 text-lg font-semibold">
          Email
        </label>
        <div
          className={`flex flex-col w-full p-1 rounded-full ${
            errors.email
              ? 'bg-red-700 focus-within:bg-red-700 hover:red-700'
              : 'hover:bg-primary-gradient focus-within:bg-primary-gradient'
          }`}
        >
          <input
            id="email"
            type="email"
            {...register('email')}
            className="px-5 rounded-full h-14 bg-slate-200 focus:outline-none"
          />
        </div>
        <p
          className={
            errors.email
              ? 'text-red-500 text-xs ml-5 visible h-5 mt-1'
              : 'invisible'
          }
        >
          We need a valid email
        </p>
      </div>
      <PrimaryButton
        type="submit"
        disabled={errors.name || errors.email ? true : false}
        className="mt-8 translate-x-2 w-[17.8rem] sm:w-[25.3rem] mg:w-[29.3rem] disabled:opacity-50 disabled:pointer-events-none"
      >
        Request a quote
      </PrimaryButton>
    </form>
  );
};

export default ContactForm;
