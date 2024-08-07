import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";

import Testimoni from "@/components/Carousel/Testimoni";
import ScrollUp from "@/components/Common/ScrollUp";

import Company from "@/components/Company/Company";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Livedemo from "@/components/Livedemo/Livedemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sayvai",
  description: "AI solutions",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Livedemo />
      {/* <Company /> */}
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimoni />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Faq />
      
      {/* <CategoryCarousel /> */}
      <Contact />
      

    </>
  );
}
