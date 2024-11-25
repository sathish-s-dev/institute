const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="text-sm">
          Full name
        </label>
        <input
          id="name"
          type="text"
          placeholder=""
          className="w-full p-3 rounded dark:bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 rounded dark:bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          className="w-full p-3 rounded dark:bg-gray-100"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-green-600 dark:text-gray-50"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
