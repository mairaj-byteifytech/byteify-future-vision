
import React from 'react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

const CareersHero = () => {
  const navigate = useNavigate();
  
  const scrollToJobOpenings = () => {
    const jobOpeningsSection = document.querySelector('.section-padding.bg-gray-50');
    if (jobOpeningsSection) {
      jobOpeningsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative bg-byteify-dark text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-byteify-accent rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-byteify-accent rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="byteify-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-10 text-white/80">
            Build the future of AI and software solutions with talented individuals from around the world.
          </p>
          <Button 
            size="lg" 
            variant="primary"

            className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light"
            onClick={scrollToJobOpenings}
          >
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
