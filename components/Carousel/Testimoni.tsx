"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Finance and Accounts",
      description:
        "We offer tailored financial and accounting services to help businesses maintain their financial health and streamline their accounting operations.",
      image: "/images/Testimoni/Finance and Accounts.jpg",
    },
    {
      name: "Fashion Industry",
      description:
        "Our solutions for the fashion industry enable brands to stay ahead of trends, manage production, and enhance their customer engagement.",
      image: "/images/Testimoni/Fashion Industry.jpg",
    },
    {
      name: "Legal and Compliance",
      description:
        "We provide expert legal and compliance services, helping businesses navigate regulatory challenges and mitigate risks.",
      image: "/images/Testimoni/Legal and Compliance.jpg",
    },
    {
      name: "Sales and Support",
      description:
        "Our sales and support services enhance customer satisfaction and drive revenue growth by optimizing the sales process.",
      image: "/images/Testimoni/Sales and Support.jpg",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [imageSliderRef, setImageSliderRef] = useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nameSliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => {
      setCurrentSlide(index);
      imageSliderRef?.slickGoTo(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imageSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNavigationClick = (index: number) => {
    setCurrentSlide(index);
    sliderRef?.slickGoTo(index);
    imageSliderRef?.slickGoTo(index);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 text-justify pt-16">
      <div className="container">
        <SectionTitle
          title="INDUSTRIES WE SERVE"
          subtitle=""
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
      </div>

      {/* Navigation Bar Slider */}
      <div className="relative mt-10">
        <Slider
          {...nameSliderSettings}
          ref={setSliderRef}
          className="navigation-slider"
        >
          {listTestimoni.map((item, index) => (
            <div
              className="px-2 cursor-pointer"
              key={index}
              onClick={() => handleNavigationClick(index)}
            >
              <div className="shadow-lg dark:shadow-none dark:bg-gray-800 transition-all rounded-lg p-2 flex flex-col hover:border hover:border-[#45988e] min-w-[200px]">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <div className="flex flex-col ml-4 text-left">
                      <p className="text-lg text-black-600 dark:text-white capitalize">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom navigation buttons for Navigation Bar Slider */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-2 z-10">
          <div
            className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white dark:bg-gray-800 border-[#45988e] border hover:bg-[#45988e] dark:hover:bg-[#45988e] hover:text-white dark:hover:text-white transition-all text-[#45988e] cursor-pointer"
            onClick={() => sliderRef?.slickPrev()}
          >
            <Image
              src="/assets/Icon/eva_arrow-back-fill.svg"
              height={20}
              width={20}
              alt="Arrow Back"
            />
          </div>
          <div
            className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white dark:bg-gray-800 border-[#45988e] border hover:bg-[#45988e] dark:hover:bg-[#45988e] hover:text-white dark:hover:text-white transition-all text-[#45988e] cursor-pointer"
            onClick={() => sliderRef?.slickNext()}
          >
            <Image
              src="/assets/Icon/eva_arrow-next-fill.svg"
              height={20}
              width={20}
              alt="Arrow Next"
            />
          </div>
        </div>
      </div>

      {/* Image and Description Slider */}
      <div className="relative mt-10">
        <Slider
          {...imageSliderSettings}
          ref={setImageSliderRef}
          className="image-description-slider"
        >
          {listTestimoni.map((item, index) => (
            <div key={index} className="flex flex-row items-start w-full px-8 py-4">
              {/* Image Div (Left Side) */}
              <div className="w-1/2 flex justify-center">
                <Image
                  src={item.image}
                  height={400}
                  width={400}
                  alt={item.name}
                  className="rounded-lg"
                />
              </div>

              {/* Content Div (Right Side) */}
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-lg mt-4">{item.description}</p>
                <a
                  href="/next-page"
                  className="mt-4 inline-block px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimoni;
