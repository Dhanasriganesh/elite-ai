import React from 'react';

function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden
      h-[50vh] min-h-[400px] 
      sm:h-[60vh] sm:min-h-[500px]
      md:h-[70vh] md:min-h-[600px]
      lg:h-[80vh] lg:min-h-[700px]
      xl:h-screen xl:min-h-[800px]
      2xl:min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-0" style={{
        background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 50%, #A855F7 100%)'
      }}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Content overlay area */}
      <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Content can be added here in the future */}
      </div>
    </section>
  );
}

export default HeroSection;