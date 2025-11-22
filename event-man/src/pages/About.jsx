// import React from "react";
// import Photo from "../assets/images/Photoone.jpg";
// import Fest from "../assets/images/fest.jpg";
// import Consert from "../assets/images/Consert.jpg";
// import Event1 from "../assets/images/Event1.jpg"
// import Event2 from "../assets/images/Event2.jpg"
// import Event3 from "../assets/images/Event3.jpg"

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// const About = () => {
//   const cards = [
//     {
//       img: Photo,
//       subtitle: "Memorable Experience",
//       title: "Unforgettable Moments at Eventive 2025",
//     },
//     {
//       img: Fest,
//       subtitle: "Festible Lighting",
//       title: "Storytelling Festival",
//     },
//     {
//       img: Consert,
//       subtitle: "Tech Venu",
//       title: "Enjoy Tech Venue",
//     },
//     {
//       img: Event1,
//       subtitle: "Networking Zone",
//       title: "Meet Industry Experts",
//     },
//     {
//       img: Event2,
//       subtitle: "Workshops",
//       title: "Hands-on Learning",
//     },
//     {
//       img: Event3,
//       subtitle: "Wedding",
//       title: "Wedding & Performances",
//     },
//   ];

//   return (
//     <section className="text-white bg-[#0B0A0F] py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-6 text-center">About The Event</h2>
//         <p className="text-gray-400 mb-10 text-center">
//           <span className="text-purple-600 font-semibold">Tech Event 2025</span> 
//           showcases groundbreaking innovations, featuring keynote talks, interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
//         </p>

//         <Swiper
//   slidesPerView={3}
//   spaceBetween={20}
//   loop={true}
//   autoplay={{ delay: 3000, disableOnInteraction: false }}
//   modules={[Autoplay]}
//   className="mySwiper"
//   breakpoints={{
//     320: { slidesPerView: 1 },
//     640: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 },
//   }}
// >
//   {cards.map((card, index) => (
//     <SwiperSlide key={index}>
//       <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-purple-400 transition">
//         <img
//           src={card.img}
//           alt={card.title}
//           className="object-cover w-full h-56"
//         />
//         <div className="p-4 text-right">
//           <p className="text-gray-400">{card.subtitle}</p>
//           <h3 className="text-lg font-semibold text-gray-400">
//             {card.title}
//           </h3>
//         </div>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>

//       </div>
//     </section>
//   );
// };

// export default About;


import React, { forwardRef } from "react";
import Photo from "../assets/images/Photoone.jpg";
import Fest from "../assets/images/fest.jpg";
import Consert from "../assets/images/Consert.jpg";
import Event1 from "../assets/images/Event1.jpg";
import Event2 from "../assets/images/Event2.jpg";
import Event3 from "../assets/images/Event3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const About = forwardRef((props, ref) => {
  const cards = [
    { img: Photo, subtitle: "Memorable Experience", title: "Unforgettable Moments at Eventive 2025" },
    { img: Fest, subtitle: "Festible Lighting", title: "Storytelling Festival" },
    { img: Consert, subtitle: "Tech Venu", title: "Enjoy Tech Venue" },
    { img: Event1, subtitle: "Networking Zone", title: "Meet Industry Experts" },
    { img: Event2, subtitle: "Workshops", title: "Hands-on Learning" },
    { img: Event3, subtitle: "Wedding", title: "Wedding & Performances" },
  ];

  return (
    <section ref={ref} className="text-white bg-[#0B0A0F] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About The Event</h2>
        <p className="text-gray-400 mb-10 text-center">
          <span className="text-purple-600 font-semibold">Tech Event 2025</span> showcases groundbreaking innovations, featuring keynote talks, interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }}}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-purple-400 transition">
                <img src={card.img} alt={card.title} className="object-cover w-full h-56" />
                <div className="p-4 text-right">
                  <p className="text-gray-400">{card.subtitle}</p>
                  <h3 className="text-lg font-semibold text-gray-400">{card.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default About;
