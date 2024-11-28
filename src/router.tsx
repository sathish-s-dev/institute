import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import { CourseHighlights } from "./pages/CourseHighlights";
import Contact from "./pages/Contact";
import Loans from "./pages/Loans";
import Insurances from "./pages/Insurance";
import ContactSlider from "./components/ContactSlider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen flex flex-col">
        <Header />
        <ContactSlider />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/loans",
        element: <Loans />,
      },
      {
        path: "/insurance",
        element: <Insurances />,
      },
      {
        path: "/course-highlights",
        element: <CourseHighlights />,
      },
    ],
  },
]);
