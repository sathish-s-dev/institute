import businessSvg from "../../assets/business.svg";

const Hero = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 pt-24 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-screen-xl">
        <div className="flex flex-col justify-center p-6 py-12 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none sm:text-6xl text-slate-900">
            The Path to
            <span className="dark:text-emerald-500"> Success </span>
            starts here.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-700">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-default-600 dark:text-slate-900"
            >
              Free Demo
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 text-slate-900"
            >
              Get Started
            </a>
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
