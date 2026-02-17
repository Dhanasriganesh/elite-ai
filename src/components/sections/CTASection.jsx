import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaRocket, FaUsers, FaAward, FaClock } from 'react-icons/fa';

function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    { icon: FaRocket, text: 'Fast Implementation' },
    { icon: FaUsers, text: 'Expert Team' },
    { icon: FaAward, text: 'Quality Assurance' },
    { icon: FaClock, text: '24/7 Support' },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 50%, #fce7f3 100%)'
      }}>
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Side - Content */}
              <div className={`space-y-5 sm:space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wide border border-purple-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Let's Get Started
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="block text-gray-900 mb-1 sm:mb-2">Ready to Build</span>
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Something Amazing?
                  </span>
                </h2>
            
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Let's work together to transform your business with cutting-edge technology solutions. Get in touch with our team today and take the first step towards digital transformation.
                </p>
          
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group ${
                          isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'
                        }`}
                        style={{ 
                          animationDelay: `${0.3 + index * 0.1}s`,
                          fontFamily: "'Poppins', sans-serif"
                        }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center transform transition-all duration-300 ${
                          hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                        }`}>
                          <IconComponent className="text-white text-base sm:text-lg" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <Link
                    to="/contact"
                    className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 hover:from-purple-700 hover:to-pink-700"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span className="relative z-10">Get Started Today</span>
                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Link>
                  
                  <Link
                    to="/service"
                    className="group px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-purple-200 text-gray-800 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:border-pink-400 hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Explore Services</span>
                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FaCheckCircle className="text-purple-600 text-base sm:text-lg" />
                    <span className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FaCheckCircle className="text-purple-600 text-base sm:text-lg" />
                    <span className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Expert Team</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <FaCheckCircle className="text-purple-600 text-base sm:text-lg" />
                    <span className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Fast Delivery</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Visual Element */}
              <div className={`relative hidden md:block ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
                <div className="relative w-full h-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
                  {/* Card Stack Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Card 1 */}
                    <div 
                      className="absolute w-44 md:w-48 lg:w-52 h-56 md:h-60 lg:h-64 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-500 hover:scale-110 group cursor-pointer hover:from-purple-700 hover:to-purple-800"
                      onMouseEnter={() => setHoveredCard('card1')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Innovation</h3>
                        <p className="text-purple-100 text-xs md:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Cutting-edge solutions</p>
                      </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div 
                      className="absolute w-44 md:w-48 lg:w-52 h-56 md:h-60 lg:h-64 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl shadow-2xl transform -rotate-6 hover:-rotate-12 transition-all duration-500 hover:scale-110 group cursor-pointer hover:from-pink-700 hover:to-pink-800" 
                      style={{ marginTop: '30px' }}
                      onMouseEnter={() => setHoveredCard('card2')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Excellence</h3>
                        <p className="text-pink-100 text-xs md:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>World-class quality</p>
                      </div>
                    </div>
                    
                    {/* Card 3 - Center */}
                    <div 
                      className="absolute w-44 md:w-48 lg:w-52 h-56 md:h-60 lg:h-64 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-2xl shadow-2xl transform hover:scale-115 transition-all duration-500 group cursor-pointer z-10 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700"
                      onMouseEnter={() => setHoveredCard('card3')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <FaRocket className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Transform</h3>
                          <p className="text-purple-100 text-xs md:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Your business today</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-6 md:top-8 right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-icon-1 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <FaCheckCircle className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
                  </div>
                  <div className="absolute bottom-16 md:bottom-20 left-6 md:left-8 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-icon-2 group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <FaAward className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTASection;
