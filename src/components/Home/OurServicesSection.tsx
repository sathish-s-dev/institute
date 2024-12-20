import { Link, ScrollRestoration } from "react-router-dom";
import { services } from "../../constants";
import {
  AiFillAlipayCircle,
  AiOutlineAlignLeft,
  AiOutlineCompass,
  AiOutlineRadarChart,
} from "react-icons/ai";
import {
  IoCalculator,
  IoAirplane,
  IoAccessibility,
  IoGameController,
} from "react-icons/io5";

const OurServicesSection = () => {
  const icons = [
    <IoCalculator
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <AiOutlineCompass
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <AiFillAlipayCircle
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <AiOutlineRadarChart
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <AiOutlineAlignLeft
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <IoAirplane
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <IoAccessibility
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
    <IoGameController
      size={100}
      className="group-hover:text-emerald-300 text-emerald-200 group-hover:scale-105 md:self-start self-center"
    />,
  ];

  return (
    <section className="text-slate-900 py-12">
      <div className="container flex flex-col justify-center p-4 mx-auto max-w-screen-xl gap-6">
        <div className="flex gap-4 flex-col justify-between">
          <ScrollRestoration storageKey="scroll" />

          <h3 className="text-slate-900 text-2xl md:text-5xl font-black text-center capitalize w-full">
            Our Services
          </h3>
          {/* <Link to={"/all-courses"}>Explore</Link> */}
          <p className="text-slate-900/80 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nisi dolorem possimus
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 place-items-center md:place-items-start">
          {services.map((item, index) => (
            <Link
              to={`/${item.key}`}
              key={index + "-" + item.name + "dogo"}
              className="bg-white group hover:shadow-xl hover:text-emerald-400 border text-emerald-200 max-w-xs md:max-w-sm flex flex-col gap-2 transition-shadow duration-500 rounded-xl  overflow-hidden"
            >
              <div className="flex flex-col">
                {icons[index]}
                <div className="p-4 relative flex flex-col gap-4 items-start ">
                  <h4 className="px-8 py-1.5 bg-emerald-700 text-white z-[1]">
                    {item.name}
                  </h4>
                  <p className="text-slate-900/80 text-sm font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
