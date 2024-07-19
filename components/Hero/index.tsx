"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="-mx-4 flex flex-wrap"
          >
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-[#45988e] dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Customized AI solutions for your Businesses!
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Sayvai creates customized AI solutions specialized to your business needs. Our approach
                  ensures smooth integration and impactful results, enabling your
                  business to succeed in a competitive landscape.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/signin"
                    className="rounded-full bg-[#45988e] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#45988e]/80"
                  >
                    Get started
                  </Link>
                  <Link
                    href="/#"
                    className="inline-block rounded-full bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
