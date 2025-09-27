import React, { useEffect, useState } from 'react';
import contact from './assets/BackgroundFolder/contact-image.png';
import home from './assets/BackgroundFolder/home.png';
import about from './assets/BackgroundFolder/About.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Banner() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Reset animation when route changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (location.pathname === '/Login' || location.pathname === '/Register') return null;

  // Variants for framer-motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 relative flex items-center md:flex-row flex-col gap-8 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-[#635fc7] via-[#817cf0] to-[#a5a1f8]">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 ">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {isVisible && (
        <div className=' flex items-center md:flex-row flex-col mx-auto '>
          <motion.div
            className="lg:w-[45%] md:w-[50%] w-full z-10 py-12 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {location.pathname === '/' && (
              <>
                <motion.h2 
                  className="text-white font-bold lg:text-5xl md:text-4xl text-3xl leading-tight md:leading-snug mb-6"
                  variants={itemVariants}
                >
                  Effortlessly Organize Your Tasks
                  <span className="block mt-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Your Ultimate Task Management Solution
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-white/90 text-lg mb-8 max-w-lg"
                  variants={itemVariants}
                >
                  DigitalBucket helps you manage projects, track progress, and collaborate with your team - all in one place.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                  <button 
                    onClick={() => navigate('/Dashboard')} 
                    className="px-8 py-4 bg-white text-[#635fc7] rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </motion.div>
              </>
            )}
            
            {location.pathname === '/About' && (
              <>
                <motion.h1 
                  className="text-white font-bold text-5xl mb-4 text-center md:text-left"
                  variants={itemVariants}
                >
                  About Us
                </motion.h1>
                
                <motion.h2 
                  className="text-blue-100 text-xl font-medium text-center md:text-left mb-6"
                  variants={itemVariants}
                >
                  Home / About
                </motion.h2>
                
                <motion.p 
                  className="text-white/90 text-lg max-w-lg text-center md:text-left"
                  variants={itemVariants}
                >
                  Learn how DigitalBucket began and our mission to simplify task management for teams and individuals.
                </motion.p>
              </>
            )}
            
            {location.pathname === '/Contact' && (
              <>
                <motion.h1 
                  className="text-white font-bold text-5xl mb-4 text-center md:text-left"
                  variants={itemVariants}
                >
                  Contact Us
                </motion.h1>
                
                <motion.h2 
                  className="text-blue-100 text-xl font-medium text-center md:text-left mb-6"
                  variants={itemVariants}
                >
                  Home / Contact
                </motion.h2>
                
                <motion.p 
                  className="text-white/90 text-lg max-w-lg text-center md:text-left"
                  variants={itemVariants}
                >
                  Have questions? We'd love to hear from you. Reach out to our team for support or inquiries.
                </motion.p>
              </>
            )}
          </motion.div>

          <motion.div 
            className="lg:w-[55%] md:w-[50%] w-full z-10 flex justify-center md:justify-end py-12 md:pr-14"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img 
              src={location.pathname === '/' ? home : location.pathname === '/Contact' ? contact : about}
              className="lg:max-w-[500px] md:max-w-[380px] max-w-[300px] w-full"
              alt="DigitalBucket illustration"
              
            />
          </motion.div>
        </div>
      )}

 
    </div>
  );
}

export default Banner;