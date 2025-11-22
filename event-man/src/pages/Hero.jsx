import React, { forwardRef, useState } from 'react';
import marco from "../assets/images/marco.jpg";
import Rectangle from "../assets/images/Rectangle 30.png";

const Hero = forwardRef((props, ref) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 120;

  const schedules = [
    { id: 1, time: "10:00 AM", event: "Opening Ceremony", speaker: "John Doe" },
    { id: 2, time: "11:30 AM", event: "AI & Future Talk", speaker: "Dr. Alice Smith" },
    { id: 3, time: "2:00 PM", event: "Networking Session", speaker: "Industry Experts" },
    { id: 4, time: "4:00 PM", event: "Product Showcase", speaker: "Tech Teams" },
  ];

  // Ticket page
  if (showTicket) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#0B0A0F] text-white px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">Buy Your Ticket 🎟️</h2>
        <div className="bg-[#151320] w-full max-w-md rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.6)] p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-2">Tech Innovation Event 2025</h3>
          <p className="text-gray-400 mb-4">15–17 December • National IT Hall</p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg">Price per Ticket:</span>
            <span className="font-bold text-yellow-400">${ticketPrice}</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg">Select Quantity:</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setTicketCount(Math.max(1, ticketCount - 1))} className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">-</button>
              <span className="text-lg font-semibold">{ticketCount}</span>
              <button onClick={() => setTicketCount(ticketCount + 1)} className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6 border-t border-gray-700 pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl text-purple-400 font-bold">${(ticketCount * ticketPrice).toFixed(2)}</span>
          </div>
          <button className="w-full bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Confirm Purchase</button>
          <button onClick={() => setShowTicket(false)} className="w-full mt-4 border border-gray-500 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition">← Back to Home</button>
        </div>
      </section>
    );
  }

  // Schedule page
  if (showSchedule) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#0B0A0F] text-white pt-24 pb-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400 text-center">Event Schedule</h2>
        <div className="w-full max-w-3xl bg-[#151320] rounded-xl shadow-lg p-4 sm:p-6">
          {schedules.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-700 py-3 text-center sm:text-left">
              <span className="text-yellow-400 font-semibold">{item.time}</span>
              <span className="text-lg">{item.event}</span>
              <span className="text-gray-400 text-sm">{item.speaker}</span>
            </div>
          ))}
        </div>
        <button onClick={() => setShowSchedule(false)} className="mt-10 bg-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">← Back to Home</button>
      </section>
    );
  }

  // Original Hero
  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center pt-24 pb-10 relative overflow-hidden bg-[#0B0A0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 leading-tight">Tech Innovation Event 2025</h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">Unveiling breakthrough technologies and networking opportunities for industry pioneers.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => setShowTicket(true)} className="bg-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">Buy Tickets</button>
            <button onClick={() => setShowSchedule(true)} className="border border-gray-400 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-800 transition">See Schedule</button>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end items-center mt-10 md:mt-0">
          <div className="absolute -top-8 -right-8 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-gradient-to-tr from-yellow-500 via-purple-700 to-yellow-500 rounded-full blur-[100px] md:blur-[120px] opacity-60"></div>
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-[0_0_30px_5px_rgba(147,51,234,0.6)] rotate-[-6deg]">
            <img src={marco} alt="Speaker 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-[0_0_25px_4px_rgba(255,255,0,0.6)] rotate-[8deg] translate-x-6 sm:translate-x-10 translate-y-6 sm:translate-y-10 border-4 border-[#0B0A0F]">
            <img src={Rectangle} alt="Speaker 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
