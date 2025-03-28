
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Karachi, Pakistan',
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
    location: 'Karachi, Pakistan',
    type: 'Full-time',
    description: 'Create intuitive, engaging user experiences for our AI-powered applications and enterprise solutions.',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Karachi, Pakistan',
    type: 'Full-time',
    description: 'Lead the development of innovative products from conception to launch, working closely with engineering and design teams.',
  },
  {
    title: 'Machine Learning Researcher',
    department: 'AI Research',
    location: 'Karachi, Pakistan',
    type: 'Full-time',
    description: 'Conduct research on advanced AI techniques and develop algorithms to solve complex business problems.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain our cloud infrastructure, ensuring reliability, security, and performance.',
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Karachi, Pakistan',
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

const departments = ['All', 'Engineering', 'AI Research', 'Product', 'Design', 'Marketing', 'Sales', 'Operations'];
const locations = ['All', 'Karachi, Pakistan', 'Remote'];

const JobOpenings = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const navigate = useNavigate();

  const filteredJobs = jobOpenings.filter(job => {
    if (selectedDepartment !== 'All' && job.department !== selectedDepartment) return false;
    if (selectedLocation !== 'All' && job.location !== selectedLocation) return false;
    return true;
  });

  const handleApplyNow = (jobTitle) => {
    navigate('/join-our-team', { state: { preselectedPosition: jobTitle } });
  };

  return (
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
                    
                    <Button 
                      className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light whitespace-nowrap"
                      onClick={() => handleApplyNow(job.title)}
                    >
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

        {/* General application CTA */}
        <div className="mt-12 text-center">
          <p className="text-byteify-gray mb-6">Don't see a position that matches your skills? Submit a general application and we'll keep your resume on file.</p>
          <Button 
            className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light"
            onClick={() => navigate('/join-our-team')}
            size="lg"
          >
            Submit General Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
