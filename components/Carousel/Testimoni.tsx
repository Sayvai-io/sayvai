"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows";

interface TestimoniItem {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface TestimoniProps {
  listTestimoni: TestimoniItem[];
}

const Testimoni: React.FC<TestimoniProps> = ({
  listTestimoni = [
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
  ],
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const contentSliderRef = useRef<Slider>(null);

  const handleNameClick = (index: number) => {
    setSelectedIndex(index);
    contentSliderRef.current?.slickGoTo(index); // Sync content slider with name slider
  };

  const nameSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      handleNameClick(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const contentSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setSelectedIndex(newIndex); // Sync name slider with content slider
    },
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 text-justify">
      <div className="container">
        <SectionTitle
          title="INDUSTRIES WE SERVE"
          subtitle=""
          paragraph="Explore the diverse industries we serve and discover tailored solutions for your business."
          center
        />
      </div>

      {/* Slider for industry names */}
      <div className="mt-8 mb-4 dark:bg-gray-800">
        <Slider {...nameSliderSettings}>
          {[
            { name: "Finance and Accounts", icon: "/images/industries icon/icon1.png" },
            { name: "Fashion Industry", icon: "/images/industries icon/icon5.png" },
            { name: "Legal and Compliance", icon: "/images/industries icon/icon3.png" },
            { name: "Sales and Support", icon: "/images/industries icon/icon4.png" },
          ].map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer text-lg font-semibold text-center flex items-center justify-center transition-colors duration-300 ${
                selectedIndex === index
                  ? "text-[#16C3A6] dark:text-[#16C3A6]"
                  : "text-gray-800 dark:text-gray-200"
              } hover:text-[#16C3A6] dark:hover:text-[#16C3A6]`}
              onClick={() => handleNameClick(index)}
            >
              <div className="flex justify-center items-center">
                <Image src={item.icon} alt={item.name} width={32} height={32} className="mr-2" />
              </div>
              <div className="w-8 h-5" />
              {item.name}
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider for industry content */}
      <div className="relative mx-auto">
        <Slider {...contentSliderSettings} ref={contentSliderRef}>
          {listTestimoni.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col items-center dark:bg-gray-800 p-4"
            >
              <div className="mt-10 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={item.image}
                    height={400}
                    width={400}
                    alt={item.name}
                    className="rounded-lg transition-all duration-500 transform"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <h3 className="text-2xl font-semibold transition-all duration-500 transform">
                    {item.name}
                  </h3>
                  <p className="text-lg mt-4 transition-all duration-500 transform">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="mt-4 inline-block px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-md hover:bg-[#16C3A6] hover:text-white transition-all duration-300"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimoni;
