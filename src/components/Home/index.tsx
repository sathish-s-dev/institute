// import Carousel from "../Carousal";
import CoursesSection from "./CourseGallery";
import Hero from "./Hero";
// import OffersSection from "./OffersSection";

const Home = () => {
  return (
    // bg-gradient-to-br from-black via-sky-950 to-black
    <div className="bg-gradient-to-br from-sky-50 to-sky-50">
      {/* <Carousel /> */}
      <Hero />
      {/* <OffersSection />/ */}
      <CoursesSection />
    </div>
  );
};

export default Home;
