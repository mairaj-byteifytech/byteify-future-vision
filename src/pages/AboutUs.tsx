import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import About from '../components/sections/About';
import TeamMembers from '../components/careers/TeamMembers';
import CompanyValues from '../components/careers/CompanyValues';
import { Button } from '../components/ui/button';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <About />
        <CompanyValues />
        <TeamMembers />
        
        <section className="section-padding bg-gray-50">
          <div className="byteify-container text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              To empower businesses with cutting-edge AI solutions that drive growth, efficiency, and competitive advantage.
            </p>
            <Button size="lg" variant="primary" className="mt-8">Learn More About Our Team</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
