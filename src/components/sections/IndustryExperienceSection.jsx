import React, { useState, useEffect, useRef } from 'react';
import { 
  FaCar, 
  FaPencilRuler, 
  FaBullseye, 
  FaLaptopCode,
  FaPlug,
  FaChartLine,
  FaHospital,
  FaTv,
  FaServer,
  FaPhoneAlt,
  FaBolt,
  FaIndustry,
  FaPlane,
  FaUniversity,
  FaGraduationCap,
  FaShieldAlt,
  FaBoxes,
  FaShoppingCart,
  FaSatellite,
  FaOilCan,
  FaHotel,
  FaBuilding,
  FaRobot,
  FaCloud,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaNetworkWired,
  FaMicrochip,
  FaGlobe,
  FaCog,
  FaRocket
} from 'react-icons/fa';

// Custom hook for typing animation
const useTypingAnimation = (text, speed = 12) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [isVisible, text, speed]);

  return [displayText, elementRef];
};

const industries = [
  { name: 'Automobile & Mobility', icon: FaCar, color: '#9333EA' },
  { name: 'Product Design', icon: FaPencilRuler, color: '#EC4899' },
  { name: 'Smart Vision', icon: FaBullseye, color: '#A855F7' },
  { name: 'Web Development', icon: FaLaptopCode, color: '#9333EA' },
  { name: 'Platform Integration', icon: FaPlug, color: '#EC4899' },
  { name: 'Financial Services', icon: FaChartLine, color: '#A855F7' },
  { name: 'Healthcare', icon: FaHospital, color: '#9333EA' },
  { name: 'Media & Entertainment', icon: FaTv, color: '#EC4899' },
  { name: 'Technology Enablement', icon: FaServer, color: '#A855F7' },
  { name: 'Telecommunications', icon: FaPhoneAlt, color: '#9333EA' },
  { name: 'Energy', icon: FaBolt, color: '#EC4899' },
  { name: 'Consumer Products', icon: FaIndustry, color: '#A855F7' },
  { name: 'Transportation', icon: FaPlane, color: '#9333EA' },
  { name: 'Banking & Financial', icon: FaUniversity, color: '#EC4899' },
  { name: 'Education', icon: FaGraduationCap, color: '#A855F7' },
  { name: 'Government', icon: FaBuilding, color: '#9333EA' },
  { name: 'Healthcare & Life Science', icon: FaHospital, color: '#EC4899' },
  { name: 'Insurance', icon: FaShieldAlt, color: '#A855F7' },
  { name: 'Logistics', icon: FaBoxes, color: '#9333EA' },
  { name: 'Retail', icon: FaShoppingCart, color: '#EC4899' },
  { name: 'Telecom & Media', icon: FaSatellite, color: '#A855F7' },
  { name: 'Oil & Gas', icon: FaOilCan, color: '#9333EA' },
  { name: 'Travel & Hospitality', icon: FaHotel, color: '#EC4899' },
  { name: 'AI & Machine Learning', icon: FaRobot, color: '#A855F7' },
  { name: 'Cloud Computing', icon: FaCloud, color: '#9333EA' },
  { name: 'Data Analytics', icon: FaDatabase, color: '#EC4899' },
  { name: 'Software Development', icon: FaCode, color: '#A855F7' },
  { name: 'Mobile Solutions', icon: FaMobileAlt, color: '#9333EA' },
  { name: 'Network Solutions', icon: FaNetworkWired, color: '#EC4899' },
  { name: 'IoT Solutions', icon: FaMicrochip, color: '#A855F7' },
  { name: 'Digital Transformation', icon: FaGlobe, color: '#9333EA' },
  { name: 'Enterprise Solutions', icon: FaCog, color: '#EC4899' },
  { name: 'Innovation Labs', icon: FaRocket, color: '#A855F7' },
];

function IndustryExperienceSection() {
  const industryText = "You want a strategic partner to understand your market, but you also need them to understand your industry — Since your company is special, we start with a discovery phase to define your distinct brand attributes and benefits. We assist you in recognising business dynamics, identifying shortages, predicting opportunities, and connecting with customers by providing deep industry insights.";
  
  const [typedIndustry, industryRef] = useTypingAnimation(industryText, 12);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Duplicate industries for seamless marquee
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-left {
          animation: marquee-left 80s linear infinite;
        }
        
        .marquee-right {
          animation: marquee-right 80s linear infinite;
        }
        
        .marquee-container:hover .marquee-left,
        .marquee-container:hover .marquee-right {
          animation-play-state: paused;
        }
      `}</style>
      <section 
        ref={sectionRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #fdf2f8 0%, #ffffff 50%, #faf5ff 100%)'
        }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Section Header */}
          <div 
            ref={industryRef}
            className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wider border border-purple-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Industry Expertise
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2" style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Industry <span className="text-purple-600">Experience</span>
            </h2>
            
            <div className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {typedIndustry}
              <span className="animate-pulse text-purple-600">|</span>
            </div>
          </div>

          {/* Marquee Container */}
          <div className="marquee-container relative overflow-hidden mb-4">
            {/* First Row - Moving Left */}
            <div className="flex w-max marquee-left">
              {duplicatedIndustries.map((industry, idx) => {
                const IconComponent = industry.icon;
                const uniqueKey = `row1-${idx}`;
                const isHovered = hoveredIndex === uniqueKey;
                
                return (
                  <div
                    key={uniqueKey}
                    onMouseEnter={() => setHoveredIndex(uniqueKey)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group flex-shrink-0 mx-2 sm:mx-3"
                  >
                    <div 
                      className="relative bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                      style={{
                        width: '160px',
                        height: '140px',
                        transform: isHovered ? 'translateY(-4px) scale(1.03)' : 'translateY(0) scale(1)',
                      }}
                    >
                      {/* Content */}
                      <div className="relative z-10 p-4 h-full flex flex-col items-center justify-center text-center">
                        {/* Icon Container */}
                        <div 
                          className="mb-3 flex justify-center transition-all duration-500"
                          style={{
                            transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                          }}
                        >
                          <div 
                            className="p-3 rounded-xl transition-all duration-500"
                          >
                            <IconComponent 
                              className="text-2xl sm:text-3xl transition-all duration-500" 
                              style={{
                                color: industry.color,
                              }}
                            />
                          </div>
                        </div>

                        {/* Industry Name */}
                        <h3 
                          className="text-xs font-semibold leading-tight transition-all duration-300 px-2"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: '#374151',
                            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          }}
                        >
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div className="marquee-container relative overflow-hidden">
            <div className="flex w-max marquee-right">
              {duplicatedIndustries.map((industry, idx) => {
                const IconComponent = industry.icon;
                const uniqueKey = `row2-${idx}`;
                const isHovered = hoveredIndex === uniqueKey;
                
                return (
                  <div
                    key={uniqueKey}
                    onMouseEnter={() => setHoveredIndex(uniqueKey)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group flex-shrink-0 mx-2 sm:mx-3"
                  >
                    <div 
                      className="relative bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                      style={{
                        width: '160px',
                        height: '140px',
                        transform: isHovered ? 'translateY(-4px) scale(1.03)' : 'translateY(0) scale(1)',
                      }}
                    >
                      {/* Content */}
                      <div className="relative z-10 p-4 h-full flex flex-col items-center justify-center text-center">
                        {/* Icon Container */}
                        <div 
                          className="mb-3 flex justify-center transition-all duration-500"
                          style={{
                            transform: isHovered ? 'scale(1.15) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                          }}
                        >
                          <div 
                            className="p-3 rounded-xl transition-all duration-500"
                          >
                            <IconComponent 
                              className="text-2xl sm:text-3xl transition-all duration-500" 
                              style={{
                                color: industry.color,
                              }}
                            />
                          </div>
                        </div>

                        {/* Industry Name */}
                        <h3 
                          className="text-xs font-semibold leading-tight transition-all duration-300 px-2"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: '#374151',
                            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          }}
                        >
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div 
            className={`mt-10 sm:mt-12 md:mt-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <button className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span>Explore All Industries</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustryExperienceSection;
