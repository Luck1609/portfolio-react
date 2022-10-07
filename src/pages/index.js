import React from 'react'
import Layout from 'component/widgets/Layout'
import img from 'assets/img'
import { Btn } from 'component/Btn'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Founder />
      <Posts />
    </Layout>
  )
}



const Hero = () => {
  return (
    <div className="w-full body-gradient flex relative h-[420px] md:h-[532px] overflow-hidden">
      <div className="absolute grid -ml-[10%] -mr-[10%] w-[120%] md:grid-cols-3 after:absolute after:left-0 after:top-0 after:bg-black after:w-full after:h-full after:z-10 after:bg-opacity-50">
        <img src={img.mother} alt="" className="hidden md:block w-full h-[532px]" />
        <img src={img.child} alt="" className="w-full" />
        <img src={img.biology} alt="" className="hidden md:block  w-full" />
      </div>
      
      <div className="w-full max-w-5xl m-auto text-center text-white relative z-20">
        <h1 className="font-bold text-3xl md:text-5xl leading-snug mb-3 md:mb-8">ACTIVE ABOUT NEURODIVERSITY</h1>
        <h2 className="font-medium text-xl md:text-3xl leading-snug mb-4">THROUGH AWARENESS, EDUCATION AND ENGAGEMENT.</h2>
        <label className="font-semibold text-xl md:text-3xl leading-snug block">Your donation can make a difference</label>
        <label className="font-semibold text-md md:text-xl leading-snug">Help us support  Neuro-Diverse  people and their families.</label>
        
        <div className="w-full mt-5 md:mt-10">
          <Btn 
            content="Donate"
            className="bg-teal-500 hover:bg-teal-600 h-14 w-60"
          />
        </div>
      </div>

    </div>
  )
}



const About = () => {
  return (
    <div className="w-full bg-white py-8 md:py-20 flex px-4 md:px-0">
      <div className="w-full md:max-w-5xl m-auto text-center md:text-justify">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-8">The Assor Tawiah Foundation </h2>

        <p className="leading-7 md:leading-10 mb-8 text-lg md:text-xl">The Assor Tawiah Foundation (ATF), a non-governmental and non-profit organisation (NGO), was established to address the needs of underprivileged people and families living with neurological development challenges (special needs) in Ghana. The organisation focuses on providing a single platform and facility that promotes advocacy, training, skills development, educational, medical, therapeutic, protection and counseling support for persons that are Neuro-Diverse and their families.</p>
        <p className="leading-7 md:leading-10 mb-8 text-lg md:text-xl">We are committed to engaging the families and care-givers as well as the community to facilitate the education and skills needed to support their children’s development and quality of life. We believe in an inclusive society and that every child deserves a chance for a better future. We also provide various resources to help in integrating such persons into society. Assor Tawiah Foundation is operational as Active About Neurodiversity.</p>
      </div>
    </div>
  )
}

const Founder = () => {
  return (
    <div className="w-full body-gradient flex py-20 px-4 md:px-0">
      <div className="w-full max-w-6xl m-auto grid md:grid-cols-5 bg-[rgba(236,223,245,0.4)] rounded overflow-hidden">
        <div className="w-full md:col-span-3 text-justify py-8 px-5 md:px-12">
          <h3 className="text-2xl text-center md:text-left mb-5 md:text-3xl font-semibold">Meet our Founder  Kate Assor Tawiah</h3>

          <p className="leading-7 md:leading-9 text-lg mb-3">Kate is the mother of three wonderful children, the youngest of whom is neurodiverse. She is very passionate about people's well being and has always known that she would devote her time to serving humanitarian courses.</p>
          <p className="leading-7 md:leading-9 text-lg mb-3">Her son's diagnosis opened her up to a whole new world of challenges and immense need and she felt drawn to contribute her quota to this cause, therefore the founding of the Assor Tawiah Foundation. She has since worked to bring relief to some vulnerable families impacted in this space.</p>
          <p className="leading-7 md:leading-9 text-lg">Kate holds a masters degree in leadership and innovation and she is now very Active About NeuroDiversity.</p>
        </div>

        <div className="w-full md:col-span-2">
          <img src={img.founder} alt="" className="w-full" />
        </div>
      </div>
    </div>
  )
}


const Posts = () => {
  return (
    <div className="w-full py-20">
      <h3 className="text-4xl font-bold text-center mb-10">Latest from our blog post</h3>
      <div className="w-full max-w-6xl m-auto grid md:grid-cols-2 gap-8 px-4 md:px-0">

        <div className="grid md:grid-cols-2 border rounded overflow-hidden">
          <img src={img.aspergers} alt="News item's cover" className="h-full w-full" />
          <div className="bg-white p-5 relative">
            <span className="text-sm">Aug 14 - 3 min</span>
            <label className="text-2xl font-semibold block mt-3 mb-4">Can People with Asperger’s Feel Happy?</label>
            <p className="">Asperger’s syndrome is characterized by significant difficulties in social interaction</p>
            <div className="border-t p-3 mt-4 md:mt-0 w-full md:p-5 text-sm md:absolute bottom-0 md:w-10/12">7 views</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border rounded overflow-hidden">
          <img src={img.abi} alt="News item's cover" className="h-full w-full" />
          <div className="bg-white p-5 relative">
            <span className="text-sm">Aug 3 - 2 min</span>
            <label className="text-2xl font-semibold block mt-3 mb-4">What every parent needs to know about Dyslexia</label>
            <p className="">by Rosalin Abigail Kyere-Nartey Thank you for stopping by to read this, what I am sharing wi</p>
            <div className="border-t p-3 mt-4 md:mt-0 w-full md:p-5 text-sm md:absolute bottom-0 md:w-10/12">15 views</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border rounded overflow-hidden">
          <img src={img.diversity} alt="News item's cover" className="h-full w-full" />
          <div className="bg-white p-5 relative">
            <span className="text-sm">Aug 3 - 2 min</span>
            <label className="text-2xl font-semibold block mt-3 mb-4">Neuro-Diversity in Ghana</label>
            <p className="">Neuro-development disorders in Ghana face many obstacles in the fight for awareness and</p>
            <div className="border-t p-3 mt-4 md:mt-0 w-full md:p-5 text-sm md:absolute bottom-0 md:w-10/12">29 views</div>
          </div>
        </div>
      </div>

      <Btn 
        content="All posts"
        className="bg-teal-500 hover:bg-teal-600 mx-auto block mt-10 h-16 w-72"
      />
    </div>
  )
}