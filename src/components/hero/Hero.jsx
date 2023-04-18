import React from "react";
import Home from "../../assets/images/homepage.jpg";
import CardsContainer from "../../assets/ui/cards/CardsContainer";

const Hero = () => {
  return (
    <div id="home" className="bg-white mb-16">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pt-10  lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py20 lg:px-8">
          <div className="px-4 lg:px-4 lg:pt-4">
            
            <div className="mx-auto max-w-4xl">
              <div className="max-w-lg xs:text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl ">
                  Start Thinking Out Of The Box Right Now
                </h1>
                <p className="mt-6 text-[1.2em] leading-8 text-secondary xs:mx-2">
                  Are you feeling lost in your career path? Are you confused
                  about your career choices? Look no further! Iqunic is here to
                  help you find your way and achieve your career goals. Our
                  expert career counselors specialize in providing personalized
                  guidance and support to help you identify your strengths,
                  passions, and interests, and guide you towards a fulfilling
                  career. We understand that every individual's career journey
                  is unique, which is why we offer a range of services that are
                  tailored to meet your specific needs. From career assessment
                  tests to resume writing and interview coaching, we've got you
                  covered. Don't just take our word for it - hear from our
                  satisfied clients who have achieved their career goals with
                  our help. Schedule a free consultation today to learn more.
                </p>
                <div className="mt-10 fle gap-x-6">
                  <button className="cursor-pointer rounded-[20px] bg-[#6C009F] text-white text-[1.2em] py-[12.5px] px-[30px] font-bold mt-12 xs:mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[100%] skew-x-[-30deg] md:-mr-20 lg:-mr-12"
              aria-hidden="true"
            />
            <div className="mt-14">
              <div>
                <img src={Home} className="home__img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <CardsContainer />
    </div>
  );
};

export default Hero;
