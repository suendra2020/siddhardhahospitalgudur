import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PhoneCall, Clock, MapPin, Search, Calendar, ChevronDown, Menu, X, 
  Sun, Moon, ShieldAlert, HeartPulse, Stethoscope, Building, Award, 
  Sparkles, CheckCircle2, UserCheck
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { SiddharthaLogo } from '../common/SiddharthaLogo';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Departments', 
      path: '/departments',
      hasDropdown: true,
      dropdownItems: DEPARTMENTS.map(d => ({ name: d.name, path: `/departments/${d.id}`, icon: d.iconName }))
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`w-full sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-shadow duration-300 ${
      isScrolled ? 'shadow-lg border-b border-slate-200/80 dark:border-slate-800/80' : 'shadow-sm border-b border-slate-100 dark:border-slate-800'
    }`}>
      {/* Top Emergency & Info Bar */}
      <div className="hidden xl:block bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-6 flex-wrap justify-center md:justify-start gap-y-1">
            <span className="flex items-center space-x-1.5 text-red-400 font-bold bg-red-950/60 px-2.5 py-0.5 rounded-full border border-red-800/60">
              <PhoneCall className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>24/7 Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span>{HOSPITAL_INFO.workingHours}</span>
            </span>
            <span className="hidden lg:flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{HOSPITAL_INFO.shortLocation}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block text-emerald-400 font-medium">
              ✦ NABH & JCI Accredited Hospital
            </span>
            <a 
              href={`tel:${HOSPITAL_INFO.tollFreePhone}`} 
              className="hover:text-red-300 transition-colors hidden sm:inline"
            >
              Toll Free: {HOSPITAL_INFO.tollFreePhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navbar */}
      <nav className="w-full py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo with Custom Siddhartha Emblem */}
          <Link to="/" className="group">
            <SiddharthaLogo showText size={42} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-1 ${
                    isActive(link.path)
                      ? 'text-[#E52320] dark:text-red-400 font-bold bg-red-50/80 dark:bg-red-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#E52320] dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Mega Menu / Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-3 my-1 animate-fade-in grid grid-cols-1 gap-1">
                    <div className="p-2 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Speciality Departments
                    </div>
                    <div className="max-h-80 overflow-y-auto space-y-1">
                      {link.dropdownItems?.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="flex items-center space-x-3 p-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-[#E52320] transition-colors"
                        >
                          <Building className="w-4 h-4 text-[#E52320]" />
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/departments"
                      className="block text-center text-xs font-bold text-[#E52320] dark:text-red-400 p-2 hover:underline border-t border-slate-100 dark:border-slate-800"
                    >
                      View All 17+ Departments →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-4">
            {/* Emergency 24/7 indicator */}
            <div className="text-right hidden xl:block">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Emergency 24/7</p>
              <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} className="text-sm font-bold text-red-600 hover:underline">
                {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Book Appointment CTA with Brand Red */}
            <button
              onClick={onOpenAppointment}
              className="hidden sm:flex items-center space-x-2 bg-[#E52320] hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-red-200 dark:shadow-none transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 animate-fade-in max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Appointment</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
