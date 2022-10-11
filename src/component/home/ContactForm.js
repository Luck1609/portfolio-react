import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormBtn } from "component/Btn";
import Input from "component/Input";

export default function ContactForm() {
  const method = useForm();

  const { handleSubmit } = method;

  
    const submit = async (payload) => {
      // const result = await apiRequest({
      //   method: '',
      //   url: '',
      //   payload
      // });
    }

  return (
    <div className="w-full bg-gradient-to-tl from-slate-900 to-slate-700 py-20" id="contact">
      <div className="w-full text-center mb-8 text-white">
        <h2 className="text-5xl mb-3 font-bold">Get in touch!</h2>
        <label className="md:text-2xl font-medium">
          Get in touch and let&apos;s talk, I would really like to hear from you
        </label>
      </div>
      <div className="max-w-[1200px] m-auto flex flex-col lg:flex-row">
        <FormProvider {...method}>
          <form onSubmit={handleSubmit(submit)} className="w-11/12 mx-auto lg:basis-1/2 bg-white py-8 px-4 lg:p-8 lg:px-10 rounded grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
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
              name="subject"
              variant="standard"
              label="Message subject"
              className="w-full lg:col-span-2"
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
              className="bg-emerald-500 hover:bg-emerald-600 h-16 lg:col-span-2 lg:w-72 mx-auto rounded"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
