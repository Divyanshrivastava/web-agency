import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="w-full md:w-auto">
      <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-6xl text-start px-2
       font-semibold max-w-7xl mx-auto lg:text-center  text-white lg:text-black relative z-20 
       bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 
       via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white 
       dark:to-white leading-tight sm:leading-snug md:leading-normal">
        Elevate your brand with <br /> <Cover>Dira&aposs</Cover> Web Services.
      </h1>
    </div>
  );
}
