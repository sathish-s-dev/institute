import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Insurances = () => {
  const [params] = useSearchParams();

  console.log(params.get("service"));

  // const service = params.get("service");

  const service = {
    key: "loans",
    name: "Loans",
    description:
      "Discover our wide range of loan options tailored to meet your financial needs, whether for personal, home, or vehicle purposes.",
    image: "https://example.com/images/loans.svg",
    children: [
      {
        key: "personal-loan",
        name: "Personal Loan",
        description:
          "Our personal loans offer quick approval and competitive rates, perfect for covering unexpected expenses, personal projects, or consolidating debt. Enjoy flexible repayment options and personalized service designed to meet your financial needs and provide peace of mind.",
        image: "https://example.com/images/personal-loan.svg",
      },
      {
        key: "home-loan",
        name: "Home Loan",
        description:
          "Achieve your dream of homeownership with our home loan plans. Benefit from low-interest rates, an easy application process, and flexible repayment options. Our dedicated team provides support every step of the way to help you secure the perfect home loan for your needs.",
        image: "https://example.com/images/home-loan.svg",
      },
      {
        key: "vehicle-loan",
        name: "Vehicle Loan",
        description:
          "Drive away in your dream vehicle with our comprehensive vehicle loan options. We offer competitive rates, hassle-free financing, and flexible terms to suit your budget and lifestyle. Experience a seamless process from application to approval, and get on the road faster.",
        image: "https://example.com/images/vehicle-loan.svg",
      },
      {
        key: "education-loan",
        name: "Education Loan",
        description:
          "Invest in your future with our education loans. Cover tuition, books, and living expenses with our flexible loan plans. Enjoy competitive rates and repayment options tailored to support your academic journey, ensuring you have the financial resources needed to achieve your educational goals.",
        image: "https://example.com/images/education-loan.svg",
      },
    ],
  };

  return (
    <div className="bg-white text-slate-900 py-16 grid place-items-center gap-6 flex-1">
      <section className="m-4 md:m-8 dark:text-gray-800 max-w-screen-xl mx-auto">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center md:text-start">
          <h2 className="text-5xl font-bold">{service.name}</h2>
          <p className="dark:text-gray-600">{service.description}</p>
        </div>
        <div className="container mx-auto grid justify-center place-items-stretch  gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {service.children.map((item) => (
            <ServiceCard key={item.key} item={item} />
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

const ServiceCard = ({
  item,
}: {
  item: { name: string; description: string; image: string };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col max-w-md transition-all duration-300 hover:cursor-pointer md:p-8 group hover:shadow-xl items-center p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8 dark:text-green-600"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        ></path>
      </svg>
      <h3 className="my-3 text-3xl font-semibold">{item.name}</h3>
      <div
        className={`space-y-1 text-center leading-tight ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        <p>{item.description}</p>
      </div>
      <button
        onClick={toggleReadMore}
        className="text-red-500 hover:text-red-700 border-none outline-none focus:outline-none"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

// export default ServiceCard;
