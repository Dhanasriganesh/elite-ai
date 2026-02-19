import React, { useRef, useEffect } from 'react';

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

const clients = [
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Microsoft', logo: null }, // Logo not available
  { name: 'JPMorgan Chase', logo: jpMorganLogo },
  { name: 'Walmart', logo: walmartLogo },
  { name: 'UnitedHealth Group', logo: null }, // Logo not available
  { name: 'Accenture', logo: accentureLogo },
  { name: 'Tata Consultancy Services', logo: tcsLogo },
  { name: 'Infosys', logo: infosysLogo },
  { name: 'Wipro', logo: wiproLogo },
  { name: 'HDFC Bank', logo: null }, // Logo not available
  { name: 'Reliance Industries', logo: null }, // Logo not available
  { name: 'Tech Mahindra', logo: techMahindraLogo },
  { name: 'ADP', logo: adpLogo },
].filter(client => client.logo !== null); // Filter out clients without logos

function ClientsSection() {
  const clientsRef = useRef(null);

  useEffect(() => {
    if (clientsRef.current) {
      let scrollPosition = 0;
      const scrollInterval = setInterval(() => {
        if (clientsRef.current) {
          scrollPosition += 1;
          clientsRef.current.scrollLeft = scrollPosition;
          
          const maxScroll = clientsRef.current.scrollWidth / 2;
          if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            clientsRef.current.scrollLeft = 0;
          }
        }
      }, 20);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fdf2f8 100%)'
      }}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Trusted Partners
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Trusted by Industry Leaders
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              We partner with world-class organizations to deliver exceptional results
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm p-6 sm:p-8 border border-purple-100/50 shadow-lg">
            <div 
              ref={clientsRef}
              className="flex space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 overflow-x-hidden"
            >
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-20 flex items-center justify-center px-3 sm:px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-purple-50 hover:border-pink-200"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientsSection;
