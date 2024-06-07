"use client";

import React from "react";
import QA from "./QA";
import SectionTitle from "../Common/SectionTitle";

const dataQA = [
    {
        question: "What services does Sayvai offer?",
        answer: "Sayvai offers a range of AI services tailored to meet the unique needs and objectives of businesses across various industries. Our services include AI consulting, solution development, implementation, training, and ongoing support for voice bot and chatbot solutions, as well as customized AI solutions to ensure the success of our clients' AI initiatives. We also provide education services to help businesses understand and leverage the power of AI in their operations.",
    },
    {
        question: "How can Sayvai's AI solutions benefit my business?",
        answer: "Sayvai's AI solutions, including voice bot and chatbot technologies, are designed to help businesses improve efficiency, enhance customer experiences, and drive innovation. Whether it's automating repetitive tasks, analysing data to gain insights, or providing personalized recommendations, our AI solutions empower businesses to stay competitive in today's digital landscape. Additionally, our customized AI solutions are tailored to fit the specific requirements and goals of each business, delivering tangible results and value. Our education services also empower businesses to understand and harness the potential of AI in their operations, fostering a culture of innovation and growth.",
    },
    {
        question: "Is Sayvai's AI technology customizable to fit my business needs?",
        answer: "Yes, Sayvai's AI technology, including voice bot and chatbot solutions, is highly customizable and can be tailored to fit the specific requirements and goals of your business. Our team works closely with clients to understand their unique challenges and objectives, developing customized solutions that deliver tangible results and value. Our education services also provide businesses with the knowledge and tools they need to leverage AI effectively in their operations, ensuring that our solutions align with their specific needs and goals.",
    },
    {
        question: "How does Sayvai ensure data privacy and security?",
        answer: "At Sayvai, we take data privacy and security seriously. We adhere to industry best practices and compliance standards to safeguard sensitive information and protect the privacy of our clients and their customers. Our AI solutions, including voice bot and chatbot technologies, are built with robust security features and encryption protocols to ensure that data remains safe and secure at all times. Our education services also emphasize the importance of data privacy and security, providing businesses with the knowledge and tools they need to protect their data and comply with regulatory requirements.",
    },
    {
        question: "What industries does Sayvai serve?",
        answer: "Sayvai serves businesses across a wide range of industries, including retail, healthcare, hospitality, finance, manufacturing, real estate, automotive, telecommunications, e-commerce, and education. Our AI solutions, including voice bot and chatbot technologies, are versatile and scalable, making them suitable for businesses of all sizes and sectors. Our education services also cater to businesses in these industries, providing them with the knowledge and tools they need to leverage AI effectively in their operations.",
    },
    {
        question: ". How can I get started with Sayvai's AI solutions?",
        answer: "Getting started with Sayvai's AI solutions, including voice bot and chatbot technologies, is easy! Simply contact our team to schedule a consultation and discuss your business needs and objectives. We'll work with you to develop a customized plan that aligns with your goals and budget, and our experts will guide you through the implementation process to ensure a seamless experience. Our education services also provide businesses with the knowledge and resources they need to understand and leverage AI effectively in their operations, empowering them to drive innovation and growth.",
    },
    {
        question: "Does Sayvai offer subscription-based pricing or one-time fees?",
        answer: "Sayvai provides both subscription-based and one-time fee options to accommodate different business preferences and budgetary considerations. Our subscription-based pricing typically includes ongoing support, updates, and maintenance, while one-time fees may apply for specific customization or implementation services. We can discuss the best pricing model for your business during the consultation process. Our education services also offer flexible pricing options to meet the needs and budgetary constraints of businesses, ensuring that they have access to the knowledge and resources they need to leverage AI effectively in their operations.",
    },
];

const Faq: React.FC = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle=""
          paragraph=""
          center
        />

        
      </div>
            {dataQA.map((data, i) => (
                <div key={i}>
                    <QA question={data.question} answer={data.answer} />
                </div>
            ))}
        </div>
    );
};

export default Faq;