import React, { useState, useEffect, useRef } from 'react';

// Custom hook for typing animation
const useTypingAnimation = (text, speed = 15) => {
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

function AboutSection() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  const missionText = "At Elite AI, we are committed to delivering cutting-edge software solutions that drive business growth and digital transformation. Our expertise spans across multiple industries, helping organizations leverage technology to achieve their strategic objectives. We believe in the power of innovation, quality, and customer-centric approach to create solutions that not only meet current needs but also prepare businesses for future challenges.";
  
  const [typedMission, missionRef] = useTypingAnimation(missionText, 15);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount('projects', 500, 2000);
          animateCount('years', 10, 2000);
          animateCount('clients', 200, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key, target, duration) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  const expertise = [
    { name: 'Web Development', icon: '🌐', color: '#9333EA' },
    { name: 'Mobile Apps', icon: '📱', color: '#EC4899' },
    { name: 'Cloud Solutions', icon: '☁️', color: '#A855F7' },
    { name: 'AI & ML', icon: '🤖', color: '#F472B6' },
    { name: 'Healthcare IT', icon: '🏥', color: '#9333EA' },
    { name: 'E-commerce', icon: '🛒', color: '#EC4899' },
    { name: 'Enterprise Software', icon: '💼', color: '#A855F7' },
    { name: 'Digital Marketing', icon: '📊', color: '#F472B6' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver innovative solutions that give our clients a competitive edge.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: '#9333EA',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quality Assured',
      description: 'Our rigorous quality assurance processes ensure that every solution we deliver meets the highest standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#EC4899',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Client Focused',
      description: 'We build long-term partnerships with our clients, understanding their unique needs and delivering tailored solutions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: '#A855F7',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] min-h-[250px] sm:h-[45vh] sm:min-h-[300px] md:h-[50vh] md:min-h-[350px] text-white overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Elite AI
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-purple-100 px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Leading IT consulting firm transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(180deg, #faf5ff 0%, #ffffff 50%, #fdf2f8 100%)'
      }}>
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* About Elite AI */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12">
              {/* Mission Section */}
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <div className="inline-block mb-4">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Our Mission
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                <div ref={missionRef} className="text-sm sm:text-base text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {typedMission}
                  <span className="animate-pulse text-purple-600">|</span>
                </div>
              </div>

              {/* Expertise Section */}
              <div 
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Our Expertise</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {expertise.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-xl sm:text-2xl">{skill.icon}</span>
                      <span 
                        className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="max-w-6xl mx-auto">
            <div 
              className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wider border border-purple-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Company Overview
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${0.8 + idx * 0.1}s`,
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 text-white h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
                    <div>
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm bg-white/20"
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 text-white">
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{value.title}</h3>
                      <p className="text-sm text-purple-100 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Accent Bar */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
                      style={{
                        backgroundColor: value.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div 
              ref={statsRef} 
              className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12 border border-purple-100 shadow-xl"
            >
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose Elite AI?</h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Delivering excellence through innovation, quality, and dedication
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl border border-purple-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>{counts.projects}+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Projects Delivered</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl border border-purple-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>{counts.years}+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Years Experience</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl border border-purple-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>{counts.clients}+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Happy Clients</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl border border-purple-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
