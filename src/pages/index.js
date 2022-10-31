import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Btn } from "component/Btn";
import HeroSection from "component/home/HeroSection";
import About from "component/home/about";
import Projects from "component/home/Projects";
import ContactForm from "component/home/ContactForm";
import Footer from "component/home/Footer";
import WorkExperience from "component/home/WorkExperience";
import Sidenav from "component/Drawer";

export default function Home() {
  // const [showNav, setShowNav] = useState(false)
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 84) setNavBackground(true);
      else setNavBackground(false);
    });
  }, [navBackground]);

  return (
    <div className="">
      <nav
        className={`w-full p-3 bg-gradient-to-tr from-slate-800 to-slate-600 ${
          !navBackground ? "" : "fixed"
        } z-40`}
      >
        <div className="centered flex justify-between items-center">
          <div className="logo text-4xl font-bold text-rose-500">
            <span className="text-3xl md:text-5xl logo-text inline-block">
              L
            </span>
            <span className="text-3xl md:text-5xl logo-text inline-block">
              D
            </span>
            <span className="text-xl md:text-3xl logo-text inline-block rotate-[20deg] -mt-10">
              EV
            </span>
          </div>

          <ul className={`md:flex hidden  h-full bg-transparent`}>
            <li className="flex p-2 justify-center">
              <motion.a 
                href="#home" 
                className="p-2 text-slate-300 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion.a>
            </li>
            <li className="flex p-2 justify-center">
              <motion.a 
                href="#about" 
                className="p-2 text-slate-300 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.a>
            </li>
            <li className="flex p-2 justify-center">
              <motion.a 
                href="#experienced" 
                className="p-2 text-slate-300 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Work Experience
              </motion.a>
            </li>
            <li className="flex p-2 justify-center">
              <motion.a 
                href="#projects" 
                className="p-2 text-slate-300 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.a>
            </li>
            <li className="flex p-2 justify-center">
              <motion.a 
                href="#contact" 
                className="p-2 text-slate-300 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>

          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Btn
              content="Get in touch"
              className="bg-rose-500 hover:bg-rose-600 btn h-12 w-36 hidden md:block rounded"
            />
          </motion.a>

          <Sidenav />
        </div>
      </nav>

      <main className="">
        <HeroSection />
        <About />
        <WorkExperience />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
