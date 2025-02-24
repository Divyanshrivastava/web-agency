import React from 'react'
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className=" bg-white">
    <div className=' p-10 flex flex-col md:flex-row items-center gap-16 md:gap-32 xl:gap-52'>
      {/* Left Side - Text */}
      <div className="md:w-[75%] space-y-6">
        <div className="lg:px-10 flex -space-x-2 overflow-hidden">
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/1.png" alt="Avatar 1" />
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/2.png" alt="Avatar 2" />
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/3.png" alt="Avatar 3" />
        </div>
        <p className="text-gray-600 lg:text-md md:text-md text-sm lg:px-8 max-w-lg">Empower brands by merging expert services, captivating design, enhancing visibility and experience</p>
      </div>
      <h1 className="lg:text-[40px] xl:text-5xl text-3xl font-bold leading-tight">Elevating <span className='text-orange-500'> businesses </span> with innovative and modern web solutions
      </h1>
    </div>
    <div className=" md:mt-0 flex lg:flex-row flex-col lg:gap-28 gap-8 px-14">
        <img src="/we2.jpg" width={500} height={300} className="rounded-3xl lg:w-[40%] w-full object-cover " alt="Workspace" />


           <p className=' text-gray-600 lg:text-lg text-md font-bold mt-3'> We specialize in website development, UI/UX design, and frontend & backend solutions, ensuring seamless functionality and engaging user experiences. Our team is dedicated to creating responsive, fast, and scalable web applications that align with your brand’s identity. Whether it’s a business website, portfolio, or a full-fledged web application, we bring innovation and precision to every project.</p>
      </div>
  </Element>
  )
}

export default About