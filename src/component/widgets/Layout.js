import React from 'react'
import ContactForm from './ContactForm'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
        {/* Photo by <a href="https://unsplash.com/@nathananderson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Anderson</a> on <a href="https://unsplash.com/s/photos/down-syndrome?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

      <main className="w-full">
        { children }

        <div className="w-full px-3 py-10 md:px-0 md:py-20 relative bg-contact-bg bg-cover flex after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-opacity-50">
          <ContactForm />
        </div>
      </main>

      <footer className="w-full p-3 bg-[#5E6D55] text-white text-center">
        <div className="flex w-full max-w-6xl m-auto">
          <span className="">
            &copy; { new Date().getFullYear() } Neuro-Diversity (AAN) by Assor Tawia Foundation, Ghana.
          </span>


        </div>
      </footer>
    </div>
  )
}
