import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, ArrowUp, AlertCircle, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/mockData';

interface FloatingActionButtonsProps {
  onOpenAppointment: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({ onOpenAppointment }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const cleanPhone = HOSPITAL_INFO.whatsappPhone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=Hello%20Siddhartha%20Hospital,%20I%20would%20like%20to%20inquire%20about%20medical%20services.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Appointment Floating Button */}
      <div className="pointer-events-auto">
        <button
          onClick={onOpenAppointment}
          className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-5 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Book Appointment"
        >
          <Calendar className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-sm font-medium">Book Appointment</span>
        </button>
      </div>

      {/* Emergency Phone Floating Call Button */}
      <div className="pointer-events-auto relative">
        <div className="absolute -inset-1 rounded-full bg-red-500/40 animate-pulse-ring pointer-events-none"></div>
        <a
          href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
          className="group flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-full shadow-xl hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105"
          title="24/7 Emergency Hotline"
        >
          <PhoneCall className="w-5 h-5 animate-bounce" />
          <span className="hidden md:inline text-xs font-bold uppercase tracking-wider">
            24/7 Emergency
          </span>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="pointer-events-auto">
        <button
          onClick={openWhatsApp}
          className="group flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <div className="pointer-events-auto">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center bg-slate-800/80 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 dark:bg-slate-700 dark:hover:bg-slate-600"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
