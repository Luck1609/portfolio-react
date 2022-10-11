import { Btn } from "component/Btn";
import HeroSection from "component/home/HeroSection";
import About from "component/home/about";
import Projects from "component/home/Projects";
import ContactForm from "component/home/ContactForm";
import Footer from "component/home/Footer";

export default function Home() {
  return (
    <div className="">
      {/* <Head>
        <title>Lucky&apos;s portfolio | Welcome</title>
        <meta
          name="description"
          content="My personal website to showcase my web development skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <nav className="w-full p-3 bg-gradient-to-tr from-slate-800 to-slate-600 fixed z-40">
        <div className="centered flex justify-between items-center">
          <div className="logo text-4xl font-bold text-rose-500">
            <span className="text-5xl logo-text inline-block">L</span>
            <span className="text-5xl logo-text inline-block">
              D
            </span>
            <span className="text-3xl logo-text inline-block rotate-[20deg] -mt-10">
              EV
            </span>
          </div>

          <ul className="flex">
            <li className="flex">
              <a href="#home" className="p-2 text-slate-300 text-lg">Home</a>
            </li>
            <li className="flex">
              <a href="#contact" className="p-2 text-slate-300 text-lg">Contact</a>
            </li>
            <li className="flex">
              <a href="#projects" className="p-2 text-slate-300 text-lg">Projects</a>
            </li>
          </ul>

          <a href="#contact">
            <Btn
              content="Get in touch"
              className="bg-rose-500 hover:bg-rose-600 btn h-12 w-36 hidden md:block rounded"
            />
          </a>
        </div>
      </nav>

      <main className="">
        <HeroSection />
        <About />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
