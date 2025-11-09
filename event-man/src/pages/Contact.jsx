import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>


      <p className="text-gray-400 max-w-lg text-center">
        Have any questions? We'd love to hear from you!  
        Fill out the contact form below or email us at 
        <span className="text-purple-400"> hello@monksevent.com</span>.
      </p>
    </div>
  );
};

export default Contact;
