
import React from 'react';
import Button from '../ui/Button';

const About = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Byteify was founded with a vision to make AI accessible to businesses of all sizes.'
    },
    {
      year: '2016',
      title: 'First AI Product Launch',
      description: 'Released our first intelligent data analysis platform, serving over 50 enterprise clients.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, extending our reach to over 20 countries.'
    },
    {
      year: '2020',
      title: 'Agentic AI Development',
      description: 'Pioneered agentic AI technology, revolutionizing autonomous decision-making systems.'
    },
    {
      year: '2022',
      title: 'Mobile AI Platform',
      description: 'Launched our comprehensive mobile AI development platform for next-gen applications.'
    },
    {
      year: 'Today',
      title: 'Industry Leader',
      description: 'Recognized as an industry leader in AI innovation with a global presence.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Alex Rivera',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'James Wilson',
      role: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Maya Patel',
      role: 'VP of Product',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="byteify-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-4">
            About Us
          </div>
          <h2 className="section-title">Pioneering the Future of AI Technology</h2>
          <p className="section-subtitle">
            At Byteify, we're committed to pushing the boundaries of what's possible with artificial intelligence. Our journey is one of innovation, excellence, and global impact.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-byteify-gray mb-4">
              To create a world where AI empowers every business to achieve their fullest potential, making advanced technology accessible and beneficial for all.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block p-3 bg-green-100 rounded-lg text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-byteify-gray mb-4">
              To deliver innovative AI solutions that solve real-world problems, drive business transformation, and create lasting value for our clients across the globe.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-byteify-accent rounded-full"></div>
                  
                  <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                    <div className="md:w-1/2 p-4"></div>
                    <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                      <p className="text-byteify-gray">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      {['LinkedIn', 'Twitter', 'Email'].map((social, idx) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-byteify-gray">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button>
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
