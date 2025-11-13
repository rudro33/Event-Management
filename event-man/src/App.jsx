import { useRef, useState } from 'react';
import Navbar from './component/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Prebook from './pages/Prebook';
import SingleEvent from './pages/SingleEvent';
import Actions from './pages/Actions';
import Footer from './pages/Footer';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const prebookRef = useRef(null);
  const videoRef = useRef(null);
  const footerRef = useRef(null);

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-[#0B0A0F] text-white">
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        prebookRef={prebookRef}
        videoRef ={videoRef}
        footerRef={footerRef}
      />

      <Hero ref={homeRef} />
      <Prebook ref={prebookRef} onViewDetails={(event) => setSelectedEvent(event)} />
      {selectedEvent && <SingleEvent event={selectedEvent} onBack={() => setSelectedEvent(null)} />}
      <About ref={aboutRef} />
      <Actions ref={videoRef}/>
      <Contact ref={contactRef} />
      <Footer ref={footerRef}/>
      
    </div>
  );
};

export default App;
