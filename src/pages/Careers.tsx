import React, { useState } from 'react';
import { CAREER_JOBS } from '../data/mockData';
import { CareerJob } from '../types';
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight, X, Send, Award, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [resumeNote, setResumeNote] = useState('');
  const [applied, setApplied] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantPhone) {
      setApplied(true);
      confetti({ particleCount: 80, spread: 60 });
    }
  };

  const closeApplyModal = () => {
    setSelectedJob(null);
    setApplied(false);
    setApplicantName('');
    setApplicantPhone('');
    setApplicantEmail('');
  };

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800  mb-5 inline-block">
            Join Our Healthcare Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Careers at Siddhartha Hospital
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Build your medical career alongside world-class surgeons, advanced robotic infrastructure, and a culture of empathy.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg font-heading">Competitive Compensation</h3>
            <p className="text-xs text-slate-500">Above-market remuneration, health insurance for family, and performance bonuses.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg font-heading">Robotic & Surgical Training</h3>
            <p className="text-xs text-slate-500">Sponsored fellowship programs and hands-on exposure to robotic surgery suites.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg font-heading">Work-Life Balance</h3>
            <p className="text-xs text-slate-500">Structured shift rosters, resting quarters, and employee wellness initiatives.</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full">
            Current Vacancies
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Open Clinical & Admin Vacancies
          </h2>
        </div>

        <div className="space-y-6">
          {CAREER_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-400">• {job.department}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">{job.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{job.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                  <span>📍 Location: {job.location}</span>
                  <span>🎓 Exp: {job.experienceRequired}</span>
                  <span>⏳ Deadline: {job.deadline}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-md transition-colors text-xs whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 border border-slate-100 dark:border-slate-800">
            <button onClick={closeApplyModal} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>

            {applied ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Application Received!</h3>
                <p className="text-xs text-slate-500">Our HR Recruitment desk will review your profile for {selectedJob.title} and contact you shortly.</p>
                <button onClick={closeApplyModal} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-xs">
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Applying For</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedJob.title}</h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Jane Smith"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane.smith@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Medical Registrations & Brief Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Provide your KMC/Medical council registration number and experience summary..."
                    value={resumeNote}
                    onChange={(e) => setResumeNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-lg transition-colors"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
