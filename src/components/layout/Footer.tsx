import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    solutions: [
      { name: 'AI Software', href: '#' },
      { name: 'Agentic AI', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Enterprise Solutions', href: '#' },
      { name: 'Custom Development', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];
  
  const contactInfo = [
    { icon: Mail, text: 'info@byteify.technology' },
    { icon: Phone, text: '0322 8208580' },
    { icon: MapPin, text: 'Karachi, Pakistan' },
  ];
  
  return (
    <footer className="bg-byteify-dark text-white">
      <div className="byteify-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute top-0 left-0 w-3 h-3 bg-byteify-accent rounded-sm"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-byteify-accent rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Byteify</span>
            </div>
            <p className="text-byteify-gray mb-6 max-w-md">
              Empowering businesses with intelligent AI solutions. We specialize in agentic AI and mobile applications with a global presence.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-byteify-gray hover:text-byteify-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center text-byteify-gray">
                  <item.icon className="h-4 w-4 mr-2" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-byteify-gray hover:text-byteify-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-byteify-gray hover:text-byteify-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-byteify-gray hover:text-byteify-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-byteify-gray">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Byteify. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-byteify-accent transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
