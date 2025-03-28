
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-r from-byteify-dark to-byteify-darker text-white">
      <div className="byteify-container text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-10 text-white/80">
            Get in touch with our team to discover how Byteify's innovative AI solutions can drive growth, efficiency, and competitive advantage for your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light"
              onClick={() => navigate('/demo-schedule')}
            >
              Schedule a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/sales-contact')}
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
