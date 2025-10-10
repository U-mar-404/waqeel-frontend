// src/components/Footer.tsx

import { Scale, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">

          {/* Logo & Tagline */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Scale size={24} className="text-accent-500" />
              <span className="text-xl font-bold">ApnaWaqeel</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              
            </p>"Did you know you have rights constitution says you do!" <cite>~ Saul Goodman</cite>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-accent-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/select" className="text-gray-400 hover:text-accent-500 transition">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-400 hover:text-accent-500 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-accent-500 transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-gray-400 hover:text-accent-500 transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-accent-500" />
                  <a
                    href="mailto:aapnawaqeel@gmail.com"
                    className="text-gray-400 hover:text-accent-500 transition"
                  >
                    aapnawaqeel@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-accent-500" />
                  <a
                    href="tel:+923303186000"
                    className="text-gray-400 hover:text-accent-500 transition"
                  >
                    +92 330 3186000
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-accent-500" />
                  <a
                    href="tel:+923122312004"
                    className="text-gray-400 hover:text-accent-500 transition"
                  >
                    +92 312 2312004
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ApnaWaqeel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
