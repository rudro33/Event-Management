import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState(null); // success / warning

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.message) {
      setAlert("warning");
      return;
    }

    // Show success alert
    setAlert("success");

    // Reset form after success
    setFormData({ name: "", email: "", message: "" });

    // Auto hide alert after 3s
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Get in <span className="text-purple-600">Touch</span>
      </h2>
      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Have questions, ideas, or collaboration plans? Drop a message or connect
        with us on social media!
      </p>

      {/* ===== Alert Messages ===== */}
      {alert === "success" && (
        <div
          role="alert"
          className="alert alert-success mb-6 w-full max-w-lg shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent successfully!</span>
        </div>
      )}

      {alert === "warning" && (
        <div
          role="alert"
          className="alert alert-warning mb-6 w-full max-w-lg shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Please fill out all fields!</span>
        </div>
      )}

      {/* ===== Contact Form ===== */}
      <form
        onSubmit={handleSubmit}
        className="bg-amber-100 shadow-lg rounded-2xl p-8 w-full max-w-lg flex flex-col gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)] hover:bg-purple-700 transition-all"
        >
          Send Message
        </button>
      </form>

      {/* ===== Social Media Icons ===== */}
      <div className="flex gap-8 mt-10 text-3xl">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition transform hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition transform hover:scale-110"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition transform hover:scale-110"
        >
          <FaGoogle />
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} — Built with  by SimplyBook Team
      </p>
    </section>
  );
});

export default Contact;
