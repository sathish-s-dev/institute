// import Carousel from "../Carousal";
import CoursesSection from "../components/Home/CourseGallery";
import CtaSection from "../components/Home/CtaSection";
import Hero from "../components/Home/Hero";
import OurServicesSection from "../components/Home/OurServicesSection";
// import OffersSection from "./OffersSection";

const Home = () => {
  return (
    // bg-gradient-to-br from-black via-sky-950 to-black
    <div className="bg-white">
      <Hero />
      {/* <OffersSection />/ */}
      <CoursesSection />
      <OurServicesSection />
      <CtaSection />
    </div>
  );
};

export default Home;
