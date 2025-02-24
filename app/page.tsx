"use client";
import Image from 'next/image'
import { CoverDemo } from "@/components/demos/cover-demo";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import MarqueeComponent from "@/components/demos/marquee";
import About from "@/components/demos/about";
import Services from "@/components/demos/Services";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BentoDemo } from "@/components/demos/whyus";
import Hyperspeed from "@/Backgrounds/Hyperspeed/Hyperspeed";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AnimatedTestimonialsDemo } from "@/components/demos/AnimatedTestimonialsDemo";


export default function Home() {
  return (
    <div className="pverflow-clip inset-0 -z-10 h-screen w-full lg:bg-white bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              className="hover:text-blue-500"
            >
              Projects
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-1">
          <a href="tel:8962548614" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              89625 48614
            </button>
          </a>
          <Link
            href={"/meeting"}
            className=" px-5 py-2 text-lg border-2 rounded-[6px] hover:bg-[#abcbff] border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="pb-0">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-10"> </div>
        <div className="mx-6 md:mx-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="text-center md:text-left md:mt-22">
            <CoverDemo />
            <p className="text-xl text-start lg:text-center px-2 md:text-xl lg:text-2xl my-6 md:my-10  mx-auto text-gray-500">
              Book a call today to discuss your project and receive a customized quote in minutes
            </p>
            <div className="flex flex-row lg:justify-center sm:justify-start px-2 items-center gap-4">
              <Link
                href="/meeting"
                className="py-3 px-8 md:px-4 md:text-sm lg:px-8 hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Book a Call
              </Link>
              <Link
                href={"/showcase"}
                className="bg-white py-3 px-8 md:px-4 lg:px-8 md:text-sm border-2 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Showcase
              </Link>
            </div>
          </div>
          <Image src='/hero1.jpg' className=" hidden sm:block w-full md:w-[350px] lg:w-[550px] h-auto" alt="Hero" />
        </div>

        <div className="lg:mt-14 mt-20">
           <MarqueeComponent />
        </div>
      </main>

      <Element name="about us" className="mt-16">
         <About />
      </Element>

      <Element name='services'>
        <Services />
      </Element>

      <Element name='Whyus' className='mt-16'>
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-center space-x-2">
        Why    <AuroraText> Diras ?</AuroraText>
        </h1>
        <div className="mt-8 p-6">
              <BentoDemo />
        </div>
      </Element>

      <Element name='contact' className="relative mt-16 bg-black w-full min-h-[400px] lg:min-h-[450px] overflow-hidden ">
     <div className="absolute inset-0 ">
      <Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>
</div>
<div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
      Let’s turn your vision into reality.
    </h1>
    <p className="text-gray-300 text-sm md:text-md lg:text-lg mt-6 max-w-2xl">
      Your business deserves a website that not only looks great but also performs exceptionally.  
      Call us now to get started on your journey to digital success!
    </p>

    <Link
                href="/meeting"
                className="py-3 mt-6 px-8 md:px-4 md:text-sm lg:px-8 hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white pointer-events-auto transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              >
                Book a Call
              </Link>
          </div>
      </Element>
      
      <div className="mt-6">
        <AnimatedTestimonialsDemo />
      </div>

      <footer className='rounded-xl bg-black text-white'>
  <div className='container mx-auto flex flex-col md:flex-row justify-between p-16'>
    {/* Left Section */}
    <div className='flex flex-col gap-4'>
      <Image src='/diraslogo.png' alt='Diras Logo' className='w-12 h-12' />
      <h1 className='text-2xl font-medium max-w-lg'>
        We growing up your business with personal AI manager.
      </h1>
      <p className='text-sm text-gray-400'>© Diras, 2025</p>
    </div>

    {/* Middle Section - Company & Resources */}
    <div className='flex flex-col md:flex-row gap-8'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-medium'>Company</h2>
        <ul className='text-gray-300 space-y-2'>
          <li><a href='/blog' className='hover:text-white transition'>Blog</a></li>
          <li><a href='/careers' className='hover:text-white transition'>Showcase</a></li>
          <li><a href='/pricing' className='hover:text-white transition'>Pricing</a></li>
          <li><a href='/contact' className='hover:text-white transition'>Contact</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Section - Social Media Icons */}
  <div className='border border-gray-500'/>
  <div className='container mx-auto flex flex-row justify-between mt-4 py-6'>
    <h1>© 2025 Diras. All rights reserved.</h1>

    <div className="gap-4">
    <a href='#' className='hover:text-gray-400 transition'><i className='fab fa-facebook text-xl'></i></a>
    <a href='#' className='hover:text-gray-400 transition'><i className='fab fa-twitter text-xl'></i></a>
    <a href='#' className='hover:text-gray-400 transition'><i className='fab fa-instagram text-xl'></i></a>
    <a href='#' className='hover:text-gray-400 transition'><i className='fab fa-youtube text-xl'></i></a>
    </div>
    
  </div>
</footer>
  </div>
  )
} 