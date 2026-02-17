import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    company: 'Humana',
    name: 'James Smith',
    position: 'Creative Director',
    text: 'In my history of working with Elite AI, I can honestly say that there is not one company that I\'ve ever worked with that has better service.',
    rating: 4,
  },
  {
    id: 2,
    company: 'Microsoft',
    name: 'Michael Thompson',
    position: 'Sales Manager',
    text: 'I know they are going to be honest with me. I know it is going to be good. That is the number one advantage of working with Elite AI because I just do not want to be sold. I want to trust that what I am getting is going to be good.',
    rating: 5,
  },
  {
    id: 3,
    company: 'IBM',
    name: 'Tim Bogemans',
    position: 'Managing Partner',
    text: 'We worked with Elite AI in developing our SharePoint Intranet. The development & implementation process was very smooth & delivered the exact results we were expecting. We\'ll surely work with them in the future.',
    rating: 5,
  },
  {
    id: 4,
    company: 'Oracle',
    name: 'Ross Shamelashvili',
    position: 'Manager, Development Operations',
    text: 'Elite AI offers a high caliber of resources skilled in Microsoft Azure .NET, mobile & Quality Assurance. Over the past three years, We was very pleased with the service provided by Elite AI development teams & executive management.',
    rating: 4,
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 50%, #A855F7 100%)'
      }}>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30"></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 px-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our <span className="text-pink-200">Clients</span> Say
            </h2>
            <p className="text-purple-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Trusted by industry leaders worldwide. Here's what they have to say about working with us.
            </p>
          </div>

          {/* Testimonials Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="testimonial-card-wrapper mb-5 sm:mb-6 md:mb-8">
                <div 
                  key={currentIndex}
                  className={`testimonial-card bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-5 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden group cursor-pointer transition-all duration-500 ${
                    direction === 1 ? 'animate-slide-in-right' : direction === -1 ? 'animate-slide-in-left' : 'animate-fade-in'
                  }`}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/20 to-transparent rounded-br-full opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-tl-full opacity-50"></div>
                  
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaQuoteLeft className="text-white text-base sm:text-lg" />
                      </div>
                    </div>

                    {/* Stars Rating */}
                    <div className="flex justify-center gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-base sm:text-lg transition-all duration-300 ${
                            i < currentTestimonial.rating 
                              ? 'text-yellow-300 scale-110 drop-shadow-lg' 
                              : 'text-white/40'
                          }`}
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            filter: i < currentTestimonial.rating ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' : 'none'
                          }}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-center mb-4 sm:mb-5 font-light italic group-hover:text-pink-100 transition-colors duration-300 px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      "{currentTestimonial.text}"
                    </p>

                    {/* Company Badge */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="bg-gradient-to-r from-white/20 to-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/20 group-hover:border-pink-300/50 group-hover:from-white/30 group-hover:to-white/30 transition-all duration-300">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{currentTestimonial.company}</h3>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm sm:text-base mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{currentTestimonial.name}</p>
                      <p className="text-purple-200 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>{currentTestimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {/* Left Arrow */}
                <button
                  onClick={prevTestimonial}
                  className="nav-button w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-pink-300/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-base sm:text-lg group-hover:text-pink-300 transition-colors duration-300" />
                </button>

                {/* Pagination Dots */}
                <div className="flex gap-1.5 sm:gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`pagination-dot transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-pink-300 to-purple-300 shadow-lg shadow-pink-500/50'
                          : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 hover:bg-white/50 hover:scale-125'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextTestimonial}
                  className="nav-button w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-pink-300/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-base sm:text-lg group-hover:text-pink-300 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsSection;
