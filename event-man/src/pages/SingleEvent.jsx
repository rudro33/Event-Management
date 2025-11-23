import React from "react";

const SingleEvent = ({ event, onBack }) => {
  return (
    <section className="fixed inset-0 bg-[#0B0A0F] z-50 flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row bg-base-100/90 rounded-xl shadow-2xl w-full max-w-6xl h-screen overflow-hidden">
        {/* Left - Image */}
        <div className="md:w-1/2 h-72 md:h-full overflow-hidden">
          <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
        </div>

        {/* Right - Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">{event.name}</h2>
            <p className="text-yellow-400 mb-2">{event.rating} ★ Rating</p>
            <p className="text-gray-400 mb-4">Venue: {event.venue}</p>
            <p className="text-gray-300 mb-6">
              Rising artist and band Rafi Alam is set to release his first original EP album, “Mixtape,” on all digital streaming platforms, including Spotify, YouTube, iTunes, Amazon Music, etc., on February 12, 2025, right before the spring and Valentine's Day. The album has been produced by popular and renowned musician Raef Al Hasan Rafa from the band AvoidRafa.

              “Mixtape” features four tracks showcasing a variety of styles and themes, reminiscent of the mixed cassette tapes of the 90s.  The album is a gift to the audience, filled with authenticity and love, and designed to evoke a live music experience through its natural ambience.


            </p>
          </div>

          <button
            onClick={onBack}
            className="btn btn-error w-full mt-4"
          >
            Go back 
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleEvent;
