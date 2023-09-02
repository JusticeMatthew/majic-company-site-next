import React, { useState } from 'react';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormValidator } from '@/utils/contactFormValidator';
import { PrimaryButton } from '@/components/Button';
import spinner from '@/spinner.json';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactFormValidator) });
  const [sending, setSending] = useState(false);

  const sendEmail = async ({ name, email, company, message }) => {
    try {
      setSending(true);
      const validatedForm = contactFormValidator.parse({
        name,
        email,
        company,
        message,
      });
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        validatedForm,
        process.env.NEXT_PUBLIC_EMAILJS_USER,
      );
      reset();
      setSending(0);
      setTimeout(() => setSending(false), 4000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSending(false);
        setError('name', { message: error.message });
        setError('email', { message: error.message });
        setError('message', { message: error.message });
        return;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col w-full text-text"
    >
      <div className="flex flex-col w-full sg:gap-16 mg:gap-24 sg:flex-row min-h-96">
        <div className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="ml-5 text-lg font-semibold">
              Name
            </label>

            <input
              id="name"
              type="text"
              {...register('name')}
              className={`mt-2 w-full h-14 p-5 rounded-2xl bg-slate-200 focus:outline-none ${
                errors.name
                  ? 'focus-within:ring-4 ring-4 ring-red-700'
                  : 'hover:ring-4 focus-within:ring-4 ring-blurple'
              }`}
            />
            <p
              className={
                errors.name
                  ? 'text-red-500 text-xs ml-5 visible h-5 mt-2'
                  : 'invisible'
              }
            >
              We need to know your name
            </p>
          </div>
          <div className="mb-4 h-28">
            <label htmlFor="email" className="ml-5 text-lg font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`mt-2 w-full h-14 p-5 rounded-2xl bg-slate-200 focus:outline-none ${
                errors.email
                  ? 'focus-within:ring-4 ring-4 ring-red-700'
                  : 'hover:ring-4 focus-within:ring-4 ring-blurple'
              }`}
            />
            <p
              className={
                errors.email
                  ? 'text-red-500 text-xs ml-5 visible h-5 mt-2'
                  : 'invisible'
              }
            >
              We need a valid email
            </p>
          </div>
          <div className="h-28">
            <label htmlFor="company" className="ml-5 text-lg font-semibold">
              Company
            </label>
            <div className={`flex flex-col w-full p-1 rounded-full`}>
              <input
                id="company"
                type="text"
                {...register('company')}
                className="w-full p-5 mt-2 h-14 rounded-2xl bg-slate-200 focus:outline-none hover:ring-4 focus-within:ring-4 ring-blurple"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-4 sg:mt-0">
          <label
            htmlFor="Message"
            className="block mb-2 ml-5 text-lg font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            type="textarea"
            {...register('message')}
            className={`resize-none w-full h-60 sg:h-80 p-5 rounded-2xl bg-slate-200 focus:outline-none ${
              errors.message
                ? 'focus-within:ring-4 ring-4 ring-red-700'
                : 'hover:ring-4 focus-within:ring-4 ring-blurple'
            }`}
          />
          <p
            className={
              errors.message
                ? 'text-red-500 text-xs ml-5 visible h-5 mt-1'
                : 'invisible'
            }
          >
            Let us know how we can help
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full mt-16">
        <PrimaryButton
          type="submit"
          disabled={
            errors.name || errors.email || errors.message ? true : false
          }
          className={`${
            sending
              ? 'px-12 py-3 group-hover:bg-transparent cursor-default'
              : 'px-40 py-3'
          } ${
            sending === 0
              ? 'group-hover:bg-transparent cursor-default'
              : 'cursor-pointer'
          }`}
        >
          {sending ? (
            <Lottie animationData={spinner} className="w-12 h-12" />
          ) : (
            <p className="inline h-12">
              {sending === 0 ? 'Success! Message received' : 'Send'}
            </p>
          )}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ContactForm;
