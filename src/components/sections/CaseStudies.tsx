
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Automation',
      client: 'Global Retail Corporation',
      description: 'Implemented an agentic AI solution that reduced customer response time by 78% and increased satisfaction scores by 45%.',
      results: [
        '78% reduction in response time',
        '45% increase in customer satisfaction',
        '30% decrease in operational costs',
        '3.2 million annual savings'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Intelligent Supply Chain Optimization',
      client: 'Manufacturing Enterprise',
      description: 'Developed a predictive AI system that optimized inventory and logistics, resulting in a 23% efficiency improvement.',
      results: [
        '23% efficiency improvement',
        '15% reduction in inventory costs',
        '32% decrease in shipping delays',
        '18% increase in on-time deliveries'
      ],
      image: 'https://images.unsplash.com/photo-1566661756941-20071fbe9c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Mobile Banking AI Assistant',
      client: 'International Financial Services',
      description: 'Created an AI-powered mobile banking assistant that handles 65% of customer inquiries and increased mobile engagement by 52%.',
      results: [
        '65% of inquiries handled by AI',
        '52% increase in mobile engagement',
        '41% reduction in call center volume',
        '2.8x increase in user satisfaction'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
    }
  ];
  
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % caseStudies.length);
  };
  
  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + caseStudies.length) % caseStudies.length);
  };
  
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };
  
  const clientLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Adobe_Systems_logo_and_wordmark.svg/800px-Adobe_Systems_logo_and_wordmark.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png'
  ];

  return (
    <section id="case-studies" className="section-padding bg-byteify-dark text-white">
      <div className="byteify-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-byteify-accent/30 rounded-full text-sm font-medium text-byteify-accent mb-4">
            Case Studies
          </div>
          <h2 className="section-title">Success Stories from Our Clients</h2>
          <p className="section-subtitle text-byteify-gray">
            Discover how our innovative AI solutions have transformed businesses across industries, delivering measurable results and long-term value.
          </p>
        </div>

        {/* Case Studies Slider */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-2 text-byteify-accent font-medium">
                        {study.client}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {study.title}
                      </h3>
                      <p className="text-byteify-gray mb-6">
                        {study.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-byteify-accent mr-2"></div>
                            <div className="text-sm text-white">{result}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <Button>
                          Read Full Case Study
                        </Button>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-byteify-accent' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-10">Trusted by Leading Companies Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Client logo" 
                  className="h-10 max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
