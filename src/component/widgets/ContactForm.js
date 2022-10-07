import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Input from 'component/Input';
import { FormBtn } from 'component/Btn';

export default function ContactForm() {
  const methods = useForm();

  const {handleSubmit} = methods;

  const submit = (payload) => {
  }

  return (
    <FormProvider {...methods}>
      <form className="grid md:grid-cols-2 z-20 gap-8 w-full max-w-3xl m-auto pb-8 md:pb-20 px-5 md:px-10 bg-white bg-opacity-80 rounded" onSubmit={handleSubmit(submit)}>
        <label className="text-2xl md:text-3xl font-bold md:col-span-2 pt-5 md:pt-10 md:pb-3 text-center block">Get active with us on Neurodiversity</label>
        <Input 
          name="name"
          label="Full name"
          variant="outlined"
        />

        <Input 
          name="email"
          label="Email address"
          variant="outlined"
        />

        <Input 
          name="message"
          label="Leave us a message"
          variant="outlined"
          className="md:col-span-2 border-"
          rows={5}
          multiline
        />

        <div className="md:col-span-2 w-full flex">
          <FormBtn 
            content="Submit"
            className="h-16 bg-teal-500 hover:bg-teal-600 w-72 mx-auto rounded"
          />
        </div>
      </form>
    </FormProvider>
  )
}
