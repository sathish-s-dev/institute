import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sri lalitha.png";
import MobileMenu from "./MobileMenu";

const navLinkClasses =
  "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-slate-900 md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-slate-900 md:dark:hover:bg-transparent";

const NavItem = ({
  to,
  children,
  isActive,
}: {
  to: string;
  children: string;
  isActive: boolean;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 px-3 text-slate-900 bg-emerald-700 rounded md:bg-transparent ${
        isActive ? "md:text-emerald-600" : ""
      } md:p-0 dark:bg-emerald-600 md:dark:bg-transparent hover:text-emerald-700`
    }
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </NavLink>
);

const DropdownLink = ({ to, children }: { to: string; children: string }) => (
  <Link
    to={to}
    className="hover:text-white hover:bg-emerald-500 px-4 py-1 text-sm"
  >
    {children}
  </Link>
);

const Submenu = ({
  label,
  items,
}: {
  label: string;
  items: { to: string; label: string }[];
}) => (
  <div className="relative group">
    <DropdownLink to="#">{label}</DropdownLink>
    <div className="bg-slate-800 hidden group-hover:flex absolute right-48 top-1/2 -translate-y-1/2 flex-col gap-4 p-4 w-48 h-auto">
      {items.map((item, index) => (
        <DropdownLink key={index} to={item.to}>
          {item.label}
        </DropdownLink>
      ))}
    </div>
  </div>
);

const Header = () => {
  return (
    <nav className="bg-slate-100/50 backdrop-blur-2xl fixed w-full top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </Link>
        <MobileMenu />
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavItem to="/" isActive>
                Home
              </NavItem>
            </li>
            <li>
              <Link to="/loans" className={navLinkClasses}>
                Loans
              </Link>
            </li>
            <li>
              <Link to="/insurance" className={navLinkClasses}>
                Insurances
              </Link>
            </li>
            <li className="relative">
              <Link to="#" className={`${navLinkClasses} peer`}>
                Software Training
              </Link>
              <div className="peer-hover:flex transition-all duration-300 hover:flex top-6 hidden w-48 absolute bg-slate-900">
                <div className="w-full h-full flex flex-col py-4 gap-4">
                  <DropdownLink to="/">Tableau</DropdownLink>
                  <DropdownLink to="/">Power BI</DropdownLink>
                  <Submenu
                    label="Java Fullstack"
                    items={[
                      { to: "/", label: "Java + UI" },
                      { to: "/", label: "Java + Java EE" },
                      { to: "/", label: "Web + UI" },
                    ]}
                  />
                  <Submenu
                    label="Python Fullstack"
                    items={[
                      { to: "/", label: "Python + UI" },
                      { to: "/", label: "Python + UI" },
                    ]}
                  />
                  <Submenu
                    label="Web design"
                    items={[
                      { to: "/", label: "Web + UI" },
                      { to: "/", label: "Web + UI" },
                    ]}
                  />
                </div>
              </div>
            </li>
            <li>
              <Link to="/contact" className={navLinkClasses}>
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
