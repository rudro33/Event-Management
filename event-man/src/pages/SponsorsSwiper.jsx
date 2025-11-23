import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

import Apple from "../assets/images/Apple.jpg";
import Youtube from "../assets/images/Youtube.jpeg";
import Cocacola from "../assets/images/Cocacola.jpg";
import Music from "../assets/images/Music.jpg";
import Netflix from "../assets/images/Netflix.jpg";
import Pepsi from "../assets/images/Pepsi.jpg";
import Spotify from "../assets/images/Spotify.webp";
import Adidas from "../assets/images/Adidas.jpeg";
import Nike from "../assets/images/Nike.jpg";

const SponsorsSwiper = () => {
  const sponsors = [
    { id: 1, name: "Sony Music", logo: Music, video: "https://www.youtube.com/embed/pGcbthDbU_k" },
    { id: 2, name: "Pepsi", logo: Pepsi, video: "https://www.youtube.com/embed/7oBZ8sBjdyQ" },
    { id: 3, name: "Spotify", logo: Spotify, video: "https://www.youtube.com/embed/fku3g1PrKjc" },
    { id: 4, name: "Netflix", logo: Netflix, video: "https://www.youtube.com/embed/GV3HUDMQ-F8" },
    { id: 5, name: "Apple Music", logo: Apple, video: "https://www.youtube.com/embed/_-AS5DtDeqs" },
    { id: 6, name: "Coca-Cola", logo: Cocacola, video: "https://www.youtube.com/embed/Yy6fByUmPuE" },
    { id: 7, name: "Adidas", logo: Adidas, video: "https://www.youtube.com/embed/UDEZ6Tv2LJs" },
    { id: 8, name: "Nike", logo: Nike, video: "https://www.youtube.com/embed/Bcpu-jqAL6w" },
    { id: 9, name: "YouTube", logo: Youtube, video: "https://www.youtube.com/embed/2Vv-BfVoq4g" },
  ];

  return (
    <section className="py-16 bg-[#0B0A0F] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Our <span className="text-purple-600">Sponsors</span>
      </motion.h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          speed: 8000,
        }}
        loop={true}
        speed={2000} // SMOOTH MOVEMENT
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <div className="flip-container w-full h-64 cursor-pointer">
              <div className="flip-card">
                
                {/* Front Side */}
                <div className="flip-front rounded-2xl overflow-hidden">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side (Video) */}
                <div className="flip-back rounded-2xl overflow-hidden bg-black">
                  <iframe
                    className="w-full h-full"
                    src={sponsor.video}
                    title={sponsor.name}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Card Flip Animation Styles */}
      <style>{`
        .flip-container {
          perspective: 1000px;
        }
        .flip-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s ease;
        }
        .flip-container:hover .flip-card {
          transform: rotateY(-180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default SponsorsSwiper;
