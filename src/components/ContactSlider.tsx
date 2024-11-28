import { motion } from "framer-motion";
import { BsMailbox2, BsPhone, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const ContactSlider = () => {
  return (
    <motion.div
      className="fixed w-12 right-0 top-1/2 -translate-y-1/2 rounded-l-xl bg-slate-900 py-4 gap-4 flex justify-between flex-col"
      whileHover={{ width: "8rem" }}
      transition={{ stiffness: 500, damping: 20, type: "spring" }}
    >
      <Link to="/" className="px-3 py-1 hover:bg-emerald-500 text-white flex gap-4 hover:text-white text-xs items-center">
        <BsWhatsapp size={24} color="white" className="flex-shrink-0" />
        WhatsApp
      </Link>
      <Link to="/" className="px-3 py-1 hover:bg-emerald-500 text-white flex gap-4 hover:text-white text-xs items-center">
        <BsMailbox2 size={24} color="white" className="flex-shrink-0" />
        Email
      </Link>
      <Link to="/" className="px-3 py-1 hover:bg-emerald-500 text-white flex gap-4 hover:text-white text-xs items-center">
        <BsPhone size={24} color="white" className="flex-shrink-0" />
        Call
      </Link>
    </motion.div>
  );
};

export default ContactSlider;
