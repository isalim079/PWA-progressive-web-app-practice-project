import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path, mobile = false) => {
    const baseClass = mobile 
      ? "block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
      : "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    return isActive(path)
      ? `${baseClass} bg-blue-600 text-white`
      : `${baseClass} text-gray-700 hover:bg-blue-100 hover:text-blue-600`;
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-lg sm:text-xl font-bold text-gray-900">
              PWA App
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={navLinkClass('/')}>
                Home
              </Link>
              <Link to="/about" className={navLinkClass('/about')}>
                About
              </Link>
              <Link to="/users" className={navLinkClass('/users')}>
                Users
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link 
                to="/" 
                className={navLinkClass('/', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={navLinkClass('/about', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/users" 
                className={navLinkClass('/users', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Users
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
