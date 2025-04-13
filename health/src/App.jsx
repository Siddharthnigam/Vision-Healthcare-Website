import React, { useState, useEffect } from 'react';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import './style.css';
import Navbar from './components/Header/Navbar';
import Front from './components/Front/Front';
import Service from './components/Services/Services';
import About from './components/AboutUs/About';
import Contact from './components/ContactUs/Contact';
import Sign from './components/Sign/Sign';
import Profile from './components/Sign/profile';
import Footer from './components/Footer/footer';
import Youtube from './components/Function/Youtube';
import Bmi from './components/Function/Bmi';
import Sql from './sql';
import Slider from './components/Front/slider';
import Loader from './components/Loader/Loader'; // Import the Loader component
import Ai from './components/Function/Ai';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or any other async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the loading duration as needed
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='w-full scroll-smooth min-h-screen text-white'>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/bmi" element={<Bmi />} />
            <Route path="/sql" element={<Sql />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
