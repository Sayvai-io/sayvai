import Image from "next/image";

const coreValues = [
    {
      title: "Empathy",
      content: "We prioritize understanding and compassion in all our interactions, whether with colleagues, clients, or stakeholders. We seek to empathize with the needs, challenges, and aspirations of others, recognizing that empathy is the cornerstone of meaningful relationships and impactful solutions."
    },
    {
      title: "Innovation",
      content: "We embrace curiosity, creativity, and bold thinking, challenging the status quo and pushing the boundaries of what's possible. We foster an environment where new ideas are welcomed, experimentation is encouraged, and failure is seen as an opportunity for growth and learning."
    },
    {
      title: "Integrity",
      content: "We uphold the highest standards of honesty, transparency, and ethical behavior in everything we do. We are committed to integrity in our relationships, our work, and our decision-making processes, earning the trust and respect of those we serve."
    },
    {
      title: "Collaboration",
      content: "We believe in the power of teamwork and collaboration, recognizing that diverse perspectives and collective effort lead to better outcomes. We value open communication, active listening, and constructive feedback, working together to achieve shared goals and support each other's success."
    },
    {
      title: "Excellence",
      content: "We are driven by a relentless pursuit of excellence in everything we undertake. We set high standards for ourselves and hold ourselves accountable for delivering exceptional results that exceed expectations. We are committed to continuous improvement, striving to learn, grow, and evolve with every challenge we face."
    },
    {
      title: "Empowerment",
      content: "We believe in empowering individuals to take ownership of their work, make meaningful contributions, and drive positive change. We provide opportunities for personal and professional development, nurturing talent and leadership at every level of the organization. We trust and empower our team members to make decisions, take risks, and innovate with confidence."
    }
  ];
  
  const Corevalue = () => {
    return (
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4">
              <div className="wow fadeInUp max-w-[940px] mx-auto" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    CORE VALUES
                  </h3>
                  {coreValues.map((value, index) => (
                    <p key={index} className="mt-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      <span className="font-bold text-black dark:text-white">{value.title}: </span>
                      {value.content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default Corevalue;
