import React, { useState } from 'react';
import { HEALTH_PACKAGES } from '../data/mockData';
import { CheckCircle2, Calendar, ShieldCheck, Star, ChevronDown } from 'lucide-react';

interface HealthPackagesProps {
  onOpenAppointment: () => void;
}

export const HealthPackages: React.FC<HealthPackagesProps> = ({ onOpenAppointment }) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string | null>(HEALTH_PACKAGES[0].id);

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Preventive Diagnostic Health
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Executive Health Checkup Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Preventive health screens conducted in a quiet, dedicated diagnostic floor with same-day digital reporting and doctor consultations.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTH_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-800">
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{pkg.targetAudience}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  {pkg.name}
                </h3>

                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-heading">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹{pkg.originalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                    Includes {pkg.testsIncluded} Key Parameters
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Collapsible Test Breakdown */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPkgId(selectedPkgId === pkg.id ? null : pkg.id)}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center space-x-1 hover:underline"
                  >
                    <span>{selectedPkgId === pkg.id ? 'Hide Full Test Details' : 'View Full Test List'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transform transition-transform ${selectedPkgId === pkg.id ? 'rotate-180' : ''}`} />
                  </button>

                  {selectedPkgId === pkg.id && (
                    <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-1.5 text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 animate-fade-in">
                      {pkg.testDetails.map((td, idx) => (
                        <p key={idx} className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          <span>{td}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={onOpenAppointment}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md transition-colors text-xs flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Package Consultation</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
