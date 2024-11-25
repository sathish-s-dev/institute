import doodle from "../assets/doodle.svg";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex-1 bg-white">
      <div className="grid max-w-screen-xl grid-cols-1 mt-24 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100/10 backdrop-blur-xl dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-500">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src={doodle} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
