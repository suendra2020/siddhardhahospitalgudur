import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from '../data/mockData';
import { Building, Search, ChevronRight, CheckCircle2, HeartPulse, Stethoscope, ShieldAlert } from 'lucide-react';

interface DepartmentsProps {
  onOpenAppointment: (doctorId?: string, deptId?: string) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({ onOpenAppointment }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Super Speciality', 'Surgical', 'Medical', 'Diagnostics & Emergency'];

  const filteredDepts = DEPARTMENTS.filter((d) => {
    const matchesCategory = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 text-center">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
            Centers of Medical Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Speciality Clinical Departments
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            17+ state-of-the-art super-speciality departments offering 24/7 tertiary care, advanced robotic surgery, and dedicated intensive care units.
          </p>

          {/* Search UI */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search department, treatment or specialty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xl"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-3 py-1 bg-blue-600 text-white rounded-lg">
                    {dept.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {dept.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Highlights</p>
                    {dept.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 dark:border-slate-800/50 mt-4">
                <Link
                  to={`/departments/${dept.id}`}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                >
                  <span>Explore Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenAppointment(undefined, dept.id)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
