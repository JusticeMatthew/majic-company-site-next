import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center h-screen sg:h-[70vh] max-w-full text-text mx-6"
    >
      <div className="w-full bg-seasalt h-[50rem] sg:h-[34rem] rounded-2xl p-24 sg:flex-row flex-col flex max-sg:items-center justify-between">
        <div className="w-60">
          <h6 className="mb-8 text-5xl font-calistoga">
            Request a<br />
            <span className="text-gradient">free quote</span>
          </h6>
          <p>
            Get started and request a free quote for your website, video or
            managing your social media platform!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
