import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-screen-xl text-center px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-5xl">
          Customise Your Product
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
          ipsum eos temporibus ea nihil.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full border border-emerald-600 px-12 py-3 text-sm font-medium text-emerald-600 hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring active:bg-emerald-500"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
