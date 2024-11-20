// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// import { Carousel as ReactCarousel } from "react-responsive-carousel";

// interface CarouselItemProps {
//   title: string;
//   description: string;
//   buttonText: string;
//   backgroundPath: string;
// }

// const carouselData: CarouselItemProps[] = [
//   {
//     title: "Java Fullstack",
//     description: "Short description of the course content and benefits.",
//     buttonText: "Learn More",
//     backgroundPath: "/java.jpeg",
//   },
//   {
//     title: "Python Fullstack",
//     description: "Short description of the course content and benefits.",
//     buttonText: "Learn More",
//     backgroundPath: "/python.jpeg",
//   },
//   {
//     title: "Web Development",
//     description: "Short description of the course content and benefits.",
//     buttonText: "Learn More",
//     backgroundPath: "/web-design.jpeg",
//   },
//   {
//     title: "SAP FICO S4/HANA",
//     description: "Short description of the course content and benefits.",
//     buttonText: "Learn More",
//     backgroundPath: "/tableau.jpeg",
//   },
//   {
//     title: "Web Development",
//     description: "Short description of the course content and benefits.",
//     buttonText: "Learn More",
//     backgroundPath: "/all-courses.jpeg",
//   },
// ];

// const Carousel: React.FC = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [carouselWidth, setCarouselWidth] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (carouselRef.current) {
//       setCarouselWidth(carouselRef.current.scrollWidth * 500);
//     }
//   }, [width]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         const maxScrollLeft = carouselRef.current.scrollWidth / 2;
//         if (carouselRef.current.scrollLeft >= maxScrollLeft) {
//           carouselRef.current.scrollLeft = 0;
//         } else {
//           carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
//         }
//       }
//     }, 500); // Adjust the interval timing as needed
//     return () => clearInterval(interval);
//   }, [width]);

//   return (
//     <div className="container mx-auto pt-16">
//       <div className="relative overflow-hidden">
//         <motion.div
//           ref={carouselRef}
//           className="flex scroll-snap-x min-h-screen scroll-smooth"
//           drag="x"
//           dragConstraints={{ left: -carouselWidth, right: 0 }}
//           dragElastic={0.3}
//           onDragEnd={() => {
//             if (carouselRef.current) {
//               const maxScrollLeft = carouselRef.current.scrollWidth / 2;
//               if (carouselRef.current.scrollLeft >= maxScrollLeft) {
//                 carouselRef.current.scrollLeft = 0;
//               }
//             }
//           }}
//         >
//           {carouselData.concat(carouselData).map((item, index) => (
//             <CarouselItem {...item} key={index} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const CarouselItem: React.FC<CarouselItemProps> = ({
//   title,
//   description,
//   buttonText,
//   backgroundPath,
// }) => {
//   return (
//     <motion.div
//       className="min-w-[300px] rounded-lg shadow-lg w-full flex flex-col justify-center flex-shrink-0 relative isolate"
//       whileTap={{ scale: 1.01 }}
//     >
//       <div className="bg-gradient-to-r from-slate-950 z-[1] p-6 h-full">
//         <div className="flex flex-col gap-2 items-start justify-center">
//           <h3 className="text-4xl font-semibold mb-2">{title}</h3>
//           <p className="text-gray-300 mb-4">{description}</p>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             {buttonText}
//           </button>
//         </div>
//       </div>
//       <img
//         src={backgroundPath}
//         alt={title}
//         className="absolute inset-0 object-cover w-full h-full pointer-events-none z-[-1]"
//       />
//     </motion.div>
//   );
// };

// export default Carousel;
