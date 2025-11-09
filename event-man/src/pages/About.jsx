import Photo from "../assets/images/Photoone.jpg"
import Fest  from "../assets/images/fest.jpg"
import Consert from "../assets/images/Consert.jpg"

const About = () => {
  return (
    <section className="text-white bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">About The Event</h2>
        <p className="text-gray-600 mb-10">
          <span className="text-purple-600 font-semibold">Tech Event 2025</span> showcases groundbreaking innovations, featuring keynote talks, interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-purple-400 transition">
            <img src={Photo} alt="" className="object-cover w-full h-56" />
            <div className="p-4 text-right">
              <p className="text-gray-900">Memorable Experience</p>
              <h3 className="text-lg font-semibold text-gray-900">Unforgettable Moments at Eventive 2025</h3>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-purple-400 transition">
            <img src={Fest} alt="" className="object-cover w-full h-56" />
            <div className="p-4 text-right">
              <p className="text-gray-900">Festible Lighting</p>
              <h3 className="text-lg font-semibold text-gray-900">Storytelling Festival</h3>
            </div>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-purple-400 transition">
            <img src={Consert} alt="" className="object-cover w-full h-56" />
            <div className="p-4 text-right">
              <p className="text-gray-900">Tech Venu</p>
              <h3 className="text-lg font-semibold text-gray-900">Enjoy Tech Venue</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
