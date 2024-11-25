import { Link } from "react-router-dom";
import { coursesData } from "../../constants";
import {
  IoCalculator,
  IoAccessibility,
  IoAirplane,
  IoGameController,
} from "react-icons/io5";

import {
  AiOutlineRadarChart,
  AiOutlineCompass,
  AiFillAlipayCircle,
  AiOutlineAlignLeft,
} from "react-icons/ai";

import { ReactNode } from "react";

const CoursesSection = () => {
  const icons = [
    <IoCalculator size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <AiOutlineCompass size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <AiFillAlipayCircle size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <AiOutlineRadarChart size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <AiOutlineAlignLeft size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <IoAirplane size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <IoAccessibility size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
    <IoGameController size={80}  className="group-hover:text-orange-400 text-orange-200 group-hover:scale-105"/>,
  ];

  return (
    <section className="text-slate-900 py-12">
      <div className="container flex flex-col justify-center p-4 mx-auto max-w-screen-xl gap-6">
        <div className="flex items-center gap-4 md:justify-between flex-col md:flex-row">
          <h3 className="text-slate-900 text-xl font-semibold text-center capitalize max-w-[300px] md:max-w-fit">
            Master New Skills: Check Out Our Courses
          </h3>
          <Link to={"/all-courses"}>Explore</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 place-items-center">
          {coursesData.map((item, index) => (
            <CourseCard
              key={item.id}
              item={item}
              index={index}
              icon={icons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

type CourseCardProps = {
  index: number;
  icon: ReactNode;
  item: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    image: string;
  };
};

function CourseCard({ index, item, icon }: CourseCardProps) {
  return (
    <Link
      to={`/course-highlights?courseId=${index + 1}`}
      className="group relative bg-white bg-blend-hue w-full gap-4 flex flex-col p-4 sm:p-6 lg:p-6   max-w-[300px] justify-center items-center hover:shadow-[4px_4px_25px_-10px_rgba(251,146,60,0.5)] rounded-xl overflow-clip "
    >
      {/* <img
        alt={item.title}
        src={"/icons/edit-icon.png"}
        className=" max-w-28 w-full object-cover group-hover:scale-105  transition-transform duration-300 "
      /> */}

      {icon}
      <p className="text-sm font-medium uppercase tracking-widest text-center text-slate-900">
        {item.title}
      </p>
    </Link>
  );
}
