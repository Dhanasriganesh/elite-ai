import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import clientNetworkBg from '../../assets/client-network-bg.jpg';

// Import client logos
import accentureLogo from '../../assets/clients/accenture.png';
import adpLogo from '../../assets/clients/adp.png';
import amazonLogo from '../../assets/clients/amazon.png';
import infosysLogo from '../../assets/clients/infosys.png';
import jpMorganLogo from '../../assets/clients/jpmorganlogo.webp';
import tcsLogo from '../../assets/clients/tcs.webp';
import techMahindraLogo from '../../assets/clients/techm.png';
import walmartLogo from '../../assets/clients/wallmart.webp';
import wiproLogo from '../../assets/clients/wipro.webp';

function Client() {
  const clients = [
    { name: 'Amazon', logo: amazonLogo },
    { name: 'JPMorgan Chase', logo: jpMorganLogo },
    { name: 'Walmart', logo: walmartLogo },
    { name: 'Accenture', logo: accentureLogo },
    { name: 'Tata Consultancy Services', logo: tcsLogo },
    { name: 'Infosys', logo: infosysLogo },
    { name: 'Wipro', logo: wiproLogo },
    { name: 'Tech Mahindra', logo: techMahindraLogo },
    { name: 'ADP', logo: adpLogo },
  ];

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Create two different shuffled arrays for the two rows (memoized to prevent re-shuffling on re-renders)
  const row1Clients = useMemo(() => shuffleArray(clients), []);
  const row2Clients = useMemo(() => shuffleArray(clients), []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[300px] sm:h-[55vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] text-white relative overflow-hidden flex items-center justify-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 animate-fade-in-up px-2">
              Our Clients
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 animate-fade-in-up-delay px-2">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 text-center px-2">
            We're proud to work with {clients.length}+ industry-leading companies across various sectors
          </p>
          
          {/* Row 1 - Moving Left */}
          <div className="relative mb-4 sm:mb-5 md:mb-6 overflow-hidden">
            <div className="flex animate-marquee-left">
              {/* Duplicate clients multiple times for seamless loop and to ensure all are visible */}
              {[...row1Clients, ...row1Clients, ...row1Clients, ...row1Clients].map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="group client-card shrink-0 mx-2 sm:mx-3 md:mx-4 transition-all duration-300 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center text-center w-24 sm:w-32 md:w-40"
                >
                  <div className="client-logo-container w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gray-50 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-blue-50 transition-all duration-300 p-2 sm:p-3">
                    <img src={client.logo} alt={client.name} className="client-logo-img max-w-full max-h-full object-contain transition-all duration-300" />
                  </div>
                  <h3 className="client-name text-xs sm:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-all duration-300 leading-tight">{client.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-right">
              {/* Duplicate clients multiple times for seamless loop and to ensure all are visible */}
              {[...row2Clients, ...row2Clients, ...row2Clients, ...row2Clients].map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="group client-card shrink-0 mx-2 sm:mx-3 md:mx-4 transition-all duration-300 p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center text-center w-24 sm:w-32 md:w-40"
                >
                  <div className="client-logo-container w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gray-50 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-green-50 transition-all duration-300 p-2 sm:p-3">
                    <img src={client.logo} alt={client.name} className="client-logo-img max-w-full max-h-full object-contain transition-all duration-300" />
                  </div>
                  <h3 className="client-name text-xs sm:text-sm font-medium text-gray-700 group-hover:text-green-600 transition-all duration-300 leading-tight">{client.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center px-2">
              What Our Clients Say
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-7 md:mb-8 italic text-center px-2">
                "Elite AI has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched."
              </p>
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Industry Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent px-2">
              Become Our Next Success Story
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-600 px-2">
              Join our growing list of satisfied clients and transform your business with our solutions
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;