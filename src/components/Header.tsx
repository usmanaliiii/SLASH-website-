import React, { useState, useEffect } from 'react';
import { Slash, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transparency based on scroll position for mobile
  const getMobileTransparency = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const maxScroll = 200; // Max scroll distance for full transparency
      const transparency = Math.min(scrollY / maxScroll, 1);
      return Math.max(0.1, transparency); // Minimum 10% opacity
    }
    return 0.9; // Default for desktop
  };

  const services = [
    {
      name: 'Social Media Marketing',
      description: 'Boost your brand presence',
      href: '#services'
    },
    {
      name: 'Digital Marketing',
      description: 'Comprehensive digital strategies',
      href: '#services'
    },
    {
      name: 'Content Creation',
      description: 'Engaging content that converts',
      href: '#services'
    },
    {
      name: 'Brand Building',
      description: 'Build a memorable brand identity',
      href: '#services'
    },
    {
      name: 'Shopify Development',
      description: 'Custom e-commerce solutions',
      href: '#services'
    },
    {
      name: 'Shopify Migration',
      description: 'Seamless platform transitions',
      href: '#services'
    },
    {
      name: 'POS Software Solutions',
      description: 'Modern point-of-sale systems',
      href: '#services'
    },
    {
      name: 'Website Development',
      description: 'Professional web solutions',
      href: '#services'
    }
  ];

  const navItems = [
    // { href: '#home', label: 'Home' }, // Removed to prevent duplicate Home links
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? `bg-white/${Math.round(getMobileTransparency() * 100)} backdrop-blur-md shadow-lg border-b border-stone-200/50` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-slate-800 to-stone-700 rounded-lg flex items-center justify-center shadow-lg">
                <Slash className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-md"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-stone-600 bg-clip-text text-transparent">
              SLASHNEST
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Home Link */}
            <a
              href="#home"
              className="text-slate-700 hover:text-slate-900 transition-colors duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* Services Link (no dropdown) */}
            <a
              href="#services"
              className="text-slate-700 hover:text-slate-900 transition-colors duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* Remaining Nav Items */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Book Appointment Button */}
          <button
            onClick={onBookingClick}
            className="hidden md:block bg-gradient-to-r from-slate-800 to-stone-700 hover:from-slate-900 hover:to-stone-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg hover:bg-stone-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200/50">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#home"
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onBookingClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-slate-800 to-stone-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;