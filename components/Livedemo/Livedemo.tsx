"use client"; // Add this line at the top

import { useState } from "react";

const Livedemo = () => {
  // State to track which content to display
  const [activeContent, setActiveContent] = useState("livedemo");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate the form here (optional)
    // Redirect to the specified URL
    window.open("https://voice.sayvai.io/", "_blank");
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 md:pb-20 lg:pb-28 mt-12">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded px-6 py-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  See A Live Demo
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Feel the state-of-the-art Voice Interaction
                </p>

                <div className="border-b border-[#45988e] mb-6">
                  <div className="mb-6 grid grid-cols-2 text-center">
                    <button
                      onClick={() => setActiveContent("livedemo")}
                      className={`shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-tl-sm rounded-tr-sm px-2 py-4 text-base font-medium text-white duration-300 ${activeContent === "livedemo" ? 'bg-[#45dbbf]/90' : 'bg-[#40e1c4]'}`}
                    >
                      Receive A Phone Call
                    </button>
                    <button
                      onClick={() => setActiveContent("webcall")}
                      className={`shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-tl-sm rounded-tr-sm px-9 py-4 text-base font-medium text-white duration-300 ${activeContent === "webcall" ? 'bg-[#45dbbf]/90' : 'bg-[#40e1c4]'}`}
                    >
                      Try on Webcall
                    </button>
                  </div>
                </div>

                {/* Conditionally render content based on activeContent state */}
                {activeContent === "livedemo" ? (
                  <div>
                    <h4 className="mb-4 text-xl font-semibold text-center text-black dark:text-white">
                      Live Demo Content
                    </h4>
                    <p className="text-center text-base font-medium text-body-color mb-8">
                      This is the content for the live demo.
                    </p>
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="mb-4 text-xl font-semibold text-center text-black dark:text-white">
                      Webcall Content
                    </h4>
                    <p className="text-center text-base font-medium text-body-color">
                      This is the content for the web call.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-[#45988e] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#45988e] dark:focus:shadow-none"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="shadow-submit dark:shadow-submit-dark flex items-center justify-center rounded-full bg-[#45988e] px-4 py-4 text-base font-medium text-white duration-300 hover:bg-[#45988e]/90">
                      Get the call
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Livedemo;
