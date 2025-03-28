
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CareersHero from '../components/careers/CareersHero';
import CompanyValues from '../components/careers/CompanyValues';
import TeamMembers from '../components/careers/TeamMembers';
import CompanyBenefits from '../components/careers/CompanyBenefits';
import JobOpenings from '../components/careers/JobOpenings';
import HiringProcess from '../components/careers/HiringProcess';
import CareersCTA from '../components/careers/CareersCTA';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <CareersHero />
        <CompanyValues />
        <TeamMembers />
        <CompanyBenefits />
        <div className="byteify-container py-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-byteify-gray mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Submit your application today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light"
              onClick={() => navigate('/join-our-team')}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/team')}
            >
              Meet Our Team
            </Button>
          </div>
        </div>
        <JobOpenings />
        <HiringProcess />
        <CareersCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
