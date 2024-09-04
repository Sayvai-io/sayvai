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

const defaultTestimoni = [
  {
    name: "Finance and Accounts",
    description:
      "We offer tailored financial and accounting services to help businesses maintain their financial health and streamline their accounting operations.",
    image: "/images/Testimoni/Finance and Accounts.jpg",
    link: "/Finance&account",
  },
  {
    name: "Fashion Industry",
    description:
      "Our solutions for the fashion industry enable brands to stay ahead of trends, manage production, and enhance their customer engagement.",
    image: "/images/Testimoni/Fashion Industry.jpg",
    link: "/Fashion_Industry",
  },
  {
    name: "Legal and Compliance",
    description:
      "We provide expert legal and compliance services, helping businesses navigate regulatory challenges and mitigate risks.",
    image: "/images/Testimoni/Legal and Compliance.jpg",
    link: "/Leagal&Compliance",
  },
  {
    name: "Sales and Support",
    description:
      "Our sales and support services enhance customer satisfaction and drive revenue growth by optimizing the sales process.",
    image: "/images/Testimoni/Sales and Support.jpg",
    link: "/Sales&Support",
  },
];

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
      <Testimoni listTestimoni={defaultTestimoni} />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Faq />
      {/* <CategoryCarousel /> */}
      <Contact />
    </>
  );
}
