import React from "react";
import AboutImage from "../../assets/images/about.svg";

const About = () => {
  return (
    <div id="about" className="relative -z-10 mb-16">
      <div className="lg:grid lg:grid-cols-2 gap-6">
        <div>
          <img className="flex-none object-cover" src={AboutImage} alt="" />
        </div>

        <div className="px-4 py-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xs:text-center xs:py-2 text-[#6C009F]">
            About Us
          </h1>
          <p className="mt-6 text-[1.2em] xs:text-center leading-8 text-[#515151] xs:mx-2">
            Iqunic is your ultimate destination for finding a career that aligns
            with your passions and aspirations. Our team of expert career
            counselors offers personalized guidance and support to help you
            explore your interests, skills, and values. We believe everyone has
            the potential to achieve their career goals, and we use cutting-edge
            techniques and assessments to help you make informed decisions about
            your future. We pride ourselves on our honesty, integrity, and
            transparency, providing unbiased guidance tailored to your
            individual needs. Trust us to stay up-to-date with the latest trends
            and best practices in career counseling as you discover your true
            calling.
          </p>
          <div className="xs:mt-4  xs:flex-col xs:flex xs:items-center xs:justify-center">
            <button className="cursor-pointer rounded-[20px] bg-[#6C009F] text-white text-[1.2em] py-[12.5px] px-[30px] font-bold mt-12 ">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
