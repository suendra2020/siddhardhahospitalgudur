import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DEPARTMENTS, DOCTORS } from '../data/mockData';
import { 
  Building, CheckCircle2, Stethoscope, Calendar, ArrowLeft, 
  HelpCircle, ShieldCheck, Activity, Award, User, ChevronRight 
} from 'lucide-react';

interface DepartmentDetailProps {
  onOpenAppointment: (doctorId?: string, deptId?: string) => void;
}

export const DepartmentDetail: React.FC<DepartmentDetailProps> = ({ onOpenAppointment }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dept = DEPARTMENTS.find((d) => d.id === id);

  if (!dept) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold">Department Not Found</h2>
        <p className="text-slate-500">The requested clinical department could not be located.</p>
        <button
          onClick={() => navigate('/departments')}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold"
        >
          Back to All Departments
        </button>
      </div>
    );
  }

  const relatedDoctors = DOCTORS.filter((doc) => doc.departmentId === dept.id);

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Banner */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={dept.bannerImage} alt={dept.name} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <Link
            to="/departments"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 hover:underline mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Departments</span>
          </Link>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800 block w-fit">
            {dept.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            {dept.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {dept.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenAppointment(undefined, dept.id)}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl flex items-center space-x-2 text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Department Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Department Overview
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {dept.fullDescription}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dept.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatments & Procedures Offered */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Treatments & Clinical Surgeries
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dept.treatments.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700/60 flex items-center space-x-2"
                  >
                    <Activity className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities & Infrastructure */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Facilities & Advanced Equipment
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dept.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-600 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Specialist Doctors */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Department Faculty Specialists
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md flex items-center space-x-4"
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm font-heading">{doc.name}</h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400">{doc.title}</p>
                      <p className="text-[11px] text-slate-500">{doc.experience}+ Yrs Exp</p>
                      <button
                        onClick={() => onOpenAppointment(doc.id, doc.departmentId)}
                        className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Book Appointment →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department FAQs */}
            {dept.faqs.length > 0 && (
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Department FAQs
                </h3>
                <div className="space-y-3">
                  {dept.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl space-y-1">
                      <p className="font-bold text-xs text-slate-900 dark:text-white">Q: {faq.question}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* HOD Profile Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                Head of Department
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base font-heading">
                {dept.headOfDepartment}
              </h4>
              <p className="text-xs text-slate-500">
                Directing clinical surgeries, research protocols, and patient safety standards.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-6 rounded-3xl shadow-xl space-y-4">
              <h4 className="font-bold text-lg font-heading">Department Milestones</h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-blue-200">Surgeries Performed</span>
                  <span className="font-bold">{dept.stats.surgeriesCompleted}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-blue-200">Bed Capacity</span>
                  <span className="font-bold">{dept.stats.bedCapacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Senior Consultants</span>
                  <span className="font-bold">{dept.stats.doctorCount} Doctors</span>
                </div>
              </div>

              <button
                onClick={() => onOpenAppointment(undefined, dept.id)}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs shadow-md transition-colors"
              >
                Book OPD Consultation
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
