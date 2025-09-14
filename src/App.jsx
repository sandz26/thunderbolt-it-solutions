import React, { useState, useEffect } from 'react'
import logoImage from './assets/logo.jpeg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-brand-purple/25 transition-all duration-300 overflow-hidden">
                  <img 
                    src={logoImage} 
                    alt="Thunderbolt IT Solutions Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-brand-purple/30 rounded-xl group-hover:border-brand-purple/60 transition-all duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-purple/20 to-brand-gray/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-brand-light">THUNDER BOLT</h1>
                <p className="text-xs text-brand-gray font-medium">IT SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-brand-gray hover:text-brand-light transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-brand-gray hover:text-brand-light transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-brand-gray hover:text-brand-light transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-brand-gray hover:text-brand-light transition-colors">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-gray hover:text-brand-light"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-brand-dark/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-light">Home</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-light">Services</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-light">About</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-brand-gray hover:text-brand-light">Contact</button>
                <button onClick={() => scrollToSection('contact')} className="btn-primary w-full mt-4">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gray/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-light rounded-full mb-8">
                  <img 
                    src={logoImage} 
                    alt="Thunderbolt IT Solutions Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-light">
                  THUNDER BOLT
                </h1>
                <p className="text-xl md:text-2xl text-brand-gray mb-4">IT SOLUTIONS</p>
                <p className="text-lg md:text-xl text-brand-gray mb-8">
                  Lightning-Speed Solutions, Solid Results
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center lg:justify-start">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">Start Your Project</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Hero Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/hero-image.jpg" 
                    alt="Thunderbolt IT Solutions - Professional Tech Workspace"
                    className="w-full h-96 object-cover"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating service indicators */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="bg-purple-600/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-brand-light">Web Dev</span>
                    </div>
                    <div className="bg-blue-600/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-brand-light">Mobile Apps</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="bg-green-600/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-brand-light">AI Automation</span>
                    </div>
                    <div className="bg-orange-600/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-brand-light">Branding</span>
                    </div>
                  </div>
                  
                  {/* Bottom text overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-brand-light mb-1">Digital Solutions</h3>
                    <p className="text-sm text-brand-light">Comprehensive IT services for modern businesses</p>
                  </div>
                </div>

                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-purple/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-gray/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-light">Our Services</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              We deliver cutting-edge digital solutions that power your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Website Development */}
            <div className="bg-brand-dark/50 rounded-xl p-8 card-hover border border-brand-gray/30">
              <div className="w-16 h-16 bg-brand-purple rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-light">Website Development</h3>
              <p className="text-brand-gray mb-6">
                Modern, responsive websites that convert visitors into customers with lightning-fast performance.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Responsive Design</li>
                <li>• SEO Optimization</li>
                <li>• E-commerce Solutions</li>
                <li>• Content Management</li>
              </ul>
            </div>

            {/* Mobile Apps */}
            <div className="bg-brand-dark/50 rounded-xl p-8 card-hover border border-brand-gray/30">
              <div className="w-16 h-16 bg-brand-purple rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Apps</h3>
              <p className="text-brand-gray mb-6">
                Native and cross-platform mobile applications that engage users and drive business growth.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• iOS & Android</li>
                <li>• Cross-platform</li>
                <li>• User Experience</li>
                <li>• App Store Optimization</li>
              </ul>
            </div>

            {/* Branding */}
            <div className="bg-brand-dark/50 rounded-xl p-8 card-hover border border-brand-gray/30">
              <div className="w-16 h-16 bg-brand-purple rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Branding</h3>
              <p className="text-brand-gray mb-6">
                Complete brand identity packages that establish your unique market presence.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Logo Design</li>
                <li>• Brand Guidelines</li>
                <li>• Visual Identity</li>
                <li>• Marketing Materials</li>
              </ul>
            </div>

            {/* Business Documents */}
            <div className="bg-brand-dark/50 rounded-xl p-8 card-hover border border-brand-gray/30">
              <div className="w-16 h-16 bg-brand-purple rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Business Documents</h3>
              <p className="text-brand-gray mb-6">
                Professional business documentation and digital transformation solutions.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Business Plans</li>
                <li>• Digital Workflows</li>
                <li>• Process Automation</li>
                <li>• Cloud Solutions</li>
              </ul>
            </div>

            {/* AI Automation Services */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-8 card-hover border border-purple-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">AI Automation</h3>
              <p className="text-brand-gray mb-6">
                Intelligent automation solutions powered by artificial intelligence to streamline your business processes.
              </p>
              <ul className="text-sm text-brand-gray space-y-2">
                <li>• Chatbot Development</li>
                <li>• Workflow Automation</li>
                <li>• Data Analysis & Insights</li>
                <li>• Machine Learning Models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Thunderbolt?</h2>
              <p className="text-xl text-brand-light mb-8">
                We're not just another IT company. We're your strategic partner in digital transformation, 
                delivering lightning-fast solutions with rock-solid reliability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Lightning-Fast Delivery</h3>
                    <p className="text-brand-gray">We work at the speed of lightning, delivering projects on time, every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solid Results</h3>
                    <p className="text-brand-gray">Our solutions are built to last, providing reliable performance and measurable ROI.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-brand-gray">Our experienced professionals bring cutting-edge expertise to every project.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-brand-gray">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-brand-gray">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-brand-gray">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
                    <div className="text-brand-gray">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Let's discuss how Thunderbolt IT Solutions can power your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-brand-gray">info@thunderbolt-it.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-brand-gray">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-brand-gray">123 Tech Street, Digital City, DC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 border border-thunder-gray rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold">THUNDER BOLT</h3>
                <p className="text-xs text-brand-gray">IT SOLUTIONS</p>
              </div>
            </div>
            <p className="text-brand-gray mb-6">Lightning-Speed Solutions, Solid Results</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-brand-gray hover:text-brand-light transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-light transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-light transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Thunderbolt IT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <div >
  <h2 className="text-2xl font-bold">Tailwind is working!</h2>
  <p className="text-sm opacity-75">This uses your custom thunder-purple color</p>
</div>
    </div>
  )
}

export default App
