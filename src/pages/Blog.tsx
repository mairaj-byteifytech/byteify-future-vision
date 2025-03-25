
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Clock, Search, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Trends', 'Software Development', 'Enterprise Solutions', 'Mobile Apps', 'Case Studies', 'Company News'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Agentic AI: Autonomous Systems in Business',
      excerpt: 'Explore how autonomous AI agents are transforming business operations by making independent decisions and executing complex tasks.',
      category: 'AI Trends',
      author: 'Dr. Sarah Chen',
      date: 'June 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      featured: true,
    },
    {
      id: 2,
      title: 'Building Scalable Enterprise Applications: Best Practices',
      excerpt: 'Learn key architectural patterns and development practices for creating enterprise-grade applications that scale effectively.',
      category: 'Software Development',
      author: 'Michael Rodriguez',
      date: 'July 3, 2023',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356',
      featured: false,
    },
    {
      id: 3,
      title: 'How AI is Revolutionizing Customer Relationship Management',
      excerpt: 'Discover the transformative impact of AI-powered analytics and automation on modern CRM systems and customer experiences.',
      category: 'Enterprise Solutions',
      author: 'Aisha Johnson',
      date: 'August 21, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1535378273068-9bb67d5bca53',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile App Development Trends for 2024',
      excerpt: 'Stay ahead of the curve with insights into emerging technologies and methodologies shaping the future of mobile applications.',
      category: 'Mobile Apps',
      author: 'David Kim',
      date: 'September 10, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      featured: false,
    },
    {
      id: 5,
      title: 'Case Study: AI-Driven Workflow Automation for Healthcare Provider',
      excerpt: 'How we helped a major healthcare provider reduce administrative overhead by 60% with intelligent process automation.',
      category: 'Case Studies',
      author: 'Emily Zhang',
      date: 'October 5, 2023',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      featured: false,
    },
    {
      id: 6,
      title: 'The Role of Natural Language Processing in Business Intelligence',
      excerpt: 'Examining how NLP technologies are enabling more intuitive data analysis and decision-making processes.',
      category: 'AI Trends',
      author: 'Dr. James Wilson',
      date: 'November 17, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
      featured: false,
    },
    {
      id: 7,
      title: 'Byteify Opens New Research Center in Singapore',
      excerpt: 'Announcing our expansion in Asia with a state-of-the-art AI research and development facility in Singapore.',
      category: 'Company News',
      author: 'Communications Team',
      date: 'December 1, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f',
      featured: false,
    },
    {
      id: 8,
      title: 'Securing AI Systems: Best Practices for Enterprise Deployment',
      excerpt: 'Essential security considerations and implementation strategies for AI systems in enterprise environments.',
      category: 'Enterprise Solutions',
      author: 'Alex Mercer',
      date: 'January 12, 2024',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1562813733-b31f1996659f',
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const featuredPost = blogPosts.find(post => post.featured);

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Blog & Insights</h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80">
                Expert perspectives on AI, software development, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-padding bg-white">
            <div className="byteify-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block px-3 py-1 bg-byteify-accent/20 rounded-full text-sm font-medium text-byteify-dark mb-4">
                  Featured Article
                </div>
                <h2 className="section-title">Latest Insights</h2>
              </div>

              <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-auto lg:aspect-square overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-byteify-accent/20 text-byteify-accent-dark text-sm px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-byteify-gray text-sm flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-byteify-gray mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-sm text-byteify-gray">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center text-sm text-byteify-gray">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <Button className="w-fit bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                      Read Article
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="section-padding bg-gray-50">
          <div className="byteify-container">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              {/* Search and Filters */}
              <div className="md:w-1/4 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full rounded-lg border-gray-300"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-byteify-accent text-byteify-dark font-medium'
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                  <p className="text-byteify-gray mb-4">
                    Subscribe to our newsletter for the latest insights and updates.
                  </p>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="mb-4 w-full rounded-lg border-gray-300"
                  />
                  <Button className="w-full bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">All Articles</h2>
                  <p className="text-byteify-gray">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
                  </p>
                </div>
                
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-byteify-accent/20 text-byteify-accent-dark text-xs px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-byteify-gray text-xs flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                          <p className="text-byteify-gray text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-byteify-gray">
                              <User className="h-3 w-3 mr-1" />
                              <span>{post.author}</span>
                              <span className="mx-2">•</span>
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <a
                              href="#"
                              className="text-byteify-dark font-medium hover:text-byteify-accent-dark text-sm flex items-center"
                            >
                              Read more
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-12 text-center">
                    <p className="text-lg text-byteify-gray">No articles found matching your criteria.</p>
                    <Button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}

                {filteredPosts.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <Button variant="outline" className="border-byteify-accent text-byteify-dark hover:bg-byteify-accent/10">
                      Load More Articles
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-byteify-dark to-byteify-darker text-white">
          <div className="byteify-container text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Stay Updated with Byteify</h2>
            <p className="text-lg mb-10 text-white/80">
              Subscribe to our newsletter to receive the latest insights, case studies, and updates on AI and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-byteify-accent text-byteify-dark hover:bg-byteify-accent-light whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
