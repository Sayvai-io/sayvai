"use client"; // Add this directive at the top

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Retail",
      points: [
        "Streamline operations and enhance customer experiences with AI-driven inventory management and personalized product recommendations.",
        "Revolutionize customer service with AI-powered chatbots capable of handling inquiries, processing orders, and providing real-time assistance.",
        "Optimize sales strategies and forecast demand accurately with AI analytics, empowering retailers to make data-driven decisions.",
        "Elevate loyalty programs by leveraging AI algorithms to analyze customer behavior and tailor rewards for maximum engagement and retention."
      ],
     
    },
    {
      name: "Healthcare",   
      points: [
        "Improve patient satisfaction and streamline administrative tasks with AI-powered virtual assistants handling appointment scheduling and inquiries.",
        "Enhance diagnostics and treatment planning with AI algorithms analyzing medical imaging data for faster and more accurate diagnoses.",
        "Transform patient care with AI-driven telehealth solutions, enabling remote consultations, monitoring, and personalized health recommendations.",
        "Boost operational efficiency and compliance with AI-powered systems managing electronic health records, billing, and regulatory requirements."
      ],
     
    },
    {
      name: "Hospitality",
      points: [
        "Elevate guest experiences with AI chatbots providing personalized recommendations, concierge services, and instant support for inquiries and requests.",
        "Optimize hotel operations with AI-powered systems managing reservations, room assignments, and staff scheduling to ensure seamless guest experiences.",
        "Increase revenue and guest satisfaction with AI-driven pricing optimization strategies based on real-time demand and market trends.",
        "Enhance safety and security with AI surveillance systems monitoring facilities for potential risks and ensuring the well-being of guests and staff."
      ],
    },
    {
      name: "Finance",
      points: [
        "Strengthen fraud detection and risk management with AI algorithms analyzing transaction data in real-time to identify suspicious activities.",
        "Enhance customer experiences with AI-powered chatbots handling inquiries, account management, and personalized financial advice.",
        "Improve investment decisions and portfolio management with AI analytics providing insights into market trends, risk factors, and investment opportunities.",
        "Optimize compliance processes and regulatory reporting with AI systems automating data collection, analysis, and documentation to ensure accuracy and efficiency."

      ],
     
    },
    {
      name: "Manufacturing",
      points: [
        "Increase operational efficiency and reduce downtime with AI-driven predictive maintenance solutions, preventing equipment failures before they occur.",
        "Optimize supply chain management with AI algorithms analyzing data to forecast demand, optimize inventory levels, and minimize costs.",
       	"Improve product quality and reduce defects with AI-powered inspection systems capable of detecting anomalies and ensuring compliance with quality standards.",
        "Enhance workforce productivity and safety with AI-enabled robots automating repetitive tasks and assisting workers in hazardous environments."
      
      ],
     
    },
    {
      name: "Real Estate",
      points: [
        "Streamline property search and enhance customer experiences with AI-driven virtual assistants providing personalized recommendations and virtual property tours.",
	      "Boost lead generation and conversion rates with AI algorithms analyzing customer data to identify potential buyers and tailor marketing campaigns.",
      	"Expedite rental and sales processes with AI-powered chatbots handling inquiries, scheduling viewings, and assisting with lease agreements.",
	      "Improve property management and maintenance with AI systems monitoring facilities, predicting maintenance needs, and coordinating repairs and maintenance tasks."

      ],
     
    },
    {
      name: "Automotive",
      points: [
         "Enhance vehicle performance and reliability with AI-powered diagnostics systems analyzing sensor data to detect and address maintenance issues proactively.",
	      "Improve driver safety and efficiency with AI-enabled autonomous driving technologies capable of navigating traffic and avoiding accidents.",
	      "customer experiences and brand loyalty with AI-powered virtual assistants providing personalized recommendations and vehicle maintenance reminders.",
	      "Optimize manufacturing processes and supply chain management with AI analytics predicting demand, optimizing production schedules, and reducing costs."

      ],
     
    },
    {
      name: "Telecommunications",
      points: [
        "Improve customer service and support with AI-powered chatbots handling inquiries, troubleshooting technical issues, and providing real-time assistance.",
        "Enhance network reliability and performance with AI algorithms analyzing data to identify potential bottlenecks and optimize resource allocation.",
        "Increase customer engagement and loyalty with AI-driven personalized marketing campaigns tailored to individual preferences and behaviours.",
        "Optimize network planning and infrastructure management with AI analytics predicting future demand and recommending infrastructure upgrades and expansions."
      
      ],
     
    },
    {
      name: "E-commerce",
      points: [
        "Boost sales and conversion rates with AI-powered product recommendation engines analysing customer data to suggest personalized products and offers.",
        "Enhance customer experiences and satisfaction with AI chatbots providing instant support for inquiries, order tracking, and returns processing.",
        "Improve inventory management and fulfilment processes with AI systems forecasting demand, optimizing stock levels, and streamlining order processing.",
        "Increase customer retention and loyalty with AI-driven loyalty programs offering personalized rewards and incentives based on purchase history and preferences."
      
      ],
     
    },
    {
      name: "Education",
      points: [
        "Personalize learning experiences and improve student outcomes with our AI-driven educational platforms, adapting content and pacing to each student's unique needs and learning style.",
        "Enhance teacher effectiveness and productivity with AI-powered tools that automate administrative tasks, provide actionable insights, and support data-driven instruction.",
        "Foster student engagement and collaboration with AI-enabled virtual classrooms, facilitating interactive lessons, discussions, and group projects in real-time.",
        "Empower schools and districts with AI analytics that identify trends, predict student performance, and inform strategic decision-making to drive continuous improvement."
        
      ],
     
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i: number) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="shadow-lg dark:shadow-none dark:bg-gray-800 transition-all rounded-lg p-6 md:p-8 flex flex-col hover:border hover:border-[#45988e]">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 dark:text-white capitalize">
                      {listTestimonis.name}
                    </p>
                    
                    <ul className="list-disc ml-5 mt-2 text-black-600 dark:text-gray-300">
                      {listTestimonis.points.map((point, idx) => (
                        <li key={idx} className="text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <p className="mt-5 text-left text-black-600 dark:text-white">“{listTestimonis.testimoni}”.</p> */}
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end mt-10 md:mt-14">
        <div className="flex flex-none justify-between w-auto">
          <div
            className="mx-2 md:mx-4 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-white dark:bg-gray-800 border-[#45988e] border hover:bg-[#45988e] dark:hover:bg-[#45988e] hover:text-white dark:hover:text-white transition-all text-[#45988e] cursor-pointer"
            onClick={() => sliderRef?.slickPrev()}
          >
            <Image
              src="/assets/Icon/eva_arrow-back-fill.svg"
              height={24}
              width={24}
              alt="Arrow Back"
            />
          </div>
          <div
            className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-white dark:bg-gray-800 border-[#45988e] border hover:bg-[#45988e] dark:hover:bg-[#45988e] hover:text-white dark:hover:text-white transition-all text-[#45988e] cursor-pointer"
            onClick={() => sliderRef?.slickNext()}
          >
            <Image
              src="/assets/Icon/eva_arrow-next-fill.svg"
              height={24}
              width={24}
              alt="Arrow Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;