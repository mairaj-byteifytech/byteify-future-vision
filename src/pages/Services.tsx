
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Solutions from '../components/sections/Solutions';
import About from '../components/sections/About';
import CaseStudies from '../components/sections/CaseStudies';
import CallToAction from '../components/sections/CallToAction';
import { Button } from '../components/ui/button';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-byteify-dark">
        <Navbar />
        
        <section className="pt-20 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-byteify-accent rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-byteify-accent rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="byteify-container relative z-10 py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Explore our comprehensive suite of AI and software development services designed to drive innovation and growth for your business.
              </p>
              <Button size="lg" variant="primary" className="mt-8">Get Started Today</Button>
            </div>
          </div>
        </section>
      </div>

      <main className="flex-grow">
        <section className="section-padding">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">AI Solutions</h2>
              <p className="section-subtitle">
                Harness the power of artificial intelligence to optimize your business processes, gain actionable insights, and create new opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Solutions Cards */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=800&h=450"
                    alt="AI Consulting"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI Consulting</h3>
                  <p className="text-byteify-gray text-sm">
                    Strategic guidance to identify and implement AI solutions tailored to your specific business needs.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-464c4c690144?fit=crop&w=800&h=450"
                    alt="Machine Learning"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                  <p className="text-byteify-gray text-sm">
                    Custom machine learning models to automate tasks, predict outcomes, and improve decision-making.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1542831323-539828069470?fit=crop&w=800&h=450"
                    alt="Natural Language Processing"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Natural Language Processing</h3>
                  <p className="text-byteify-gray text-sm">
                    Advanced NLP solutions to understand and generate human language for chatbots, content analysis, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="primary" className="mt-4">View All Services</Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Software Development</h2>
              <p className="section-subtitle">
                Custom software solutions designed to meet your unique business requirements and drive digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Software Development Cards */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1517245386804-bb43f63fb1ee?fit=crop&w=800&h=450"
                    alt="Web Application Development"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Web Application Development</h3>
                  <p className="text-byteify-gray text-sm">
                    Scalable and secure web applications built with the latest technologies to enhance user experience and drive business growth.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1555057326-41c388c7c454?fit=crop&w=800&h=450"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
                  <p className="text-byteify-gray text-sm">
                    Native and cross-platform mobile apps for iOS and Android to reach your customers on the go.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1583508915404-24c824541f27?fit=crop&w=800&h=450"
                    alt="Enterprise Software Solutions"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise Software Solutions</h3>
                  <p className="text-byteify-gray text-sm">
                    Custom enterprise software to streamline operations, improve collaboration, and enhance productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
