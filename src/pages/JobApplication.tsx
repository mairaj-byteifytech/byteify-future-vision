
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

const JobApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const { jobTitle } = location.state || { jobTitle: 'Position' };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      // Log application data
      const applicationData = {
        jobTitle,
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        linkedin: formData.get('linkedin'),
        coverLetter: formData.get('coverLetter'),
        resume: resume ? resume.name : 'No resume uploaded',
      };
      
      // Output data for debugging
      console.log('Sending job application to info@byteify.technology', applicationData);
      
      // In a real implementation, you would send this to your backend/API
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll review your information and contact you if there's a match.",
      });
      
      // Navigate after successful submission
      setTimeout(() => navigate('/careers'), 1500);
    } catch (error) {
      console.error('Failed to submit application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow section-padding pt-32">
        <div className="byteify-container">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center"
            onClick={() => navigate('/careers')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Button>
          
          <h1 className="text-3xl font-bold mb-6">Apply for: {jobTitle}</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile (optional)</label>
                <input 
                  type="url" 
                  name="linkedin"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                <div 
                  className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
                  onClick={() => document.getElementById('resume')?.click()}
                >
                  <p className="mb-2 text-sm text-gray-600">
                    {resume ? `Selected file: ${resume.name}` : 'Drag and drop your resume here, or click to browse'}
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOCX (Max 5MB)</p>
                  <input 
                    type="file" 
                    id="resume"
                    name="resume"
                    className="hidden" 
                    accept=".pdf,.docx" 
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (optional)</label>
                <textarea 
                  name="coverLetter"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-byteify-accent min-h-[150px]"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobApplication;
