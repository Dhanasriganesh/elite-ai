import React, { useState, useEffect, useRef } from 'react';
import { FaClock, FaComments, FaAward } from 'react-icons/fa';

const whyChooseUs = [
  {
    title: 'Minimal Timelines',
    description: 'Get Your Projects Done Quickly and Efficiently with Elite AI.',
    icon: FaClock,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Fast Delivery', 'Agile Methodology', 'Quick Turnaround'],
  },
  {
    title: 'Effective Communication',
    description: 'Unlock Your Company\'s Potential With Effective Communication Strategies.',
    icon: FaComments,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['24/7 Support', 'Clear Updates', 'Transparent Process'],
  },
  {
    title: 'High Quality Standards',
    description: 'Get Professional IT Solutions to Create the Perfect Start-Up.',
    icon: FaAward,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Certified Team', 'Best Practices', 'Quality Assurance'],
  },
];

function WhyChooseUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fdf2f8 100%)'
      }}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 px-2" style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our <span className="text-purple-600">Competitive Advantages</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 max-w-2xl mx-auto px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              One of the pioneers of IT solutions is Elite AI.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              We offer our clients the advantage of having hardworking, committed, and talented manpower on demand, wherever and whenever they are needed, at a cost that fits their development budget.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer overflow-hidden border border-purple-100"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Image Background */}
                  <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredIndex === index ? 'scale-125 blur-sm' : 'scale-100 blur-0'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/80 via-pink-900/40 to-transparent transition-all duration-500 ${
                      hoveredIndex === index ? `bg-gradient-to-t from-purple-900/60 via-pink-900/30 to-transparent` : ''
                    }`}></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
                        hoveredIndex === index ? 'bg-gradient-to-br from-purple-600 to-pink-600 scale-125 rotate-12' : 'bg-white/95 scale-100 rotate-0'
                      }`}>
                        <IconComponent className={`text-2xl sm:text-3xl transition-all duration-500 ${
                          hoveredIndex === index ? 'text-white' : 'text-purple-600'
                        }`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 sm:p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6 min-h-[40px] sm:min-h-[48px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {feature.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {feature.features.map((feat, featIndex) => (
                        <div 
                          key={featIndex}
                          className={`flex items-center gap-2 text-xs sm:text-sm text-gray-700 transform transition-all duration-300 ${
                            hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'
                          }`}
                          style={{ 
                            transitionDelay: `${featIndex * 0.1}s`,
                            fontFamily: "'Poppins', sans-serif"
                          }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${
                            hoveredIndex === index ? 'scale-150' : 'scale-100'
                          }`}></div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/10 blur-2xl transition-opacity duration-500 -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUsSection;
