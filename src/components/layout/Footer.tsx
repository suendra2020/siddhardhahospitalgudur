import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, PhoneCall, Mail, MapPin, Clock, ShieldCheck, 
  Send, CheckCircle2, ChevronRight, Award
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../../data/mockData';
import { SiddharthaLogo } from '../common/SiddharthaLogo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About Hospital */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/">
              <SiddharthaLogo showText size={44} />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              South India’s premier tertiary care hospital dedicated to patient-centric medical excellence, robotic surgeries, 24/7 level-1 emergency trauma care, and compassionate healing.
            </p>

            {/* Accreditations */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Quality & Safety Accreditations
              </span>
              <div className="flex flex-wrap gap-2">
                {HOSPITAL_INFO.accreditations.map((acc) => (
                  <span
                    key={acc.name}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700/60"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{acc.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-l-2 border-[#E52320] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'About Hospital', path: '/about' },
                { name: 'Specialist Doctors', path: '/doctors' },
                { name: 'Medical Departments', path: '/departments' },
                { name: '24/7 Emergency Care', path: '/services' },
                { name: 'Hospital Gallery', path: '/gallery' },
                { name: 'Contact & Location', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-red-400 transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Departments */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-l-2 border-emerald-500 pl-2">
              Speciality Clinics
            </h4>
            <ul className="space-y-2 text-xs">
              {DEPARTMENTS.slice(0, 8).map((dept) => (
                <li key={dept.id}>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{dept.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-l-2 border-amber-500 pl-2">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>OPD: 8 AM - 8 PM (Mon-Sat)</span>
              </div>
            </div>

            {/* Health Newsletter Signup */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Subscribe to Health Tips
              </span>
              {subscribed ? (
                <div className="bg-emerald-950/60 text-emerald-300 p-2.5 rounded-xl border border-emerald-800/50 text-xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Thank you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-xs text-white px-3 py-2 rounded-l-xl focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-xl transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Siddhardha Multispeciality Hospital. All Rights Reserved.</p>
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Services Operational</span>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Patient Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
