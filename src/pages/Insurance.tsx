import {
  AiOutlineCompass,
  AiFillAlipayCircle,
  AiOutlineRadarChart,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import {
  IoCalculator,
  IoAirplane,
  IoAccessibility,
  IoGameController,
} from "react-icons/io5";
import { ScrollRestoration, useSearchParams } from "react-router-dom";

const Insurances = () => {
  const [params] = useSearchParams();

  console.log(params.get("service"));

  // const service = params.get("service");

  const icons = [
    <IoCalculator
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <AiOutlineCompass
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <AiFillAlipayCircle
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <AiOutlineRadarChart
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <AiOutlineAlignLeft
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <IoAirplane
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <IoAccessibility
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
    <IoGameController
      size={80}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 self-center"
    />,
  ];

  const service = {
    key: "insurance",
    name: "Insurance",
    description:
      "Explore our wide range of insurance plans designed to provide you with financial security and peace of mind. Our offerings include life insurance, health insurance, vehicle insurance, and travel insurance, all tailored to meet your unique needs and ensure comprehensive coverage in every aspect of your life.",
    image: "https://example.com/images/insurance.svg",
    children: [
      {
        key: "life-insurance",
        name: "Life Insurance",
        description:
          "Secure your family's future with our life insurance plans. Enjoy affordable premiums and comprehensive coverage that provides peace of mind, knowing that your loved ones will be financially protected even in your absence. Our plans are designed to offer flexible benefits and cater to various life stages and requirements.",
        image: "https://example.com/images/life-insurance.svg",
      },
      {
        key: "health-insurance",
        name: "Health Insurance",
        description:
          "Protect your health with our comprehensive health insurance plans. Gain access to quality healthcare services and cover medical expenses with ease. Our health insurance plans are designed to offer extensive coverage, including hospitalization, outpatient care, and preventive services, ensuring you and your family stay healthy and financially secure.",
        image: "https://example.com/images/health-insurance.svg",
      },
      {
        key: "vehicle-insurance",
        name: "Vehicle Insurance",
        description:
          "Ensure your vehicle's protection with our comprehensive vehicle insurance plans. Benefit from extensive coverage, fast claim settlements, and 24/7 customer support. Our plans are designed to provide you with financial protection against damages, theft, and accidents, ensuring that you can drive with confidence and peace of mind.",
        image: "https://example.com/images/vehicle-insurance.svg",
      },
      {
        key: "travel-insurance",
        name: "Travel Insurance",
        description:
          "Travel with confidence using our comprehensive travel insurance plans. Covering medical emergencies, trip cancellations, lost luggage, and other unforeseen events, our plans ensure that you can explore the world with peace of mind, knowing you are protected wherever you go.",
        image: "https://example.com/images/travel-insurance.svg",
      },
    ],
  };

  return (
    <div className="bg-white text-slate-900 py-16 grid gap-6 flex-1 w-full place-items-center">
      <section className="m-4 md:m-8 dark:text-gray-800 max-w-screen-xl mx-auto">
        <ScrollRestoration />
        <div className="container mx-auto p-4 my-6 space-y-2 text-center md:text-start">
          <h2 className="text-5xl font-bold">{service.name}</h2>
          <p className="dark:text-gray-600">{service.description}</p>
        </div>
        <div className="container mx-auto grid justify-center place-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.children.map((item, index) => (
            <InsuranceCard key={item.key} item={item} icon={icons[index]} />
          ))}
        </div>
      </section>
      {/* <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 flex gap-6 flex-col">
        <h1 className="text-3xl  font-semibold">{service.name}</h1>
        <p className="max-w-4xl">{service.description}</p>
      </div>
      <section>
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Insurances;

import { ReactNode, useState } from "react";

const InsuranceCard = ({
  item,
  icon,
}: {
  item: { name: string; description: string };
  icon: ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col max-w-md transition-all duration-300 hover:cursor-pointer md:p-8 group hover:shadow-xl border items-center p-4">
      {icon}
      <h3 className="my-3 text-3xl font-semibold">{item.name}</h3>
      <div className="space-y-1 text-center leading-tight">
        <p className="text-xs md:text-sm">
          {isExpanded
            ? item.description
            : `${item.description.slice(0, 100)}...`}
          <span
            onClick={toggleReadMore}
            className="text-blue-500 cursor-pointer"
          >
            {isExpanded ? " Read Less" : " Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};
