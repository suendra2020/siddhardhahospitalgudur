import React from 'react';
import { HOSPITAL_INFO, TIMELINE_EVENTS } from '../data/mockData';
import { Award, ShieldCheck, Heart, Eye, Target, Sparkles, Building, CheckCircle2, Users } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
            alt="Hospital Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            28+ Years of Medical Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            About Siddhartha Multispeciality Hospital
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to deliver world-class, ethical, and compassionate tertiary healthcare accessible to every human life.
          </p>
        </div>
      </section>

      {/* Hospital Overview & Legacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full">
              Our Legacy of Care
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              Combining Cutting-Edge Medicine with Human Empathy
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Established in 1998 in Bengaluru, Siddhartha Multispeciality Hospital has grown from a modest 50-bed community hospital into a premier 500-bed multi-organ tertiary care destination.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Equipped with 14 modular laminar airflow operation suites, flat-panel cardiac cath labs, intraoperative 3T MRI, 3D robotic surgical suites, and Level-3 critical ICUs, our multidisciplinary clinical team has successfully performed over 250,000 surgeries and treated over 1.2 million patients across 35 countries.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">NABH & JCI</p>
                  <p className="text-xs text-slate-500">Dual Quality Accreditation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">140+ Specialists</p>
                  <p className="text-xs text-slate-500">Global Medical Faculty</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200"
              alt="Hospital Infrastructure"
              className="rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-3xl shadow-xl hidden sm:block max-w-xs">
              <p className="text-3xl font-extrabold font-heading">28+ Years</p>
              <p className="text-xs text-blue-100">Pioneering medical innovations and compassionate patient healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Our Mission</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide patient-centered tertiary healthcare of global standards through continuous clinical innovation, ethical practices, and advanced surgical precision.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Our Vision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be Asia's most trusted multispeciality healthcare network known for zero-compromise clinical quality, robotic innovation, and patient satisfaction.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Core Values</h3>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Empathy & Compassion First</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Uncompromising Clinical Integrity</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Continuous Innovation & Research</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chairman & Director Message */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
              Leadership Guidance
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              Messages from Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6">
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Healthcare is not merely an industry; it is a sacred trust. When a patient enters Siddhartha Hospital, our responsibility extends beyond medical diagnosis to instilling hope, comfort, and safety in their hearts."
              </p>
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200"
                  alt="Chairman"
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base font-heading">Dr. R. K. Siddhartha</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Founder & Chairman</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6">
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "By integrating 3D robotic surgical equipment, AI-assisted emergency triage, and international infection control protocols, we ensure every patient receives world-standard medical treatment right here in India."
              </p>
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1594824813566-78a984f479d2?auto=format&fit=crop&q=80&w=200"
                  alt="Managing Director"
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base font-heading">Dr. Ananya Murthy</h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">Managing Director & Medical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Journey Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
            Our Growth Story
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Hospital Journey Timeline
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-500/40 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform"></div>

              {/* Year Label */}
              <div className="sm:absolute sm:-left-36 sm:top-1 font-mono font-extrabold text-blue-600 dark:text-blue-400 text-base mb-1 sm:mb-0">
                {event.year}
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base font-heading">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
