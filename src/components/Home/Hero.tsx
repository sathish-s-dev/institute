import { Link } from "react-router-dom";
import businessSvg from "../../assets/business.svg";

const Hero = () => {
  return (
    <section className="w-full">
      {/* <div className="sticky top-16 flex w-full">
        <div className="slide flex">
          <p className=" px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
          <p className="  px-80 text-center bg-emerald-600 text-white flex-shrink-0 py-1 top-0">
            100% Placement Assistance
          </p>
        </div>
      </div> */}
      <div className="container flex flex-col justify-center p-6 pb-16 mx-auto sm:pt-12 lg:pt-36 lg:flex-row lg:justify-between max-w-screen-xl">
        <div className="flex flex-col gap-4 justify-center p-6 py-12 text-center rounded-sm lg:max-w-md w-full xl:max-w-2xl lg:text-left">
          <h1 className="text-md leading-none sm:text-lg text-slate-900">
            The Path to
            <span className="dark:text-emerald-500"> Success </span>
            starts here.
          </h1>
          <p className="text-slate-900 text-4xl sm:text-6xl font-black text-bg-gradient">
            100% Placement Assistance
          </p>

          <p className="mt-6 mb-8 sm:mb-12 text-slate-700 text-center md:text-left">
            Empowering Your Future with Cutting-Edge SkillsEmpowering Your
            Future with Cutting-Edge Skills
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/"
              className="inline-block rounded-lg border hover:text-white  bg-emerald-600 px-12 py-3 text-sm font-medium hover:bg-emerald-600 text-white focus:outline-none focus:ring active:bg-emerald-500"
            >
              Request Demo
            </Link>
            <Link
              to="/"
              className="inline-block rounded-lg border border-emerald-600 px-12 py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring active:bg-emerald-500"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={businessSvg}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
