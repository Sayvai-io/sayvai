"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimoniItem {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface TestimoniProps {
  listTestimoni: TestimoniItem[];
}

const Testimoni: React.FC<TestimoniProps> = ({ listTestimoni }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    customPaging: function (i: number) {
      return (
        <a className="">
          <span className="mx-2 rounded-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  return (
    <div className="px-4 md:px-10 lg:px-20 text-justify">
      <div className="container">
        <SectionTitle
          title="INDUSTRIES WE SERVE"
          subtitle=""
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
      </div>

      <div className="relative">
        <Slider {...settings} className="flex items-stretch justify-items-stretch">
          {listTestimoni.map((item, index) => (
            <div
              className={`px-2 flex items-stretch space-x-2 cursor-pointer ${
                index === currentSlide ? "border-[#45988e]" : ""
              }`}
              key={index}
              onClick={() => setCurrentSlide(index)}
            >
              <div
                className={`shadow-lg dark:shadow-none dark:bg-gray-800 transition-all rounded-lg p-2 flex flex-col hover:border hover:border-[#45988e] min-w-[200px] ${
                  index === currentSlide ? "border-[#45988e]" : ""
                }`}
              >
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
      </div>

      
      <div className="mt-10 flex flex-col md:flex-row items-center">
      <Slider {...settings} className="flex items-stretch justify-items-stretch">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={listTestimoni[currentSlide]?.image}
            height={400}
            width={400}
            alt={listTestimoni[currentSlide]?.name}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold">
            {listTestimoni[currentSlide]?.name}
          </h3>
          <p className="text-lg mt-4">
            {listTestimoni[currentSlide]?.description}
          </p>
          <a
            href={listTestimoni[currentSlide]?.link}
            className="mt-4 inline-block px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Explore
          </a>
        </div>
        </Slider>
      </div>
      
    </div>
  );
};

export default Testimoni;





















"use client";

import React, { useState } from "react";
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

  const handleCarouselChange = (current: number) => {
    setSelectedIndex(current);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      handleCarouselChange(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 text-justify">
      <div className="container">
        <SectionTitle
          title="INDUSTRIES WE SERVE"
          subtitle=""
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
      </div>

      <div className="relative mx-auto">
        <Slider {...settings}>
          {listTestimoni.map((item, index) => (
            <div
              className="cursor-pointer flex flex-col items-center dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform duration-300 border-transparent"
              key={index}
              onClick={() => handleCarouselChange(index)}
            >
              <div className="w-full flex items-center justify-center mb-4">
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  alt={item.name}
                  className="rounded-full"
                />
              </div>
              <h4 className="text-lg text-black-600 dark:text-white capitalize">
                {item.name}
              </h4>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center transition-all duration-500 transform">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={listTestimoni[selectedIndex]?.image}
            height={400}
            width={400}
            alt={listTestimoni[selectedIndex]?.name}
            className="rounded-lg transition-all duration-500 transform"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold transition-all duration-500 transform">
            {listTestimoni[selectedIndex]?.name}
          </h3>
          <p className="text-lg mt-4 transition-all duration-500 transform">
            {listTestimoni[selectedIndex]?.description}
          </p>
          <a
            href={listTestimoni[selectedIndex]?.link}
            className="mt-4 inline-block px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;