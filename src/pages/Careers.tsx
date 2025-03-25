
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Code, Database, Bot, Globe, DollarSign, Clock, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = ['All', 'Engineering', 'AI Research', 'Product', 'Design', 'Marketing', 'Sales', 'Operations'];
  const locations = ['All', 'San Francisco', 'New York', 'London', 'Berlin', 'Singapore', 'Remote'];

  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      description: 'Join our AI team to develop cutting-edge machine learning models and implement intelligent solutions for our clients.',
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build robust, scalable web applications using modern frameworks and best practices in software development.',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time',
      description: 'Create intuitive, engaging user experiences for our AI-powered applications and enterprise solutions.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'London',
      type: 'Full-time',
      description: 'Lead the development of innovative products from conception to launch, working closely with engineering and design teams.',
    },
    {
      title: 'Machine Learning Researcher',
      department: 'AI Research',
      location: 'San Francisco',
      type: 'Full-time',
      description: 'Conduct research on advanced AI techniques and develop algorithms to solve complex business problems.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Berlin',
      type: 'Full-time',
      description: 'Build and maintain our cloud infrastructure, ensuring reliability, security, and performance.',
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Drive business growth by identifying and qualifying new sales opportunities for our AI and software solutions.',
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and execute marketing campaigns that showcase our innovative technology and expertise.',
    },
  ];

  const filteredJobs = jobOpenings.filter(job => {
    if (selectedDepartment !== 'All' && job.department !== selectedDepartment) return false;
    if (selectedLocation !== 'All' && job.location !== selectedLocation) return false;
    return true;
  });

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&h=800',
      bio: 'Former Head of AI Research at a leading tech company with a Ph.D. in Machine Learning from Stanford University.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800',
      bio: 'Veteran software architect with 20+ years of experience building enterprise systems and cloud infrastructure.',
    },
    {
      name: 'Aisha Johnson',
      role: 'VP of Product',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=800&h=800',
      bio: 'Product visionary who has led the development of multiple award-winning software platforms and AI applications.',
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=800&h=800',
      bio: 'Engineering leader with expertise in building high-performance teams and scalable systems architecture.',
    },
  ];

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Build the future of AI and software solutions with talented individuals from around the world.
              </p>
              <Button size="lg" variant="default" className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
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

        {/* Our Team */}
        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Meet Our Leadership</h2>
              <p className="section-subtitle">
                Get to know the experienced professionals guiding our vision and strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-byteify-accent-dark font-medium mb-3">{member.role}</p>
                    <p className="text-byteify-gray text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-byteify-accent text-byteify-dark hover:bg-byteify-accent/10">
                View Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
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

        {/* Open Positions */}
        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Open Positions</h2>
              <p className="section-subtitle">
                Explore current opportunities to join our team and make an impact.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[250px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1 min-w-[250px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job listings */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center text-byteify-gray">
                              <Briefcase className="h-4 w-4 mr-1" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center text-byteify-gray">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{job.location}</span>
                            </div>
                            <div className="text-byteify-gray">
                              {job.type}
                            </div>
                          </div>
                          <p className="text-byteify-gray mb-4">{job.description}</p>
                        </div>
                        
                        <Button className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light whitespace-nowrap">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-lg text-byteify-gray">No positions matching your criteria. Please try different filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
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
                  {[
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
                      description: 'If selected, you'll receive an offer and begin our comprehensive onboarding process.'
                    }
                  ].map((step, index) => (
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

        {/* Call to Action */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
