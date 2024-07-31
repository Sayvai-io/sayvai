"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left Section */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-[800px]"
            >
              <div className="wow fadeInUp text-center md:text-left" data-wow-delay=".2s">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-[#45988e] dark:text-white sm:text-7xl sm:leading-tight md:text-6xl md:leading-tight ">
                  AI in Your Business!
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-1xl ">
                  Sayvai creates <span style={{ color: '#16C3A6' }}>customized AI solutions</span> specialized to your business needs. Our approach ensures smooth integration and impactful results, enabling your business to succeed in a competitive landscape.
                </p>

                

              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-center  ">
          <Image
            src="/images/home/home5.jpg"
            alt=""
            width={380}  
            height={380}  
           />

          </div>


        </div>
      </section>
    </>
  );
};

export default Hero;
 