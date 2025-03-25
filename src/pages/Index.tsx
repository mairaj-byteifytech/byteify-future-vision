import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import About from '../components/sections/About';
import CaseStudies from '../components/sections/CaseStudies';
import { Button } from '../components/ui/button';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Offset for fixed header
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <About />
        <CaseStudies />
        
        {/* Call to Action Section */}
        <section className="section-padding bg-gradient-to-r from-byteify-dark to-byteify-darker text-white">
          <div className="byteify-container text-center max-w-4xl mx-auto">
            <h2 className="section-title mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg mb-10 text-white/80">
              Get in touch with our team to discover how Byteify's innovative AI solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
