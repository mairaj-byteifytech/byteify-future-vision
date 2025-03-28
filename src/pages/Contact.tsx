import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const offices = [
    {
      city: 'Karachi',
      address: 'Karachi, Pakistan',
      phone: '0322 8208580',
      email: 'info@byteify.technology',
      hours: 'Mon-Fri: 9AM - 6PM PKT'
    },
    {
      city: 'San Francisco',
      address: '123 AI Boulevard, San Francisco, CA 94105',
      phone: '0322 8208580',
      email: 'info@byteify.technology',
      hours: 'Mon-Fri: 9AM - 6PM PST'
    },
    {
      city: 'London',
      address: '789 Digital Street, London, EC2A 4RR',
      phone: '0322 8208580',
      email: 'info@byteify.technology',
      hours: 'Mon-Fri: 9AM - 6PM GMT'
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);
    
    try {
      // Simulate email sending - in a real application, you would use an email API here
      console.log('Sending email to info@byteify.technology', formProps);
      
      // Simulate a delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Get in touch with our team to discuss how we can help transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="section-padding bg-white">
          <div className="byteify-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-byteify-gray mb-8">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name*
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button type="submit" size="lg" className="w-full bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                  <p className="text-byteify-gray mb-8">
                    Visit us at one of our global offices or reach out via phone or email.
                  </p>
                  
                  <div className="space-y-8">
                    {offices.map((office, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-byteify-accent-dark mt-1 mr-3" />
                            <span>{office.address}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-byteify-accent-dark mr-3" />
                            <span>{office.phone}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-byteify-accent-dark mr-3" />
                            <a href={`mailto:${office.email}`} className="text-byteify-dark hover:text-byteify-accent-dark">
                              {office.email}
                            </a>
                          </div>
                          
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-byteify-accent-dark mr-3" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-byteify-accent/10 rounded-xl p-6 border border-byteify-accent/30">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="h-6 w-6 text-byteify-accent-dark mr-3" />
                      <h3 className="text-xl font-bold">Live Chat Support</h3>
                    </div>
                    <p className="text-byteify-gray mb-4">
                      Need immediate assistance? Chat with our AI assistant or request to speak with a human agent.
                    </p>
                    <Button className="w-full bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Find Us</h2>
              <p className="section-subtitle">
                Our headquarters and regional offices around the world.
              </p>
            </div>
            
            <div className="aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden">
              {/* Placeholder for an actual map integration */}
              <div className="w-full h-full bg-byteify-dark opacity-10 flex items-center justify-center">
                <p className="text-2xl font-bold text-byteify-dark">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="byteify-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find quick answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
                <p className="text-byteify-gray">
                  Project timelines vary based on complexity and scope. A simple application might take 4-8 weeks, while enterprise solutions can range from 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-2">What industries do you specialize in?</h3>
                <p className="text-byteify-gray">
                  We have experience across multiple industries including finance, healthcare, retail, manufacturing, and education. Our solutions are adaptable to any sector that can benefit from AI and software optimization.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-2">Do you offer ongoing support after project completion?</h3>
                <p className="text-byteify-gray">
                  Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. These range from basic technical support to comprehensive managed services with regular updates and enhancements.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-2">How do you approach data security and privacy?</h3>
                <p className="text-byteify-gray">
                  We implement industry-leading security practices and comply with relevant regulations such as GDPR and CCPA. Our development process includes security assessments, encryption, secure authentication, and regular security audits.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
