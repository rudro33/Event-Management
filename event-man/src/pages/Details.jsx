// Details.jsx
import React from "react";
import SampleImage from "../assets/images/Rectangle 77.png";

const Details = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-white flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold text-center">Event Details</h1>
      <p className="text-gray-600 text-center max-w-2xl">
        Here you can describe the event in detail. Add any important information or description that attendees might need.
      </p>
      <img
        src={SampleImage}
        alt="Event"
        className="w-full max-w-xl rounded-xl shadow-lg object-cover"
      />
      <button className="btn btn-primary mt-4 hover:shadow-lg transition-shadow duration-300">
        Register Now
      </button>
    </section>
  );
};

export default Details;
