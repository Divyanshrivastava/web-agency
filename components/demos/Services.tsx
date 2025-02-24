import React from 'react'
import { AuroraText } from '../magicui/aurora-text'

const services = [
    {
      title: "Custom Applications",
      description: "Building high-performance, scalable, and secure websites and web apps.",
      icon: <img src='/coding.png' className='w-20 h-20'/>
    },
    {
      title: "Full Stack Development",
      description: "Crafting visually stunning and user-friendly interfaces for seamless experiences.",
      icon: <img src='/stack.png' className='w-20 h-20'/>,
    },
    {
      title: "Landing Page",
      description: "Improving search engine rankings to boost traffic and visibility.",
      icon: <img src='/layout.png' className='w-20 h-20'/>,
    },
    {
      title: "E-Commerce",
      description: "Strategizing online marketing to enhance brand presence and engagement.",
      icon: <img src='/shop.png' className='w-20 h-20'/>
    },
    {
        title: "Portfolio Development",
        description: "Building high-performance, scalable, and secure websites and web apps.",
        icon: <img src='/port.png' className='w-20 h-20'/>
      },
      {
        title: "Web Optimization",
        description: "Strategizing online marketing to enhance brand presence and engagement.",
        icon: <img src='/opti.png' className='w-20 h-20'/>
      },
  ];
  
  

const Services = () => {
  return (
    <div>
        <div className=" mx-6 xl:w-4/5 2xl:w-[68%] md:mx-6 xl:mx-auto mt-16">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-center">
        Our <AuroraText> Expertise</AuroraText>
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-800">
        We provide services that are designed to help your business stand out 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative p-4 rounded-xl shadow-md text-center border border-gray-700 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-blue-500 before:blur-lg"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
)}
export default Services