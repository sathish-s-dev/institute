import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./components/Home";
import { CourseHighlights } from "./components/CourseHighlights";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen flex flex-col">
        <Header />
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
        element: <div>Contact</div>,
      },
      {
        path: "/blog",
        element: <div>Blog</div>,
      },
      {
        path: "/course-highlights",
        element: <CourseHighlights />,
      },
    ],
  },
]);
