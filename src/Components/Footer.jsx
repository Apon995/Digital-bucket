import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LogoFolder/Logo.png'

function Footer() {
  const location = useLocation()
  
  
  if (location.pathname === '/Register' || location.pathname === '/Login') {
    return null;
  }

  return (
    <footer className="w-full bg-[#635fc7] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          
          {/* Brand section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="DigitalBucket Logo" className="w-8 h-8" />
              <h1 className="font-bold text-2xl tracking-wide uppercase text-white">DigitalBucket</h1>
            </div>
            <p className="text-sm font-normal leading-relaxed text-center md:text-left mb-6 max-w-xs text-white/90">
              DigitalBucket is a web application that keeps your data & daily work safe and secure!
            </p>
            <div className="flex items-center gap-5 pt-2">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg"
                  aria-label={`Follow us on ${platform}`}
                >
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-white/20 pb-2 w-full text-center md:text-left">Our Services For</h2>
            <ul className="space-y-3 text-center md:text-left">
              {['Programmer', 'Developer', 'Banker', 'Doctor & etc'].map((profession) => (
                <li key={profession}>
                  <Link 
                    to="/" 
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {profession}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-white/20 pb-2 w-full text-center md:text-left">Community</h2>
            <ul className="space-y-3 text-center md:text-left">
              {['Digital Marketing', 'Business Ideas', 'Website Checkup', 'Page Speed Test'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/Dashboard" 
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-white/20 pb-2 w-full text-center md:text-left">Contact Info</h2>
            <address className="not-italic text-center md:text-left">
              <ul className="space-y-3 text-white/80">
                <li className="text-sm md:text-base">Mirpur Dhaka - 1216</li>
                <li className="text-sm md:text-base">Near By Mirpur shopping center</li>
                <li className="text-sm md:text-base">Hotline: +9990003</li>
                <li className="text-sm md:text-base break-all">Email: DigitalBucket2023@gmail.com</li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80 text-center md:text-left">
            Copyright &copy; 2023 by{' '}
            <Link 
              to="https://midgeneration.com/" 
              className="hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              DigitalBucket.com
            </Link>
            {' '}- All Rights Reserved.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-[#635fc7] p-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer