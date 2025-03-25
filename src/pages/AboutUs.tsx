
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { MapPin, Award, Users, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';

const AboutUs = () => {
  const milestones = [
    { year: 2018, title: 'Foundation', description: 'Byteify was founded with a vision to transform businesses through AI and automation.' },
    { year: 2019, title: 'First AI Product', description: 'Launched our first AI-powered solution for enterprise workflow automation.' },
    { year: 2020, title: 'Global Expansion', description: 'Expanded our presence to Europe and Asia with new offices and partnerships.' },
    { year: 2022, title: 'Agentic AI Launch', description: 'Pioneered autonomous AI agents for business process optimization.' },
    { year: 2023, title: 'Enterprise Solutions', description: 'Delivered over 100 enterprise-grade custom portals and CRM systems.' },
    { year: 2024, title: 'AI Innovation Award', description: 'Recognized for our contributions to AI advancement in business applications.' },
  ];

  const locations = [
    { id: 1, city: 'San Francisco', country: 'USA', coordinates: { top: '30%', left: '20%' } },
    { id: 2, city: 'New York', country: 'USA', coordinates: { top: '35%', left: '25%' } },
    { id: 3, city: 'London', country: 'UK', coordinates: { top: '30%', left: '45%' } },
    { id: 4, city: 'Berlin', country: 'Germany', coordinates: { top: '32%', left: '48%' } },
    { id: 5, city: 'Singapore', country: 'Singapore', coordinates: { top: '55%', left: '75%' } },
    { id: 6, city: 'Tokyo', country: 'Japan', coordinates: { top: '40%', left: '82%' } },
    { id: 7, city: 'Sydney', country: 'Australia', coordinates: { top: '70%', left: '85%' } },
  ];

  const values = [
    { icon: Award, title: 'Excellence', description: 'We strive for excellence in every project, delivering solutions that exceed expectations.' },
    { icon: Users, title: 'Collaboration', description: 'We believe in the power of teamwork and partnership with our clients.' },
    { icon: BarChart, title: 'Innovation', description: 'We continuously explore new technologies and approaches to stay at the forefront.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-byteify-dark text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-byteify-accent rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-byteify-accent rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="byteify-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Byteify</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Pioneering the future of AI and software development to transform businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="section-padding bg-white">
          <div className="byteify-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-byteify-gray">
                  To empower organizations with cutting-edge AI and software solutions that drive efficiency, innovation, and growth in a rapidly evolving digital landscape.
                </p>
                <p className="text-lg text-byteify-gray">
                  We're committed to making advanced technology accessible and impactful for businesses of all sizes, helping them navigate the complexities of digital transformation.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-lg text-byteify-gray">
                  To be the global leader in intelligent software solutions, pioneering the integration of AI into everyday business operations and setting new standards for technological innovation.
                </p>
                <p className="text-lg text-byteify-gray">
                  We envision a world where intelligent automation enhances human potential, creating more efficient, creative, and fulfilling work environments across all industries.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">
                From our founding to becoming a global technology leader, our path has been defined by innovation and growth.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-byteify-accent/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={milestone.year}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-1'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                        <div className="text-byteify-accent font-bold text-2xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-byteify-gray">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-byteify-accent rounded-full border-4 border-white z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="section-padding bg-white">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Global Presence</h2>
              <p className="section-subtitle">
                With offices and partners across continents, we deliver solutions worldwide while maintaining localized expertise.
              </p>
            </div>

            <div className="relative aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden">
              {/* World map background */}
              <div className="absolute inset-0 bg-byteify-dark opacity-10 bg-[url('/world-map.svg')] bg-no-repeat bg-center bg-contain"></div>
              
              {/* Location pins */}
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  className="absolute"
                  style={{ top: location.coordinates.top, left: location.coordinates.left }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: location.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <MapPin className="text-byteify-accent h-8 w-8" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      <div className="bg-byteify-dark text-white px-3 py-1 rounded-md text-sm">
                        {location.city}, {location.country}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-byteify-dark text-white">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle text-white/80">
                The principles that guide our work and define our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-byteify-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-byteify-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="section-padding bg-gradient-to-r from-byteify-dark to-byteify-darker text-white">
          <div className="byteify-container text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Join Us in Shaping the Future</h2>
            <p className="text-lg mb-10 text-white/80">
              We're always looking for talented individuals to join our team and contribute to our mission of transforming businesses through technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
