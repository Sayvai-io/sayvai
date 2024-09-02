import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "sayvai",
  // description: "",
  // other metadata
};

const SalesSupport = () => {
  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-8 mt-12">
              Sales And Support
            </h2>
          </div>


          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  1. Trends Forecasting and Buying Application
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    AI streamlines data extraction from incoming invoices,
                    whether received via email or uploaded in various formats,
                    including duplicate detection.
                  </li>
                  <li>
                    Eliminates manual paper-based invoice handling and data
                    entry, efficiently managing hundreds of invoices as a
                    cohesive document set.
                  </li>
                  <li>
                    Converts invoices with extensive line items into a
                    structured data format.
                  </li>
                  <li>
                    AI models for table recognition accurately identify and
                    categorize rows and cells, organizing each line item into
                    logical groups.
                  </li>
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-8 sm:px-6 md:px-8 lg:px-0 lg:w-1/2">
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                    <li>
                      Performs in-depth fashion data analysis and produces
                      detailed trend reports.
                    </li>
                    <li>
                      Detects potential fashion trends using predefined criteria
                      and analytical rules.
                    </li>
                    <li>
                      Forecasts future fashion movements by processing both
                      historical and real-time data on market trends.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------------- */}

          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  2. Design & Product Development Application
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                   AI technology is increasingly integrated into the fashion design and development process.
                  </li>
                  <li>
                   It provides design recommendations, optimizes patterns to maximize fabric efficiency, and creates virtual prototypes of clothing items.
                  </li>
                  <li>
                    This allows designers to explore various fabrics,
                    styles, and colors, visualize the final product, and streamline the design process, potentially
                    reducing the number of revisions needed.
                  </li>
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-8 sm:px-6 md:px-8 lg:px-0 lg:w-1/2">
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  <li>
                    Optimizes patterns to minimize fabric waste, contributing to more sustainable
                    production practices.
                  </li>
                  <li>
                    Enhances material use, which helps lower production costs.
                  </li>
                  <li>
                    Develops virtual models of clothing items to preview designs and assess fits before
                    physical production.
                  </li>
                  <li>
                    Enables real-time adjustments and provides instant feedback on design modifications.
                  </li>
                  <li>
                    Generates a range of design ideas based on trends, designer preferences, and historical
                    data.
                  </li>
                  <li>
                    Offers tailored suggestions that match brand aesthetics and target audience
                    preferences.
                  </li>
                  <li>
                    Supports experimentation with various fabric, style, and color combinations to find
                    the optimal match.
                  </li>
                  <li>
                    Analyzes current trends to recommend popular fabric types, styles, and colors.
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------------- */}
           
          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                3. Merchandising and Analysis application
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  Effective merchandising is crucial for optimizing sales and enhancing customer satisfaction.
                  AI aids this process by improving inventory management and assortment planning.
                  </li>
                  <li>
                  AI systems analyze comprehensive data, including sales figures, historical trends, and customer
                  preferences, to determine the best product mix, quantities, and store placements.
                  </li>
                  <li>
                  This datadriven
                  strategy helps minimize excess inventory, reduce stockouts, and ultimately improve
                  profitability for fashion businesses.
                  </li>
                  
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/about/about-image.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-body-color/[.15] -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-2.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-8 sm:px-6 md:px-8 lg:px-0 lg:w-1/2">
              <div className="wow fadeInUp max-w-full lg:max-w-[570px]" data-wow-delay=".2s">
                <div className="mb-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Features
                  </h3>
                  <ul className="list-disc list-inside mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  <li>
                    Gathers and evaluates data from multiple sources to provide a complete view of
                    inventory.
                  </li>
                  <li>
                    Uses trend analysis and historical data to forecast demand, ensuring timely production
                    of in-demand items and preventing overstocking.
                  </li>
                  <li>
                    Delivers real-time insights into stock levels and product performance to enable
                    informed decision-making.
                  </li>
                  <li>
                    Segments customers based on predefined criteria through data analysis.
                  </li>
                  <li>
                    Identifies potential opportunities for cross-selling and upselling based on customer
                    segments.
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default SalesSupport;
