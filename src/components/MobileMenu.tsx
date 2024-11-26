import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={toggleMenu}
          className="text-slate-800 focus:outline-none outline-none border-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-80%" }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="lg:hidden bg-slate-900 text-center absolute h-80 flex flex-col gap-6 py-6 left-0 top-12 w-64 text-white"
        >
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-orange-600 hover:focus:text-white"
            onClick={handleCloseMenu}
          >
            Home
          </Link>
          <Link
            to="/insurance"
            className="block px-4 py-2 hover:bg-orange-600 hover:focus:text-white"
            onClick={handleCloseMenu}
          >
            Insurance
          </Link>
          <Link
            to="/loans"
            className="block px-4 py-2 hover:bg-orange-600 hover:focus:text-white"
            onClick={handleCloseMenu}
          >
            Loans
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-orange-600 hover:focus:text-white"
            onClick={handleCloseMenu}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
