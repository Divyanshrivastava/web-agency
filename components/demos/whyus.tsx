import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, RefreshCcw, Share2Icon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-demo";
import { AnimatedListDemo } from "./animated-list-demo";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { NumberTicker } from "../magicui/number-ticker";
import { CardDemo } from "./skeleton";
import { BoxReveal } from "../magicui/box-reveal";
import { LampContainer } from "../ui/lamp";

import { ConfettiDemo } from "./Confetti";
import { motion } from "framer-motion";





const features = [
  {
    Icon: FileTextIcon,
    name: "Dynamic & Interactive UI Elements",
    description: "Advanced UI components for smooth animations, dynamic interactions, and a seamless user experience.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute w-full border-none transition-all duration-300 ease-out  group-hover:scale-110">
         <CardDemo/>
      </div>
      
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: RefreshCcw,
    name: "Performance & Optimization",
    description: " Lightning-fast, smooth, and optimized for the best user experience.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col items-center text-center justify-center duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 ">
       <div className="flex items-center">
        <NumberTicker value={97} className="text-8xl font-medium tracking-tighter text-black dark:text-white" />
        <span className="text-7xl font-medium text-black dark:text-white">%</span>
      </div>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
          A high PageSpeed Score ensures lightning-fast load times, improving SEO, user experience, and conversion rates.
        </p>
      </div>
    )
  },
  {
    Icon: Share2Icon,
    name: "API Integrations",
    description: "We integrate APIs to fetch real-time data, automate workflows, and connect third-party services effortlessly",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "On-Time Delivery, Every Time",
    description: "We follow a structured workflow, ensuring projects are delivered on schedule without compromising quality.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Scalability & Maintenance",
    description: "We offer maintenance and scalability for all websites.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[2.5rem] font-semibold whitespace-nowrap">
          Built to Scale<span className="text-[#5046e6] ">.</span>
        </p>
      </BoxReveal><BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-4">
            <p className="leading-relaxed">
              -&gt; Modular design and optimized code enable seamless updates.<br />
              -&gt; Regular updates and security patches
            </p>
          </div>
        </BoxReveal></div>
      
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="">
        <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-8 bg-gradient-to-br from-neutral-300 to-neutral-500 text-gray-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        24/7 <br /> Support
      </motion.h1>
      <motion.p initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className="mt-8 text-sm text-gray-300 tracking-wide">We offer 24/7 support for all our clients. Call us for more information.</motion.p>
    </LampContainer>
      </div>
      
    ),
  },
  {
    Icon: RefreshCcw,
    name: "Affordable Pricing",
    description: "We offer budget-friendly solutions without compromising on quality.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col items-center text-center justify-center duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 ">
         <ConfettiDemo />
      </div>
    )
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
