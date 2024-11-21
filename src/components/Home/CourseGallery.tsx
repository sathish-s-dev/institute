import { Link } from "react-router-dom";
import { coursesData } from "../CourseHighlights";

const CoursesSection = () => {
  return (
    <section className="text-slate-900 py-12">
      <div className="container flex flex-col justify-center p-4 mx-auto max-w-screen-xl gap-6">
        <div className="flex items-center gap-4 md:justify-between flex-col md:flex-row">
          <h3 className="text-slate-900 text-xl font-semibold text-center capitalize max-w-[300px] md:max-w-fit">
            Master New Skills: Check Out Our Courses
          </h3>
          <Link to={"/all-courses"}>Explore</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          {coursesData.map((item, index) => (
            <CourseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

function CourseCard({
  index,
  item,
}: {
  index: number;
  item: {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    image: string;
  };
}) {
  return (
    <Link
      to={`/course-highlights?courseId=${index + 1}`}
      className="group relative block bg-black max-h-64 h-[200px] rounded-xl overflow-clip hover:scale-105 transition-transform duration-300"
    >
      <img
        alt=""
        src={item.image}
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-30"
      />

      <div className="relative p-4 sm:p-6 lg:p-4 flex flex-col justify-between h-full">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            Developer
          </p>

          <p className="text-xl font-bold text-slate-200 sm:text-2xl">
            {item.title}
          </p>
        </div>

        <div className="">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-slate-300 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
