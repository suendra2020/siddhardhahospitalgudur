import React from 'react';
import { SERVICES } from '../data/mockData';
import { 
  Siren, HeartPulse, Ambulance, Scan, Microscope, Pill, Scissors, 
  ClipboardCheck, CheckCircle2, Calendar, PhoneCall, ShieldCheck
} from 'lucide-react';

interface ServicesProps {
  onOpenAppointment: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800  mb-5 inline-block">
            24/7 Clinical & Support Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Hospital Services & Facilities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From round-the-clock emergency trauma response and automated pathology labs to 3T MRI diagnostics and zero-infection modular operation suites.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {srv.isEmergency24x7 && (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      24/7 Available
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 dark:border-slate-800/50 mt-4">
                <button
                  onClick={onOpenAppointment}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs shadow-md transition-colors"
                >
                  Inquire / Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
