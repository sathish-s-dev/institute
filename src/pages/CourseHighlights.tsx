import { ReactNode } from "react";
import arrowLeft from "../assets/arrow-left.svg";
// import { router } from "../../router";
import { useNavigate, useSearchParams } from "react-router-dom";
import { coursesData } from "../constants";

const CourseHighlights = (): ReactNode => {
  const router = useNavigate();
  const searchParams = useSearchParams();

  const courseId = searchParams[0].get("courseId");

  console.log();

  if (!courseId) {
    router("/");
    return null;
  }

  const course = coursesData.find((course) => course.id === +courseId);
  console.log(course);

  return (
    <div className="flex-1 bg-white text-slate-900 py-20 flex flex-col justify-start items-start gap-2 w-full">
      <div className="mx-auto max-w-7xl px-0 lg:px-6 w-full flex flex-col gap-6 relative pt-10 md:pt-0">
        <div className="h-full absolute top-0 md:-left-6 left-1">
          <button
            onClick={() => {
              router(-1);
            }}
            className="text-red-100 size-8 bg-slate-900 flex items-center justify-center sticky top-20 md:-left-4 p-2"
          >
            <img src={arrowLeft} alt="back" className="w-4" />
          </button>
        </div>
        <div>
          <img
            src={course?.image}
            alt=""
            className="w-full max-w-2xl rounded-none md:rounded-xl"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 pl-4 md:pl-0">
          <p className="text-xl text-red-900">Course Highlights</p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl"></h2>
          <p className="mt-4 text-gray-500">{course?.description}</p>

          <p className="py-2 text-red-900 text-xl">Course Details</p>

          <div className="flex gap-4 max-w-xs w-fit p-4 border rounded-lg">
            <div className="flex flex-col gap-2">
              <p>Duration</p>
              <p>Fee</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>: 6 Months</p>
              <p>: 25,000</p>
            </div>
          </div>

          <p className="py-2 text-red-900 text-xl">
            {" "}
            High Demand Across Industries
          </p>

          <ol className="list-decimal px-6">
            <li>Finance</li>
            <ul className="list-disc px-8">
              <li>Creates detailed financial dashboards</li>
              <li>Develops risk analysis models</li>
            </ul>
            <li>Healthcare</li>
            <ul className="list-disc px-8">
              <li>Manages patient data</li>
              <li>Tracks disease outbreaks</li>
            </ul>
            <li>Retail and E-commerce</li>
            <ul className="list-disc px-8">
              <li>Analyzes sales data</li>
              <li>Tracks customer behavior</li>
            </ul>
            <li>Technology</li>
            <ul className="list-disc px-8">
              <li>Analyzes user data</li>
              <li>Monitors software performance</li>
            </ul>
            <li>Government and Public Sector</li>
            <ul className="list-disc px-8">
              <li>Manages public data Monitors economic indicators</li>
              <li> Monitors economic indicators</li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

export { CourseHighlights };
