
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Bot } from 'lucide-react';

const CompanyValues = () => {
  return (
    <section className="section-padding bg-white">
      <div className="byteify-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Why Join Byteify?</h2>
          <p className="section-subtitle">
            We're building a team of exceptional individuals who are passionate about creating innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 mx-auto bg-byteify-accent/20 w-16 h-16 rounded-full flex items-center justify-center">
              <Code className="h-8 w-8 text-byteify-accent-dark" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cutting-Edge Technology</h3>
            <p className="text-byteify-gray">
              Work with the latest technologies and contribute to innovative solutions that are transforming industries.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 mx-auto bg-byteify-accent/20 w-16 h-16 rounded-full flex items-center justify-center">
              <Database className="h-8 w-8 text-byteify-accent-dark" />
            </div>
            <h3 className="text-xl font-bold mb-4">Challenging Projects</h3>
            <p className="text-byteify-gray">
              Tackle complex problems and develop solutions that have real-world impact across diverse industries.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 mx-auto bg-byteify-accent/20 w-16 h-16 rounded-full flex items-center justify-center">
              <Bot className="h-8 w-8 text-byteify-accent-dark" />
            </div>
            <h3 className="text-xl font-bold mb-4">Growth Opportunities</h3>
            <p className="text-byteify-gray">
              Continuous learning and career advancement in a rapidly evolving field at the intersection of AI and software.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
