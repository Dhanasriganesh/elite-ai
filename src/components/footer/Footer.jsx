import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaChevronRight, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logomain from "../../assets/logo-main.png";

export default function Footer() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(180deg);
          }
          75% {
            transform: translate(20px, 20px) rotate(270deg);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-20px, 20px) rotate(-90deg);
          }
          50% {
            transform: translate(20px, -20px) rotate(-180deg);
          }
          75% {
            transform: translate(-20px, -20px) rotate(-270deg);
          }
        }
        
        @keyframes drift {
          0% {
            transform: translateX(0) translateY(0);
          }
          33% {
            transform: translateX(30px) translateY(-30px);
          }
          66% {
            transform: translateX(-30px) translateY(30px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
        
        @keyframes driftSlow {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          50% {
            transform: translateX(50px) translateY(-50px) rotate(180deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .shape-animation-1 {
          animation: float 20s ease-in-out infinite;
        }
        
        .shape-animation-2 {
          animation: floatReverse 25s ease-in-out infinite;
        }
        
        .shape-animation-3 {
          animation: drift 30s ease-in-out infinite;
        }
        
        .shape-animation-4 {
          animation: driftSlow 40s linear infinite;
        }
        
        .shape-animation-5 {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .shape-animation-6 {
          animation: rotate 15s linear infinite;
        }
        
        .shape-animation-7 {
          animation: float 18s ease-in-out infinite reverse;
        }
        
        .shape-animation-8 {
          animation: drift 22s ease-in-out infinite reverse;
        }
      `}</style>
      
      <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Circles */}
          <div className="absolute w-20 h-20 rounded-full bg-blue-200/30 shape-animation-1" style={{ top: '10%', left: '5%' }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-indigo-200/30 shape-animation-2" style={{ top: '20%', right: '10%' }}></div>
          <div className="absolute w-24 h-24 rounded-full bg-purple-200/30 shape-animation-3" style={{ top: '50%', left: '15%' }}></div>
          <div className="absolute w-14 h-14 rounded-full bg-cyan-200/30 shape-animation-4" style={{ top: '70%', right: '20%' }}></div>
          <div className="absolute w-18 h-18 rounded-full bg-blue-300/25 shape-animation-5" style={{ top: '30%', left: '50%' }}></div>
          <div className="absolute w-22 h-22 rounded-full bg-indigo-300/25 shape-animation-6" style={{ top: '60%', right: '30%' }}></div>
          <div className="absolute w-12 h-12 rounded-full bg-purple-300/30 shape-animation-7" style={{ top: '80%', left: '40%' }}></div>
          <div className="absolute w-28 h-28 rounded-full bg-cyan-300/20 shape-animation-8" style={{ top: '15%', left: '70%' }}></div>
          
          {/* Diamonds (Rotated Squares) */}
          <div className="absolute w-16 h-16 bg-blue-200/30 shape-animation-2" style={{ top: '25%', left: '25%', transform: 'rotate(45deg)' }}></div>
          <div className="absolute w-20 h-20 bg-indigo-200/30 shape-animation-3" style={{ top: '45%', right: '15%', transform: 'rotate(45deg)' }}></div>
          <div className="absolute w-14 h-14 bg-purple-200/30 shape-animation-4" style={{ top: '65%', left: '60%', transform: 'rotate(45deg)' }}></div>
          <div className="absolute w-18 h-18 bg-cyan-200/30 shape-animation-1" style={{ top: '35%', right: '40%', transform: 'rotate(45deg)' }}></div>
          <div className="absolute w-12 h-12 bg-blue-300/25 shape-animation-6" style={{ top: '55%', left: '80%', transform: 'rotate(45deg)' }}></div>
          <div className="absolute w-22 h-22 bg-indigo-300/25 shape-animation-7" style={{ top: '75%', right: '50%', transform: 'rotate(45deg)' }}></div>
          
          {/* Triangles */}
          <div className="absolute shape-animation-1" style={{ top: '12%', left: '35%' }}>
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-blue-200/30"></div>
          </div>
          <div className="absolute shape-animation-2" style={{ top: '40%', right: '25%' }}>
            <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[30px] border-b-indigo-200/30"></div>
          </div>
          <div className="absolute shape-animation-3" style={{ top: '68%', left: '20%' }}>
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-purple-200/30"></div>
          </div>
          <div className="absolute shape-animation-4" style={{ top: '28%', right: '60%' }}>
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-cyan-200/30"></div>
          </div>
          <div className="absolute shape-animation-5" style={{ top: '52%', left: '45%' }}>
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-blue-300/25"></div>
          </div>
          <div className="absolute shape-animation-6" style={{ top: '78%', right: '35%' }}>
            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-indigo-300/25"></div>
          </div>
          
          {/* Hexagons (using CSS) */}
          <div className="absolute shape-animation-7" style={{ top: '18%', left: '55%' }}>
            <div className="w-16 h-16 bg-purple-200/30" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          </div>
          <div className="absolute shape-animation-8" style={{ top: '48%', right: '45%' }}>
            <div className="w-14 h-14 bg-cyan-200/30" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          </div>
          <div className="absolute shape-animation-1" style={{ top: '72%', left: '75%' }}>
            <div className="w-12 h-12 bg-blue-300/25" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          </div>
          
          {/* Additional Small Shapes */}
          <div className="absolute w-8 h-8 rounded-full bg-indigo-200/40 shape-animation-5" style={{ top: '5%', left: '90%' }}></div>
          <div className="absolute w-10 h-10 bg-purple-200/35 shape-animation-6" style={{ top: '85%', left: '10%', transform: 'rotate(45deg)' }}></div>
          <div className="absolute shape-animation-7" style={{ top: '8%', right: '5%' }}>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-cyan-200/35"></div>
          </div>
          <div className="absolute w-6 h-6 rounded-full bg-blue-200/40 shape-animation-8" style={{ top: '90%', right: '15%' }}></div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <div className="mb-4 sm:mb-6">
                <img 
                  src={logomain} 
                  alt="Elite AI Logo" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-4"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-sm">
                Elite AI is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <FaPhone className="mr-3 text-blue-600" />
                  <a href="tel:+918699235437" className="hover:text-blue-600 transition-colors">
                    +91 8699235437
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaEnvelope className="mr-3 text-blue-600" />
                  <a href="mailto:info@eliteaisol.com" className="hover:text-blue-600 transition-colors break-all">
                    info@eliteaisol.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 mt-6 sm:mt-8">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">Explore</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/client" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Clients</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Technologies</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industry" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Industries</span>
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/services/healthcare" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Healthcare</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/banking-financial" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Banking & Financial</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/media-entertainment" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Media & Entertainment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/technology-enablement" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Technology Enablement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/strategic-staffing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Strategic Staffing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/business-process-outsourcing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Business Process Outsourcing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/recruitment-process-outsourcing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Recruitment Process Outsourcing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/training-hub" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Training Hub</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries Column */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">Industries</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/industries/financial-services" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Financial Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/healthcare" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Healthcare</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/media-entertainment-gaming" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Media, Entertainment & Gaming</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/energy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Energy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/telecommunication" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Telecommunication</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/consumer-industrial-products" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Consumer & Industrial Products</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/technology-enablement" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Technology Enablement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries/transportation-travel" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Transportation & Travel</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">Technologies</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link to="/technologies/ai-machine-learning" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>AI & Machine Learning</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/cloud-computing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Cloud Computing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/devops" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>DevOps</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/big-data" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Big Data Technology</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/web-development" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Web Development</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/iot" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>IoT</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/android-development" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Android Development</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/java-python-fullstack" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Java/Python Full Stack</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/servicenow" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>ServiceNow</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/business-data-analyst" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Business/Data Analyst</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/qa-engineer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>QA Engineer</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/data-science" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Data Science</span>
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/salesforce" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group">
                    <FaChevronRight className="text-xs mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Salesforce</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                © {new Date().getFullYear()} Elite AI Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <Link to="/" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link to="/" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                <Link to="/" className="hover:text-blue-600 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
