import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sri lalitha.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <nav className="bg-slate-100/50 backdrop-blur-2xl fixed w-full top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </Link>
        <MobileMenu />
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return `block py-2 px-3 text-slate-900 bg-emerald-700 rounded md:bg-transparent ${
                    isActive ? "md:text-emerald-600" : ""
                  } md:p-0 dark:bg-emerald-600 md:dark:bg-transparent hover:text-emerald-700 `;
                }}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="/loans"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-slate-900 md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-slate-900 md:dark:hover:bg-transparent"
              >
                Loans
              </Link>
            </li>
            <li>
              <Link
                to="/insurance"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-slate-900 md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-slate-900 md:dark:hover:bg-transparent"
              >
                Insurances
              </Link>
            </li>
            <li>
              <Link
                to="/our-services?service=loans"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-slate-900 md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-slate-900 md:dark:hover:bg-transparent"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-slate-900 md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-slate-900 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
