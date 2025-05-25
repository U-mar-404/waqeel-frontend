import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Scale size={28} className="text-primary-500" />
            <span className="text-xl font-bold text-primary-600">
              ApnaWaqeel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium ${
                location.pathname === '/'
                  ? 'text-primary-500'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
            >
              Home
            </Link>

            <Link
              to="/select"
              className={`text-sm font-medium ${
                location.pathname === '/select'
                  ? 'text-primary-500'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
            >
              Get Started
            </Link>

            <Link
              to="/about-us"
              className={`text-sm font-medium ${
                location.pathname === '/about-us'
                  ? 'text-primary-500'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/terms"
              className={`text-sm font-medium ${
                location.pathname === '/terms'
                  ? 'text-primary-500'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
            >
              Terms of Service
            </Link>

            <Link
              to="/contact-us"
              className={`text-sm font-medium btn-outline py-2 ${
                location.pathname === '/contact-us'
                  ? 'text-primary-500'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === '/' ? 'text-primary-500' : 'text-gray-600'
                }`}
              >
                Home
              </Link>

              <Link
                to="/select"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === '/select' ? 'text-primary-500' : 'text-gray-600'
                }`}
              >
                Get Started
              </Link>

              <Link
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === '/about-us' ? 'text-primary-500' : 'text-gray-600'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/terms"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === '/terms' ? 'text-primary-500' : 'text-gray-600'
                }`}
              >
                Terms of Service
              </Link>

              <Link
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === '/contact-us' ? 'text-primary-500' : 'text-gray-600'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
