// import Carousel from "../Carousal";
import CoursesSection from "./CourseGallery";
import CtaSection from "./CtaSection";
import Hero from "./Hero";
import OurServicesSection from "./OurServicesSection";
// import OffersSection from "./OffersSection";

const Home = () => {
  return (
    // bg-gradient-to-br from-black via-sky-950 to-black
    <div className="bg-gradient-to-br from-sky-50 to-sky-50">
      <Hero />
      {/* <OffersSection />/ */}
      <CoursesSection />

      <OurServicesSection />

      <CtaSection />
    </div>
  );
};

export default Home;
