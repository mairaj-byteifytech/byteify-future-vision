
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

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <CareersHero />
        <CompanyValues />
        <TeamMembers />
        <CompanyBenefits />
        <JobOpenings />
        <HiringProcess />
        <CareersCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
