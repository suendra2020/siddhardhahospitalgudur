import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOCTORS, DEPARTMENTS } from '../data/mockData';
import { Search, Star, Clock, Calendar, Stethoscope, ChevronRight, Filter } from 'lucide-react';

interface DoctorsProps {
  onOpenAppointment: (doctorId?: string, deptId?: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenAppointment }) => {
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) || doc.specializations.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesDept = selectedDept === 'All' || doc.departmentId === selectedDept;
    const matchesAvail = selectedAvailability === 'All' || doc.availability === selectedAvailability;
    return matchesSearch && matchesDept && matchesAvail;
  });

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            World-Class Medical Faculty
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Find & Book Specialist Doctors
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Over 140+ senior consultants and interventional surgeons trained at top institutes worldwide.
          </p>

          {/* Search UI */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctor by name, qualification or disease..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-800/90 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xl"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Toolbar & Doctor Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-blue-500" />
            <span>Filter By:</span>
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            {/* Department Filter */}
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="All">All Specialities</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>

            {/* Availability Filter */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="All">All Availabilities</option>
              <option value="Today">Available Today</option>
              <option value="Tomorrow">Available Tomorrow</option>
            </select>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-500 flex items-center space-x-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{doc.rating} ({doc.reviewCount})</span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-emerald-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {doc.availability}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                    {doc.departmentName}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {doc.qualification}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    🎓 {doc.experience}+ Years Clinical Experience
                  </p>
                  <p className="text-[11px] text-slate-400">
                    🗣️ Speaks: {doc.languages.join(', ')}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{doc.opdTimings}</span>
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    ₹{doc.consultationFee} OPD Fee
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    to={`/doctors/${doc.id}`}
                    className="px-3 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl text-center transition-colors"
                  >
                    View Bio
                  </Link>
                  <button
                    onClick={() => onOpenAppointment(doc.id, doc.departmentId)}
                    className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl text-center shadow-md transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
