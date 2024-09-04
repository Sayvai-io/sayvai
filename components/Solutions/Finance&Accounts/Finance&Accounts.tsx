import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "sayvai",
  // description: "",
  // other metadata
};

const Financeaccount = () => {
  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-8 mt-12">
              Finance and Accounts
            </h2>
          </div>

          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  1. Automated Invoice Processing
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    AI streamlines data extraction from incoming invoices, whether received via email or uploaded in various formats, and includes duplicate detection. 
                  </li>
                  <li>
                  This process eliminates manual paper-based invoice handling and data entry, efficiently managing hundreds of invoices as a cohesive document set.
                  </li>
                  <li>
                    Invoices with extensive line items are converted into a structured data format.
                  </li>
                  <li>
                  AI models for table recognition accurately identify and categorize rows and cells, organizing each line item into logical groups.
                  </li>
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/invoice.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/solutions/finace&accounts/invoice.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/invoice-feature.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/solutions/finace&accounts/invoice-feature.png"
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
                      Achieve invoice approvals 5x faster through automated data extraction and an intuitive user interface.
                    </li>
                    <li>
                      Human-in-the-loop (HITL) intervention with confidence scores guarantees 100% accuracy, even with large volumes of invoices.
                    </li>
                    <li>
                      Simplify verification of low-confidence extractions with automatic record generation.
                    </li>
                    <li>
                      Consolidate multiple invoices for the same purchase order (PO) into a single document set.
                    </li>
                    <li>
                      Reduce business costs by eliminating redundant resources such as RPA bots and OCR licenses.
                    </li>
                    <li>
                      Utilize real-time AI-assisted integration to transform complex invoices into ERP-compatible formats.
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
                  2. Lease Abstraction Automation
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Efficiently extract over 1,000 key data points from various scanned lease documents, including terms like Common Area Maintenance (CAMs), assignments, amendments, escalations, clauses, rights, and expense reimbursements. This automation handles multiple templates, document sources, and formats, as well as groups of related lease documents.
                  </li>
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/Lease.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/solutions/finace&accounts/Lease.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/Lease-feature.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/solutions/finace&accounts/Lease-feature.png"
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
                      Enhance the efficiency of lease abstractors and SMEs by automating tasks, cutting costs, and simplifying operations.
                    </li>
                    <li>
                      Facilitate easy navigation across related documents for lease abstractors and teams.
                    </li>
                    <li>
                      Capture and process text, images, tables, signatures, and site maps in real-time, even from scanned documents.
                    </li>
                    <li>
                      Assess entire document packages from a centralized location, with automatic uploads of new documents without human input.
                    </li>
                    <li>
                      Seamlessly export and integrate data with downstream tools, property management systems, or accounting software via APIs.
                    </li>
                    <li>
                      Reduce manual review with advanced interpretation and analysis of extracted data points.
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
                  3. Financial Spreading Automation
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    AI extracts and processes financial data from documents with various reporting standards and languages from multiple sources, such as regulatory sites or company FTPs. It offers a semantic understanding of data points from tables, text, footnotes, and descriptions using pre-trained models and configurable templates, enabling subject matter experts to focus on strategic tasks rather than repetitive data entry.
                  </li>
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/spread.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/solutions/finace&accounts/spread.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/spread-feature.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/solutions/finace&accounts/spread-feature.png"
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
                      Automate the extraction of data from complex financial documents, including footnotes and detailed disclosures.
                    </li>
                    <li>
                      Implement structured templates for consistent data entry and quality control.
                    </li>
                    <li>
                      Handle multi-language financial reports with AI’s multilingual capabilities.
                    </li>
                    <li>
                      Easily integrate with existing financial systems and reporting tools.
                    </li>
                    <li>
                      Improve accuracy and reduce manual errors with advanced AI-driven analysis.
                    </li>
                    <li>
                      Streamline compliance and regulatory reporting processes with automated data handling.
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
                  4. Expense Management
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Utilize AI to streamline the expense management process, from receipt capture to categorization and approval workflows. The solution processes receipts from various formats and sources, including email attachments and mobile uploads, ensuring accurate categorization of expenses and easy integration with accounting systems.
                  </li>
                </ul>
              </div>

              <div className="w-full px-8 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/solutions/finace&accounts/Expence.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:ml-0"
                  />
                  <Image
                    src="/images/solutions/finace&accounts/Expence.png"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" -mx-4 flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-6 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/solutions/finace&accounts/Expence-feature.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/solutions/finace&accounts/Expence-feature.png"
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
                      Simplify expense tracking with automated receipt capture and categorization.
                    </li>
                    <li>
                      Streamline approval workflows and integrate with existing financial systems.
                    </li>
                    <li>
                      Reduce manual data entry and errors through AI-driven processing.
                    </li>
                    <li>
                      Enhance visibility and reporting of company expenses with real-time analytics.
                    </li>
                    <li>
                      Ensure compliance with expense policies and streamline audits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------------- */}

        </div>
      </section>
    </>
  );
};

export default Financeaccount;
