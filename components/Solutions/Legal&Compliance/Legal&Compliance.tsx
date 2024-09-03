import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "sayvai",
  // description: "",
  // other metadata
};

const LegalCompliance = () => {
  return (
    <>
            <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-8 mt-12">
              Legal And Compliance
            </h2>
          </div>


          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  1.Contract Automation & Intelligence
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                     Manage contract variation
                  </li>
                  <li>
                    Proactive contract management
                  </li>
                  <li>
                    Mitigate risks and enhance compliance
                  </li>
                  <li>
                    Improve contract visibility
                  </li>
                </ul>
               <div> 
                <h2 className="text-2xl font-bold mb-6 mt-4">
                Powerful Contract Automation Platform: 

            </h2>
            <h5 className="mb-4 mt-4">Leverage AI-powered data extraction from over 50,000 contracts for classification, aggregation, and automated insights to ensure compliant contracts and efficient closures. 
            </h5> 
             
            <ul className="list-disc list-inside mb-4">
                  <li>
                  Capture - For automated abstraction 

                  </li>
                  <li>
                  Search - For high-precision contextual results 
                  </li>
                  <li>
                  Analyze - To make informed decisions
                  </li>
                  <li>
                  Automate - To maximize efficiency
                  </li>
                </ul></div>
                
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
                    Enable proactive cost reduction and identify revenue opportunities.
                    </li>
                    <li>
                    Accurately manage various complex contracts from multiple sources.
                    </li>
                    <li>
                    User-friendly, no-code interface for non-tech users with secure (2FA) role-based access.
                    </li>
                    <li>
                    Eliminate workflow delays, significantly speeding up processes.
                    </li>
                    <li>
                    Powerful contextual search enabling quick comparisons and bulk modifications .

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
                  2.eDiscovery Process Automation
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  Efficient case extraction .

                  </li>
                  <li>
                  Accelerated case analysis 
                  </li>
                  <li>
                  Empower legal professionals 
                    
                  </li>
                  <li>
                  Risk detection and improved resolutions 

                  </li>
                </ul>
                <div>
                <h3 className="text-2xl font-semibold mb-4">
                Powerful eDiscovery Automation Platform: 
                </h3>
                <h5 className="mb-4 mt-4">Utilize AI-powered data extraction to process and analyze thousands of case documents acrossvarious formats, integrating deep insights to manage risks and make informed decisions. </h5>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  Capture - For automated extraction 


                  </li>
                  <li>
                  Search - For seamless search 
                  </li>
                  <li>
                  Empower legal professionals 
                    
                  </li>
                  <li>
                  Analyze - To make informed decisions 

                  </li>
                  <li>
                  Automate - To maximize processing efficiency

                  </li>
                </ul>
                </div>
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
                  Augment legal professionals by reducing manual tasks and automating end-to-endprocesses, cutting costs, and simplifying case analysis.
                  </li>
                  <li>
                  Efficiently handle complex cases from multiple sources with high accuracy.                  </li>
                  <li>
                  Quick, relevant search results based on semantic relevance rather than just keywordmatches.
                  </li>
                  <li>
                  Scale Botminds AI for case analysis with no-code point & click activities.                  </li>
                  <li>
                  Achieve up to 100% accuracy with prebuilt taxonomies, human-in-the-loop automation, and self-learning.
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
                3.Contract Lifecycle Management
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  Automate contract creation 
                  </li>
                  <li>
                   Simplify negotiations </li>
                  <li>
                  Ensure compliance and governance  </li>
                  <li>Streamline renewals and terminations 
                  </li>
                </ul> <div> 
                <h2 className="text-2xl font-bold mb-6 mt-4">
                Powerful Contract Lifecycle Platform :

            </h2>
            <h5 className="mb-4 mt-4">AI-powered data extraction from over 50,000 contracts for classification, aggregation, andautomated insights to ensure compliant contracts and efficient closures. </h5> 
             
             </div>
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
                  Seamless integration with existing contract systems .
                  </li>
                  <li>
                  Real-time contract performance monitoring .
                  </li>
                  <li>
                  Automated alerts for key contract milestones.
                  </li>
                  <li>
                  Comprehensive audit trail for enhanced governance.
                  </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-8 md:pb-20 lg:pb-4 text-justify">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                4.Patent Research Process Automation
                </h3>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  Accelerate patent filing.
                  </li>
                  <li>
                  Empower patent professionals                   </li>
                  <li>
                  Intelligent patent monitoring 
                    
                  </li>
                  <li>
                  Reduce patent costs 
                  </li>
                </ul>
                <div>
                <h2 className="text-2xl font-bold mb-4 mt-4">
                Powerful Patent Research Automation Platform: 
            </h2>
                <h5 className="mb-4 mt-4">AI-powered extraction, search, and abstraction of patent information across repositories andtheweb for more efficient patent applications and lifecycle management. </h5>
                <ul className="list-disc list-inside mb-4">
                  <li>
                  Capture - For intelligent data extraction
                  </li>
                  <li>
                  Search - For contextual results 
                  </li>
                  <li>
                  Analyze - To make informed decisions                     
                  </li>
                  <li>
                  Automate - To maximize efficiency 

                  </li>
                   
                </ul>
                </div>
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
                  Automatically extract and analyze data from various patent-related sites in minutes. </li>
                  <li>
                  End-to-end automation from extraction to manual verification on a single platform.
                  </li>
                  <li>
                  Point-and-click configuration, no-code AI with semantic understanding.</li>                 
                   <li>
                  Proactive prevention of manual errors in activities such as identifying, classifying, andextracting details from patents.</li>
                   <li>
                   Minimize manual intervention time in SME training and result prediction .
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

export default LegalCompliance;
