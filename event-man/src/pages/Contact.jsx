


import React, { useState, forwardRef } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setAlert("warning");
      return;
    }
    setAlert("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-[#0B0A0F] flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-4xl font-bold mb-4 text-center">Get in <span className="text-purple-600">Touch</span></h2>
      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Have questions, ideas, or collaboration plans? Drop a message or connect with us on social media!
      </p>

      {alert === "success" && (
        <div role="alert" className="alert alert-success mb-6 w-full max-w-lg shadow-md">
          <span>Your message has been sent successfully!</span>
        </div>
      )}
      {alert === "warning" && (
        <div role="alert" className="alert alert-warning mb-6 w-full max-w-lg shadow-md">
          <span>Warning: Please fill out all fields!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-amber-100 shadow-lg rounded-2xl p-8 w-full max-w-lg flex flex-col gap-5">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="input input-bordered w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="input input-bordered w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="textarea textarea-bordered w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
        <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)] hover:bg-purple-700 transition-all">Send Message</button>
      </form>

      <div className="flex gap-8 mt-10 text-3xl">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110"><FaFacebook /></a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition transform hover:scale-110"><FaYoutube /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition transform hover:scale-110"><FaInstagram /></a>
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition transform hover:scale-110"><FaGoogle /></a>
      </div>
    </section>
  );
});

export default Contact;
