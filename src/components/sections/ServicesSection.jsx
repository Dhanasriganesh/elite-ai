import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeartbeat, FaUniversity, FaFilm, FaLaptopCode, FaUserTie, FaProjectDiagram, 
  FaUserFriends, FaGraduationCap, FaChartLine, FaStethoscope, FaGamepad, 
  FaBolt, FaPhoneAlt, FaIndustry, FaCogs, FaPlane, FaBrain, FaCloud, 
  FaServer, FaDatabase, FaCode, FaWifi, FaMobileAlt, FaJava, FaPython, 
  FaAws, FaFileAlt, FaFlask, FaSalesforce, FaArrowRight
} from 'react-icons/fa';

const services = [
  { title: 'Healthcare', path: '/services/healthcare', icon: FaHeartbeat, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Advanced healthcare solutions for better patient care and management' },
  { title: 'Banking & Financial', path: '/services/banking-financial', icon: FaUniversity, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Secure financial technology solutions for modern banking' },
  { title: 'Media & Entertainment', path: '/services/media-entertainment', icon: FaFilm, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Engaging digital experiences for media and entertainment industry' },
  { title: 'Technology Enablement', path: '/services/technology-enablement', icon: FaLaptopCode, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Transform your business with cutting-edge technology solutions' },
  { title: 'Strategic Staffing', path: '/services/strategic-staffing', icon: FaUserTie, image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Access top-tier talent when and where you need it most' },
  { title: 'Business Process Outsourcing', path: '/services/business-process-outsourcing', icon: FaProjectDiagram, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Streamline operations and reduce costs with expert BPO services' },
  { title: 'Recruitment Process Outsourcing', path: '/services/recruitment-process-outsourcing', icon: FaUserFriends, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'End-to-end recruitment solutions for finding the right talent' },
  { title: 'Training Hub', path: '/services/training-hub', icon: FaGraduationCap, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Comprehensive training programs to upskill your workforce' },
];

const industries = [
  { title: 'Financial Services', path: '/industries/financial-services', icon: FaChartLine, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Innovative fintech solutions for banking and insurance' },
  { title: 'Healthcare', path: '/industries/healthcare', icon: FaStethoscope, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Digital transformation for healthcare providers and institutions' },
  { title: 'Media, Entertainment & Gaming', path: '/industries/media-entertainment-gaming', icon: FaGamepad, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Next-generation platforms for media and gaming experiences' },
  { title: 'Energy', path: '/industries/energy', icon: FaBolt, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Smart energy solutions for sustainable power management' },
  { title: 'Telecommunication', path: '/industries/telecommunication', icon: FaPhoneAlt, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Advanced telecom solutions for seamless connectivity' },
  { title: 'Consumer & Industrial Products', path: '/industries/consumer-industrial-products', icon: FaIndustry, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Digital solutions for manufacturing and retail sectors' },
  { title: 'Technology Enablement', path: '/industries/technology-enablement', icon: FaCogs, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Comprehensive IT solutions across all technology sectors' },
  { title: 'Transportation & Travel', path: '/industries/transportation-travel', icon: FaPlane, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Modern solutions for logistics and travel management' },
];

const technologies = [
  { title: 'AI & Machine Learning', path: '/technologies/ai-machine-learning', icon: FaBrain, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Harness artificial intelligence for intelligent automation' },
  { title: 'Cloud Computing', path: '/technologies/cloud-computing', icon: FaCloud, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Scalable cloud infrastructure for modern businesses' },
  { title: 'DevOps', path: '/technologies/devops', icon: FaServer, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Streamline development and deployment pipelines' },
  { title: 'Big Data Technology', path: '/technologies/big-data', icon: FaDatabase, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Transform data into actionable business insights' },
  { title: 'Web Development', path: '/technologies/web-development', icon: FaCode, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Build modern, responsive web applications' },
  { title: 'IoT', path: '/technologies/iot', icon: FaWifi, image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Connect devices and create smart ecosystems' },
  { title: 'Android Development', path: '/technologies/android-development', icon: FaMobileAlt, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Native Android apps for mobile experiences' },
  { title: 'Java/Python Full Stack', path: '/technologies/java-python-fullstack', icon: FaJava, image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Full-stack development with Java and Python' },
  { title: 'ServiceNow', path: '/technologies/servicenow', icon: FaAws, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Enterprise service management solutions' },
  { title: 'Business/Data Analyst', path: '/technologies/business-data-analyst', icon: FaFileAlt, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Data-driven insights for strategic decision making' },
  { title: 'QA Engineer', path: '/technologies/qa-engineer', icon: FaFlask, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Quality assurance and testing expertise' },
  { title: 'Data Science', path: '/technologies/data-science', icon: FaDatabase, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Advanced analytics and machine learning models' },
  { title: 'Salesforce', path: '/technologies/salesforce', icon: FaSalesforce, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'CRM solutions to grow your customer relationships' },
];

function ServicesSection() {
  const [activeTab, setActiveTab] = useState('services');
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

  const tabs = [
    { id: 'services', label: 'Services', icon: FaLaptopCode },
    { id: 'industries', label: 'Industries', icon: FaIndustry },
    { id: 'technologies', label: 'Technologies', icon: FaCogs },
  ];

  const getActiveItems = () => {
    switch (activeTab) {
      case 'services':
        return services;
      case 'industries':
        return industries;
      case 'technologies':
        return technologies;
      default:
        return services;
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 50%, #fce7f3 100%)'
      }}>
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What We Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 px-2" style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our <span className="text-purple-600">Comprehensive Solutions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              From industry-specific services to cutting-edge technologies, we provide end-to-end solutions tailored to your business needs.
            </p>
          </div>

          {/* Animated Tabs */}
          <div className={`flex justify-center mb-8 sm:mb-10 ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-purple-100 w-full sm:w-auto max-w-full overflow-x-auto sm:overflow-visible">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105'
                        : 'text-gray-600 hover:text-purple-600 hover:scale-102'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <IconComponent className={`text-sm sm:text-base transition-transform duration-300 ${activeTab === tab.id ? 'rotate-12' : ''}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Items Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto ${isVisible ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            {getActiveItems().map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-purple-100"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-xl"></div>
                  
                  {/* Image */}
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredIndex === index ? 'scale-125 blur-sm' : 'scale-100 blur-0'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-pink-900/40 to-transparent group-hover:from-purple-900/60 group-hover:via-pink-900/30 transition-all duration-500"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 group-hover:scale-110 group-hover:rotate-6 ${
                        hoveredIndex === index ? 'animate-pulse' : ''
                      }`}>
                        <IconComponent className="text-lg sm:text-xl text-purple-600 group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>
                    
                    {/* Arrow on Hover */}
                    <div className={`absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center transform transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : 'translate-x-4 translate-y-4 opacity-0 scale-75'
                    }`}>
                      <FaArrowRight className="text-white text-xs sm:text-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 min-h-[48px] sm:min-h-[56px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {item.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className={`flex items-center gap-2 text-purple-600 font-semibold text-xs sm:text-sm transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <span>Learn More</span>
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl transition-all duration-500 -z-10"></div>
                </Link>
              );
            })}
          </div>

          {/* View All Link */}
          <div className={`text-center mt-10 sm:mt-12 md:mt-16 ${isVisible ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}>
            <Link
              to={activeTab === 'services' ? '/service' : activeTab === 'industries' ? '/industry' : '/technology'}
              className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm sm:text-base md:text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Explore All {tabs.find(t => t.id === activeTab)?.label}</span>
              <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
