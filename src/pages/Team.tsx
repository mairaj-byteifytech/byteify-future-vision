
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';

const Team = () => {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Team</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Meet the passionate professionals behind Byteify's innovative solutions
              </p>
              <Button size="lg" variant="primary" className="mt-8">Join Our Team</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Message from Founder Section */}
      <section className="section-padding bg-white">
        <div className="byteify-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-byteify-accent"></div>
                <img 
                  src="/lovable-uploads/a543ea17-1390-4dd5-bd03-f53c96bb0060.png" 
                  alt="Muhammad Afroz Khan" 
                  className="absolute inset-0 w-full h-full object-cover rounded-full p-1"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Message from the Founder</h2>
              <div className="space-y-4 text-byteify-gray">
                <p>Byteify was never just about writing code—it's about building impact. We turn ambitious ideas into powerful digital solutions that don't just meet industry standards but redefine them.</p>
                <p>In a world where technology moves fast, we move faster. Our focus isn't just on building software—it's on engineering growth, optimizing efficiency, and creating products that give businesses an undeniable edge.</p>
                <p>We don't chase trends. We build what lasts. If you're ready to create something game-changing, let's talk.</p>
                <div className="pt-4">
                  <p className="font-semibold text-byteify-dark">Muhammad Afroz Khan</p>
                  <p className="text-sm">Founder & Director, Byteify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="byteify-container">
          <h2 className="section-title text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/lovable-uploads/a543ea17-1390-4dd5-bd03-f53c96bb0060.png" alt="Muhammad Afroz Khan" />
                    <AvatarFallback>MAK</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>Muhammad Afroz Khan</CardTitle>
                <CardDescription>Founder & Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-byteify-gray">
                  Visionary leader with expertise in AI and software development, driving innovation and strategic growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="" alt="Team Member" />
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>Team Member</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-byteify-gray">
                  Leading our technical initiatives with a focus on cutting-edge AI solutions and innovative development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="" alt="Team Member" />
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>Team Member</CardTitle>
                <CardDescription>Head of Operations</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-byteify-gray">
                  Ensuring smooth daily operations and efficient project delivery with exceptional attention to detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
