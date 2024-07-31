import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import Form from './Form';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ContactUsForm = () => {
  const isAboveMediaScreen = useMediaQuery('(min-width:1060px)');
  return (
    <section className="mx-auto py-24 px-10 md:w-5/6 text-black" id="callUs">
      <div className="flex flex-col justify-center md:flex-row items-center md:justify-between">
        {/* form */}
        <div>
          <h2 className="text-2xl sm:text-4xl mb-10">GET A FREE QUOTE</h2>
          <Form />
        </div>

        {/* phone box */}
        <div className="flex flex-col justify-center md:block items-center mt-12 md:m-0 p-5">
          <div className="block text-center md:text-left">
            <h2 className="text-2xl md:text-4xl mb-4">FEEL FREE TO CALL US.</h2>
            <span className="text-xl md:text-3xl">
              We’d love to hear from you.
            </span>
          </div>
          <div className="flex items-center mt-8">
            <span>
              <FaPhone fill="#54c036" fontSize={32} />
            </span>
            <a
              className="text-black text-2xl ml-3"
              href="tel:(123) 123-123-1234"
            >
              (123) 123-123-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
