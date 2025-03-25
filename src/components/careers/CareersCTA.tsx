
import React from 'react';
import { Button } from '../../components/ui/button';

const CareersCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-byteify-dark to-byteify-darker text-white">
      <div className="byteify-container text-center max-w-3xl mx-auto">
        <h2 className="section-title mb-6">Ready to Make an Impact?</h2>
        <p className="text-lg mb-10 text-white/80">
          Join our team of innovators and help shape the future of AI and software development. Explore our open positions and apply today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
            View All Openings
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
