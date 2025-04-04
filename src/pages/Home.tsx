
import React from 'react';
import Navbar from '../components/layout/Navbar-V';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import About from '../components/sections/About';
import CaseStudies from '../components/sections/CaseStudies';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-byteify-dark">
        <Navbar />
        <Hero />
      </div>
      
      
      <main className="flex-grow">
        <Solutions />
        <About />
        <CaseStudies />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
