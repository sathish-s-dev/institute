import { Link } from "react-router-dom";
import { coursesData } from "../../constants";
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
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <AiOutlineCompass
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <AiFillAlipayCircle
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <AiOutlineRadarChart
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <AiOutlineAlignLeft
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <IoAirplane
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <IoAccessibility
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
    <IoGameController
      size={150}
      className="hover:text-emerald-300 text-emerald-200 group-hover:scale-105"
    />,
  ];

  return (
    <section className="text-slate-900 py-12">
      <div className="container flex flex-col justify-center p-4 mx-auto max-w-screen-xl gap-6">
        <div className="flex gap-4 flex-col justify-between">
          <h3 className="text-slate-900 text-2xl md:text-5xl font-black text-center capitalize w-full">
            Our Services
          </h3>
          {/* <Link to={"/all-courses"}>Explore</Link> */}
          <p className="text-slate-900/80 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nisi dolorem possimus
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 place-items-center">
          {coursesData.map((item, index) => (
            <Link
              to={`/course-highlights?courseId=${item.id}`}
              key={index + "-" + item.title}
              className="bg-white hover:shadow-xl hover:text-emerald-400 text-emerald-200 max-w-sm flex flex-col gap-2 transition-shadow duration-500 rounded-xl  overflow-hidden"
            >
              <div className="">
                {icons[index]}
                <div className="p-4 relative ">
                  <h4 className="absolute left-0 -top-10 px-8 py-1.5 bg-emerald-700 text-white z-[1]">
                    loans
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
