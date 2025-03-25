import React from 'react';
import { Button } from '../ui/button';
import { Zap, Smartphone, Globe, Code, Database, ShieldCheck } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'AI Software',
      description: 'Powerful AI-driven software solutions to automate tasks, analyze data, and drive business insights.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
      hoverColor: 'group-hover:bg-blue-100'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Intelligent mobile apps that provide seamless experiences across platforms with advanced AI capabilities.',
      color: 'bg-green-50',
      iconColor: 'text-green-500',
      hoverColor: 'group-hover:bg-green-100'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your AI solutions worldwide with our expertise in multilingual and multicultural implementations.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-500',
      hoverColor: 'group-hover:bg-purple-100'
    },
    {
      icon: Code,
      title: 'Agentic AI',
      description: 'Autonomous AI agents that act on your behalf to solve complex problems and make intelligent decisions.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      hoverColor: 'group-hover:bg-yellow-100'
    },
    {
      icon: Database,
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI infrastructure and applications designed for enterprise-scale deployment and integration.',
      color: 'bg-red-50',
      iconColor: 'text-red-500',
      hoverColor: 'group-hover:bg-red-100'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: 'Built-in security protocols and compliance measures that protect your data and meet industry standards.',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-500',
      hoverColor: 'group-hover:bg-indigo-100'
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="byteify-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-4">
            Our Solutions
          </div>
          <h2 className="section-title">Cutting-Edge AI Solutions for Modern Challenges</h2>
          <p className="section-subtitle">
            Our suite of AI technologies is designed to address complex business problems with elegant, efficient solutions that adapt to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white border border-gray-100"
            >
              <div className={`${solution.color} p-6 transition-colors duration-300 ${solution.hoverColor}`}>
                <div className={`rounded-full w-12 h-12 flex items-center justify-center ${solution.iconColor} bg-white mb-4`}>
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-byteify-gray mb-4">{solution.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-byteify-dark font-medium hover:text-byteify-accent-dark"
                >
                  Learn more
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button>
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
