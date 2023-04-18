import React from "react";
import consultation from "../../assets/images/Consultation.svg";
import admission from "../../assets/images/Admission.svg";
import cheating from "../../assets/images/Test.svg";
import career from "../../assets/images/Career.svg";

const Features = () => {
  return (
    <div className="mb-16 xs:mb-20">
      <div className="text-center">
        <h1 className="text-4xl xs:text-3xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
          Features And Services
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          We offer a range of customized solutions to help students make
          informed decisions about their academic and career choices
        </p>
      </div>
      <div
        id="features"
        className="flex items-center md:justify-around  xs:flex-col xs:gap-[150px]"
      >

        
        <div className="relative bg-card1 w-[180px] h-[250px] rounded-[20px] flex items-center flex-col xs:w-[200px]">
          <img src={consultation} alt="img" loading="lazy" className="mt-2"/>

          <div className="absolute top-[28%] left-[20%] flex flex-col px-4 py-2 bg-white w-[200px]  min-h-[300px] rounded-[20px] border shadow-bs xs:w-[200px]">
            <h1 className="text-lg font-bold">Comprehensive Consultation</h1>
            <p className="text-secondary mt-2">
              Our education consultants work one-on-one with each student to
              understand their unique needs, interests, and goals
            </p>
          </div>
        </div>
        <div className="relative bg-card2 w-[200px] h-[250px] rounded-[20px] flex items-center flex-col xs:w-[200px]">
          <img src={admission} alt="img" loading="lazy" />

          <div className="absolute top-[28%] left-[20%] flex flex-col px-4 py-2 bg-white min-h-[300px]  w-[200px] rounded-[20px] border shadow-bs xs:w-[200px]">
            <h1 className="text-lg font-bold">Admissions Guidance</h1>
            <p className="text-secondary mt-2">
              We provide expert assistance with scholarships, and financial aid,
              ensuring that students leverage all available resources to achieve
              their academic goals.
            </p>
          </div>
        </div>
        <div className="relative bg-card3 w-[200px] h-[250px] rounded-[20px] flex items-center flex-col xs:w-[200px]">
          <img src={cheating} alt="img" loading="lazy" />

          <div className="absolute top-[28%] left-[20%] flex flex-col px-4 py-2 bg-white  w-[200px]  min-h-[300px] rounded-[20px] border shadow-bs xs:w-[200px]">
            <h1 className="text-lg font-bold">
              National and International Exams Guidance
            </h1>
            <p className="text-secondary mt-2">
              We provide guidance for exams conducted at national and
              international level with student’s interest.
            </p>
          </div>
        </div>
        <div className="relative bg-card4 w-[200px] h-[250px] rounded-[20px] flex items-center flex-col xs:w-[200px]">
          <img src={career} alt="img" loading="lazy" />

          <div className="absolute top-[28%] left-[20%] flex flex-col px-4 py-2 bg-white  w-[200px] min-h-[300px] rounded-[20px] border shadow-bs xs:w-[200px]">
            <h1 className="text-lg font-bold">Career Counseling</h1>
            <p className="text-secondary mt-2">
              We provide detailed insights into current and future job markets,
              helping students understand the skills and qualifications required
              to succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
