
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { ArrowLeft, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  position: z.string().min(1, { message: "Please select a position" }),
  experience: z.string().min(1, { message: "Please select your experience level" }),
  linkedin: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
  portfolio: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
  whyJoin: z.string().min(50, { message: "Please provide at least 50 characters" }),
  achievements: z.string().min(20, { message: "Please provide at least 20 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const JoinOurTeam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      linkedin: "",
      portfolio: "",
      whyJoin: "",
      achievements: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const positions = [
    "Software Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
    "Data Scientist",
    "DevOps Engineer",
    "Quality Assurance",
    "Machine Learning Engineer",
    "Other",
  ];

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid Level (2-5 years)",
    "Senior Level (5-8 years)",
    "Lead/Manager (8+ years)",
  ];

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Preparing data for email
      const formData = {
        ...data,
        resume: resume ? resume.name : 'No resume uploaded',
      };
      
      // Log the data being sent (in a real app, this would be sent to a server)
      console.log('Sending job application to info@byteify.technology', formData);
      
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted Successfully",
        description: "Thank you for your interest in joining our team. We'll review your application and get back to you soon.",
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
          
          <h1 className="text-3xl font-bold mb-3">Join Our Team</h1>
          <p className="text-byteify-gray mb-8 max-w-3xl">
            We're looking for passionate individuals who want to make an impact and contribute to our mission. 
            Fill out the form below to apply to join our team.
          </p>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mb-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position You're Applying For</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {positions.map((position) => (
                              <SelectItem key={position} value={position}>
                                {position}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Level</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                        <FormControl>
                          <Input type="url" placeholder="https://linkedin.com/in/yourprofile" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="portfolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio/GitHub (Optional)</FormLabel>
                        <FormControl>
                          <Input type="url" placeholder="https://github.com/yourusername" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                  <div 
                    className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition flex flex-col items-center justify-center"
                    onClick={() => document.getElementById('resume')?.click()}
                  >
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="mb-2 text-sm text-gray-600">
                      {resume ? `Selected file: ${resume.name}` : 'Drag and drop your resume here, or click to browse'}
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOCX (Max 5MB)</p>
                    <input 
                      type="file" 
                      id="resume"
                      className="hidden" 
                      accept=".pdf,.docx" 
                      onChange={handleFileChange}
                    />
                  </div>
                  {resume && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => setResume(null)}
                    >
                      Remove file
                    </Button>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="whyJoin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to join Byteify?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're interested in working with us and what you hope to achieve." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="achievements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Achievements or Projects</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your most significant professional achievements or projects you're proud of." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinOurTeam;
