import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DOCTORS } from '../data/mockData';
import { 
  Star, Award, GraduationCap, Stethoscope, Clock, Calendar, 
  MapPin, ShieldCheck, ArrowLeft, CheckCircle2, UserCheck, MessageSquare 
} from 'lucide-react';

interface DoctorProfileProps {
  onOpenAppointment: (doctorId?: string, deptId?: string) => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenAppointment }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const doc = DOCTORS.find((d) => d.id === id);

  if (!doc) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold">Doctor Profile Not Found</h2>
        <button
          onClick={() => navigate('/doctors')}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold"
        >
          Back to Doctors Directory
        </button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Header Card */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/doctors"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Doctors Directory</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="lg:col-span-9 space-y-4 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full border border-blue-400/30">
                  {doc.departmentName}
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-400/30">
                  {doc.availability}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">
                {doc.name}
              </h1>
              <p className="text-sm text-blue-200 font-medium">{doc.title}</p>
              <p className="text-xs text-slate-300">{doc.qualification}</p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 pt-2 border-t border-white/10">
                <span className="flex items-center space-x-1">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>{doc.experience}+ Years Clinical Experience</span>
                </span>
                <span className="flex items-center space-x-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{doc.rating} ({doc.reviewCount} Verified Ratings)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{doc.roomNumber}</span>
                </span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => onOpenAppointment(doc.id, doc.departmentId)}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl flex items-center space-x-2 text-sm"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Book Consultation Slot (₹{doc.consultationFee})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Doctor */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                About {doc.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {doc.about}
              </p>
            </div>

            {/* Specializations & Clinical Expertise */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Specializations & Clinical Procedures
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doc.specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Fellowships */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Education & Global Fellowships
              </h3>
              <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                {doc.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Honors */}
            {doc.awards.length > 0 && (
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  Awards & National Recognition
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {doc.awards.map((award, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Schedule Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white font-heading border-b border-slate-100 dark:border-slate-800 pb-3">
                OPD Schedule & Fees
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">OPD Timings</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{doc.opdTimings}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">OPD Location</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{doc.roomNumber}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Consultation Fee</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">₹{doc.consultationFee}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500">Languages Spoken</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{doc.languages.join(', ')}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenAppointment(doc.id, doc.departmentId)}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-colors text-sm"
              >
                Book OPD Appointment
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
