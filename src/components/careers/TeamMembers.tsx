
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

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

const TeamMembers = () => {
  const navigate = useNavigate();
  
  return (
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
          <Button 
            variant="outline" 
            className="border-byteify-accent text-byteify-dark hover:bg-byteify-accent/10"
            onClick={() => navigate('/team')}
          >
            View Full Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
