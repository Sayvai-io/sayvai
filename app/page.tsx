import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import CategoryCarousel from "@/components/Carousel/CategoryCarousel";
import Testimoni from "@/components/Carousel/Testimoni";
import ScrollUp from "@/components/Common/ScrollUp";
import Company from "@/components/Company/Company";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sayvai",
  description: "sayvai",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Company />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimoni />
      <Testimonials />
      <Pricing />
      <Blog />
      <Faq />
      
      {/* <CategoryCarousel /> */}
      <Contact />

    </>
  );
}
