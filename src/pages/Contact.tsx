import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex-1 bg-white">
      <div className="grid max-w-screen-xl grid-cols-1 mt-16 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100/10 backdrop-blur-xl dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-500">
              Vivamus in nisl metus? Phasellus.
            </div>
            <div className="dark:text-gray-700 flex-col flex gap-2">
              <h3 className="font-semibold text-lg">Contact</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.01211064161257!2d77.70167786200749!3d12.959449342051244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1383fc363ceb%3A0x66009e3075ae9b11!2sALTEK%20SOFTWARE%20TRAINING%20INSTITUTION!5e0!3m2!1sen!2sin!4v1732705674011!5m2!1sen!2sin"
                // style="border:0;"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full rounded-xl"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="flex gap-2">
              <div>
                <p>Phone</p>
                <p>WhatsApp</p>
                <p>Email</p>
                <p>Address</p>
              </div>
              <div>
                <p>: 99999999</p>
                <p>: 99999999 </p>
                <p>: hr@srilalithainfotech.com</p>
                <p>: Mahadevapura, Bangalore - 560048</p>
              </div>
            </div>
          </div>
          {/* <img src={doodle} alt="" className="p-6 h-52 md:h-64" /> */}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
