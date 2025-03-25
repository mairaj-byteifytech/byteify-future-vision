
import React from 'react';
import { motion } from 'framer-motion';

const hiringSteps = [
  {
    number: 1,
    title: 'Application Review',
    description: 'Our recruitment team reviews your application and qualifications for the role.'
  },
  {
    number: 2,
    title: 'Initial Interview',
    description: 'A 30-45 minute call with a recruiter to discuss your experience and interest in the position.'
  },
  {
    number: 3,
    title: 'Technical Assessment',
    description: 'A skills assessment relevant to the role, such as a coding challenge or design exercise.'
  },
  {
    number: 4,
    title: 'Team Interviews',
    description: 'Meet with team members and potential colleagues to discuss technical skills and cultural fit.'
  },
  {
    number: 5,
    title: 'Final Interview',
    description: 'A conversation with a senior leader to discuss your career goals and alignment with our mission.'
  },
  {
    number: 6,
    title: 'Offer & Onboarding',
    description: "If selected, you'll receive an offer and begin our comprehensive onboarding process."
  }
];

const HiringProcess = () => {
  return (
    <section className="section-padding bg-white">
      <div className="byteify-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Hiring Process</h2>
          <p className="section-subtitle">
            We've designed a process that helps us get to know you while giving you insight into our company and the role.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 hidden sm:block"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {hiringSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start sm:items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-byteify-accent text-byteify-dark text-xl font-bold border-4 border-white">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-byteify-gray">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
