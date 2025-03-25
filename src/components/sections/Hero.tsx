
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const particles = heroRef.current.querySelectorAll<HTMLDivElement>('.particle');
      particles.forEach((particle, index) => {
        const factor = (index % 3) + 1;
        const xMove = (x - 0.5) * factor * 20;
        const yMove = (y - 0.5) * factor * 20;
        
        particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="min-h-screen w-full flex items-center pt-20 overflow-hidden relative bg-white" ref={heroRef}>
      {/* Abstract particles/shapes for interactive background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-byteify-accent/10 blur-3xl transition-transform duration-500 ease-out"></div>
        <div className="particle absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl transition-transform duration-700 ease-out"></div>
        <div className="particle absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-purple-500/5 blur-2xl transition-transform duration-1000 ease-out"></div>
      </div>
      
      <div className="byteify-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <div className="bg-byteify-accent/20 text-byteify-dark px-4 py-1 rounded-full inline-flex items-center mb-6 font-medium">
                <span className="w-2 h-2 bg-byteify-accent rounded-full mr-2"></span>
                Next Generation AI Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-byteify-dark">
                Empowering the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-byteify-accent to-byteify-accent-dark">Intelligent AI</span> Solutions
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-byteify-gray max-w-xl">
              Leading the innovation in agentic AI and mobile applications with global reach. Transform your business with our cutting-edge AI technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" withArrow>
                Explore AI Innovations
              </Button>
              <Button size="lg" variant="outline">
                Talk to an Expert
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-3 gap-4">
              {[
                { number: '100+', label: 'Global Clients' },
                { number: '50+', label: 'AI Solutions' },
                { number: '10+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-byteify-dark">{stat.number}</div>
                  <div className="text-sm text-byteify-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
              {/* Main circular element */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-byteify-light rounded-full border border-gray-100 shadow-lg"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-byteify-accent rounded-full animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-byteify-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-byteify-accent rounded-sm animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Central glowing element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 bg-gradient-to-tr from-byteify-accent to-byteify-accent-light rounded-full animate-pulse-subtle shadow-[0_0_40px_rgba(208,255,79,0.5)]"></div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
              
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating card elements */}
            <div className="absolute top-1/4 -left-8 p-4 glass-card rounded-lg bg-white/90 shadow-lg max-w-[200px] animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="font-medium mb-1">AI Automation</div>
              <div className="text-sm text-byteify-gray">Streamline your workflow</div>
            </div>
            
            <div className="absolute bottom-1/4 -right-8 p-4 glass-card rounded-lg bg-white/90 shadow-lg max-w-[200px] animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="font-medium mb-1">Agentic AI</div>
              <div className="text-sm text-byteify-gray">Autonomous problem solving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
