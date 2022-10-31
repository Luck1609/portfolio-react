import React, { useRef } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBtn } from "component/Btn";
import Input from "component/Input";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef()
  const method = useForm({
    mode: 'all',
    resolver: yupResolver(emailValidation)
  });

  const { handleSubmit, formState: { isValid, isDirty } } = method;

  const sendEmail = async (payload) => {
    try {
      const response = await emailjs.send('service_kb6syya', 'template_lhk25rf', payload, '-1zYlYP9-zTLDZtxA');
      alert('Message sent')
      console.log('Email response', response)
    } catch({message}) {
      console.log('Email error details', message)
    }
  };
  
  return (
    <div className="w-full bg-gradient-to-tl from-slate-900 to-slate-700 py-20" id="contact">
      <div className="w-full text-center mb-8 text-white">
        <h2 className="text-5xl mb-3 font-bold">Get in touch!</h2>
        <label className="md:text-2xl font-medium block mb-5">
          Get in touch and let&apos;s talk, I would really like to hear from you
        </label>
      </div>
      
      <div className="max-w-[1200px] m-auto flex flex-col lg:flex-row">
        <FormProvider {...method}>
          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="w-11/12 md:w-4/5 mx-auto lg:basis-1/2 bg-white py-8 px-4 lg:p-12 sm:px-10 rounded grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
            <label className="text-center text-2xl md:mb-5 block w-full lg:col-span-2 font-semibold">
              Message me
            </label>

            <Input
              name="name"
              variant="standard"
              label="Enter your full name"
              className="w-full "
            />

            <Input
              name="email"
              variant="standard"
              label="Enter your email address"
              className="w-full "
            />

            <Input
              name="message"
              variant="standard"
              label="Type in you message here"
              className="w-full lg:col-span-2"
              rows={5}
              multiline
            />

            <FormBtn
              content="Send message"
              className="bg-emerald-500 hover:bg-emerald-600 h-12 md:h-16 lg:col-span-2 lg:w-72 mx-auto rounded"
              disabled={!isValid || !isDirty}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}


const emailValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})