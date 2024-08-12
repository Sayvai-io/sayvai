"use client";
import Image from "next/image";
import Button from '@mui/material/Button';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
    id="home"
    className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-36 xl:pt-48 xl:pb-32  "
    >

      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 lg:px-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mb-8 lg:mb-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="mb-4 text-3xl font-bold leading-tight text-[#45988e] dark:text-white sm:text-4xl lg:text-5xl xl:text-5xl">
              AI in Your Business!
            </h1>
            <p className="dark:text-body-color-dark mb-6 text-base leading-relaxed text-body-color sm:text-lg lg:text-xl xl:text-xl">
              Sayvai creates <span style={{ color: '#16C3A6' }}>customized AI solutions</span> specialized to your business needs. Our approach ensures smooth integration and impactful results, enabling your business to succeed in a competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button
                href="/signin"
                variant="contained"
                disableElevation
                className="rounded-full bg-[#16C3A6] hover:bg-[#16C3A6] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Get started
              </Button>
              <Button
                href="/#"
                variant="contained"
                disableElevation
                className="rounded-full bg-black hover:bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out transform hover:scale-105 active:scale-95 dark:bg-black"
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center">
          <Image
          src="/images/home/home5.png"
          alt="AI Solutions Image"
          width={600}   
          height={600} 
          className="object-cover max-w-full h-auto" 
          style={{ marginTop: '-6rem' }}  
        />
      </div>


      </div>
    </section>
  );
};

export default Hero;
