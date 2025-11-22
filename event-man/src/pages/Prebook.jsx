import React, { forwardRef } from "react";
import Event1 from "../assets/images/first.jpg";
import Event2 from "../assets/images/sec.jpg";

const events = [
  { id: 1, name: "Concert Night", venue: "National IT Hall", image: Event1, rating: 4.5 },
  { id: 2, name: "Tech Gala", venue: "Grand Arena", image: Event2, rating: 4.0 },
];

const Prebook = forwardRef(({ onViewDetails }, ref) => {
  return (
    <section ref={ref} className="min-h-screen pt-24 pb-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-mon mb-8 text-center">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map(event => (
          <div key={event.id} className="bg-base-100 rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-purple-600 hover:ring-purple-600">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2"><span className="text-yellow-400 font-bold">{event.rating} ★</span></div>
              <h3 className="text-xl font-semibold mb-1">{event.name}</h3>
              <p className="text-gray-400 mb-4">{event.venue}</p>
              <button onClick={() => onViewDetails(event)} className="btn btn-primary w-full">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Prebook;
