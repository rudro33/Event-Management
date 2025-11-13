import React, { forwardRef, useState } from 'react';
import marco from "../assets/images/marco.jpg";
import Rectangle from "../assets/images/Rectangle 30.png";

const Hero = forwardRef((props, ref) => {
  const [showSchedule, setShowSchedule] = useState(false);

  // Example schedule data
  const schedules = [
    { id: 1, time: "10:00 AM", event: "Opening Ceremony", speaker: "John Doe" },
    { id: 2, time: "11:30 AM", event: "AI & Future Talk", speaker: "Dr. Alice Smith" },
    { id: 3, time: "2:00 PM", event: "Networking Session", speaker: "Industry Experts" },
    { id: 4, time: "4:00 PM", event: "Product Showcase", speaker: "Tech Teams" },
  ];

  // when "See Schedule" clicked
  if (showSchedule) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#0B0A0F] text-white pt-24 pb-10 px-6">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">Event Schedule</h2>
        <div className="w-full max-w-3xl bg-[#151320] rounded-xl shadow-lg p-6">
          {schedules.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-700 py-3"
            >
              <span className="text-yellow-400 font-semibold">{item.time}</span>
              <span className="text-lg">{item.event}</span>
              <span className="text-gray-400 text-sm">{item.speaker}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowSchedule(false)}
          className="mt-10 bg-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          ← Back to Home
        </button>
      </section>
    );
  }

  // Default Hero Section
  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center pt-24 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-sm text-gray-400 uppercase tracking-wider">
            15-17 December • National IT Hall
          </h3>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight">
            Tech Innovation Event 2025
          </h1>
          <p className="text-gray-400 mt-4">
            Unveiling breakthrough technologies and networking opportunities for industry pioneers.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
              Buy Tickets
            </button>
            <button
              onClick={() => setShowSchedule(true)}
              className="border border-gray-400 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              See Schedule
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end items-center">
          <div className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-tr from-yellow-500 via-purple-700 to-yellow-500 rounded-full blur-[120px] opacity-60"></div>

          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-[40px] overflow-hidden shadow-[0_0_30px_5px_rgba(147,51,234,0.6)] rotate-[-6deg]">
            <img src={marco} alt="Speaker 1" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-0 left-0 w-44 h-44 md:w-56 md:h-56 rounded-[40px] overflow-hidden shadow-[0_0_25px_4px_rgba(236,72,153,0.6)] rotate-[8deg] translate-x-10 translate-y-10 border-4 border-[#0B0A0F]">
            <img src={Rectangle} alt="Speaker 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
