import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "5 TO 7 GRADE",
      id: "tier-freelancer",
      href: "#",
      price: { monthly: "₹100", annually: "$144" },
      description:
        "Sign up, get the plan and give the IQ test before counselling",
      features: [
        "choose your strengths and interests",
        "take iqunic career assessment test ",
        "counselling sessions ",
        "Meet the experts",
      ],
      mostPopular: false,
    },
    {
      name: "10 TO 12 GRADE",
      id: "tier-startup",
      href: "#",
      price: { monthly: "₹200", annually: "$288" },
      description:
        "Sign up, get the plan and give the IQ test before counselling",
      features: [
        "Discover your ideal career based on interests and aptitude, guided by our experts. ",
        "Choose the right college and course with our coaches to excel in your chosen career. ",
        "Plan ahead for entrance exams and applications to get ahead of the competition",
      ],
      mostPopular: true,
    },
    {
      name: "8 TO 9 GRADE",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "₹150", annually: "$576" },
      description:
        "Sign up, get the plan and give the IQ test before counselling",
      features: [
        "Offers advanced assessment to help students choose the right stream and subjects for their future career.",
        "Provides personalized guidance based on -individual strengths and interests.",
        "Helps students align their choices with the career they want to pursue.",
        "expert online sessions ",
        ,
      ],
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <div id="pricing">
      <main>
        {/* Pricing section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-32 lg:px-8 mb-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl ">
              Pricing plans
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary">
            Plans according to student’s grade to bifurcate their IQ test
            further for counselling
          </p>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? "bg-white/5 " : "",
                  "rounded-3xl p-8 xl:p-10 border shadow-bs"
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-primary"
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-white py-1 px-2.5 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-secondary">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-secondary">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-secondary">
                    {frequency.priceSuffix}
                  </span>
                </p>
                {/* <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-primary text-white shadow-sm"
                      : "bg-primary text-white",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  Buy plan
                </a> */}
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-secondary xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial section */}

        {/* FAQ section */}
      </main>

      {/* Footer */}
    </div>
  );
}
