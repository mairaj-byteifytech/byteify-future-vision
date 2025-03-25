
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Bot, Code, Database, Briefcase, Zap, Globe, Server, Shield, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';

const Services = () => {
  const aiServices = [
    {
      icon: Bot,
      title: 'Agentic AI',
      description: 'Autonomous AI agents that act on your behalf to solve complex problems and make intelligent decisions.',
    },
    {
      icon: Zap,
      title: 'AI-Powered Applications',
      description: 'Custom applications that leverage machine learning and natural language processing to deliver intelligent functionality.',
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Advanced predictive models that analyze historical data to forecast future trends and outcomes.',
    }
  ];

  const developmentServices = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end development services for web and mobile applications using the latest technologies and frameworks.',
    },
    {
      icon: Server,
      title: 'Cloud Solutions',
      description: 'Scalable, secure cloud-based applications and infrastructure tailored to your specific business needs.',
    },
    {
      icon: Globe,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
    }
  ];

  const enterpriseServices = [
    {
      icon: Database,
      title: 'Custom CRM Systems',
      description: 'Tailored customer relationship management solutions designed to optimize your sales and service processes.',
    },
    {
      icon: Briefcase,
      title: 'Enterprise Portals',
      description: 'Secure, scalable portals that streamline communication, collaboration, and data sharing across your organization.',
    },
    {
      icon: Shield,
      title: 'Workflow Automation',
      description: 'AI-driven automation solutions that eliminate repetitive tasks and optimize complex business processes.',
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered CRM for Global Financial Firm',
      category: 'Financial Services',
      description: 'Developed a custom CRM with AI-driven insights that increased sales productivity by 40% and improved customer retention by 25%.',
      result: '40% increase in productivity',
    },
    {
      title: 'Automated Workflow System for Healthcare Provider',
      category: 'Healthcare',
      description: 'Implemented an intelligent workflow automation system that reduced administrative time by 60% and improved patient care coordination.',
      result: '60% reduction in administrative time',
    },
    {
      title: 'Mobile App for Retail Chain with Predictive Analytics',
      category: 'Retail',
      description: 'Created a customer-facing mobile application with predictive inventory management, resulting in 35% higher customer satisfaction and 20% reduced stock-outs.',
      result: '35% higher customer satisfaction',
    }
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services & Solutions</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Cutting-edge AI and software solutions tailored to your business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="section-padding bg-white">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-4">
                AI Solutions
              </div>
              <h2 className="section-title">Intelligent AI Technologies</h2>
              <p className="section-subtitle">
                Harness the power of artificial intelligence to transform your business operations and customer experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="bg-byteify-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-byteify-accent-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-byteify-gray mb-6">{service.description}</p>
                    <a href="#" className="text-byteify-dark font-medium hover:text-byteify-accent-dark flex items-center">
                      Learn more
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Services */}
        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-4">
                Development Services
              </div>
              <h2 className="section-title">Custom Software Development</h2>
              <p className="section-subtitle">
                End-to-end development services for web, mobile, and enterprise applications that drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {developmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="bg-byteify-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-byteify-accent-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-byteify-gray mb-6">{service.description}</p>
                    <a href="#" className="text-byteify-dark font-medium hover:text-byteify-accent-dark flex items-center">
                      Learn more
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="section-padding bg-white">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-4">
                Enterprise Solutions
              </div>
              <h2 className="section-title">Enterprise-Grade Applications</h2>
              <p className="section-subtitle">
                Scalable, secure, and customizable solutions designed to optimize your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="bg-byteify-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-byteify-accent-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-byteify-gray mb-6">{service.description}</p>
                    <a href="#" className="text-byteify-dark font-medium hover:text-byteify-accent-dark flex items-center">
                      Learn more
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-byteify-dark text-white">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Success Stories</h2>
              <p className="section-subtitle text-white/80">
                See how our solutions have transformed businesses across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-byteify-accent font-medium text-sm mb-4">{caseStudy.category}</div>
                  <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-white/80 mb-6">{caseStudy.description}</p>
                  <div className="bg-byteify-accent/20 px-4 py-3 rounded-lg text-byteify-accent font-bold">
                    {caseStudy.result}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="default" className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-byteify-dark to-byteify-darker text-white">
          <div className="byteify-container text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-10 text-white/80">
              Get in touch with our team to discuss how our AI-powered solutions can address your unique business challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
