
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Heart, Globe } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Salary packages that recognize your skills and experience, including equity options.',
  },
  {
    icon: Heart,
    title: 'Comprehensive Healthcare',
    description: 'Full medical, dental, and vision coverage for you and your dependents.',
  },
  {
    icon: Clock,
    title: 'Flexible Working',
    description: 'Flexible hours and remote work options to support your optimal work-life balance.',
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Potential for international assignments and travel across our global offices.',
  },
];

const CompanyBenefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="byteify-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Benefits & Perks</h2>
          <p className="section-subtitle">
            We believe in taking care of our team with comprehensive benefits and a supportive work environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 bg-byteify-accent/20 w-12 h-12 rounded-full flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-byteify-accent-dark" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-byteify-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
