import React from "react";
import "./team.css";
const Team = () => {
  return (
    <div id="team" className="mb-16">
      <div className="py-8 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary">
              Welcome to Iqunic, where we help students and parents find their
              ideal career path through personalized guidance and career
              assessments. We believe that everyone deserves to find a career
              they love, and we're here to help you make informed decisions
              about your future.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto max-w-2xl mt-20 grid  grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-2"
          >
            <li className="rounded-2xl bg-white  shadow-bs py-8 px-6">
              <div className="flex flex-col items-center justify-center flex-col">
                <div className="background__image"></div>
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-secondary">
                Vikrant Suktankar
              </h3>
              <p className="text-sm leading-6 text-secondary font-base"></p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href="" className="text-linkedin hover:textl-inkedin">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-8 w-8"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="rounded-2xl bg-white  shadow-bs py-8 px-6">
              <div className="flex flex-col items-center justify-center flex-col">
                <div className="background__image2"></div>
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-secondary">
                Abhay Patil
              </h3>
              <p className="text-sm leading-6 text-secondary font-base"></p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/abhay-patil-170794179/"
                    className="text-linkedin hover:textl-inkedin"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-8 w-8"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="rounded-2xl bg-white  shadow-bs py-8 px-6">
              <div className="flex flex-col items-center justify-center flex-col">
                <div className="background__image3"></div>
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-secondary">
                Siddhi Deshmukh
              </h3>
              <p className="text-sm leading-6 text-secondary font-base"></p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/siddhideshmukhpune"
                    className="text-linkedin hover:textl-inkedin"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-8 w-8"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="rounded-2xl bg-white  shadow-bs py-8 px-6">
              <div className="flex flex-col items-center justify-center flex-col">
                <div className="background__image4"></div>
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-secondary">
                Rutuja Jadhav
              </h3>
              <p className="text-sm leading-6 text-secondary font-base"></p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rutujadhav/"
                    className="text-linkedin hover:textl-inkedin"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-8 w-8"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="rounded-2xl bg-white  shadow-bs py-8 px-6">
              <div className="flex flex-col items-center justify-center flex-col">
                <div className="background__image5"></div>
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-secondary">
                Kinjal Kulkarni
              </h3>
              <p className="text-sm leading-6 text-secondary font-base"></p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/kinjal-kulkarni-2894141aa/"
                    className="text-linkedin hover:textl-inkedin"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-8 w-8"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
