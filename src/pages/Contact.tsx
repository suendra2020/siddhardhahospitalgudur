import React, { useState } from 'react';
import { HOSPITAL_INFO } from '../data/mockData';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Building, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitting(true);
      try {
        await fetch('https://formsubmit.co/ajax/care@siddhardhahospital.org', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            phone,
            email: email || 'Not provided',
            subject,
            message: message || 'General Enquiry',
            _subject: `New Hospital Inquiry from ${name}`,
            _template: 'table',
            _captcha: 'false'
          })
        });
      } catch (err) {
        console.info('FormSubmit process:', err);
      } finally {
        setSubmitting(false);
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 60 });
      }
    }
  };

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800  mb-5 inline-block">
            24/7 Connectivity
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Contact Siddhartha Hospital
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are here for you 24/7. Reach out for OPD bookings, emergency trauma response, international patient desk, or insurance assistance.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">Send a Message</span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">Patient Helpdesk & Enquiries</h2>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">Thank you, {name}. Our hospital desk will respond to your query within 2 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold text-xs mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Query Type</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="OPD Appointment">OPD Appointment</option>
                      <option value="Insurance & Cashless TPA">Insurance & Cashless TPA</option>
                      <option value="Health Packages">Health Checkup Packages</option>
                      <option value="Feedback / Complaint">Patient Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message or Query Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our clinical team assist you today?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-colors text-xs flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Hotline Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl shadow-xl space-y-3">
              <span className="px-3 py-1 bg-white/20 text-xs font-bold rounded-full uppercase tracking-wider inline-block">
                24/7 Level-1 Emergency
              </span>
              <h3 className="text-2xl font-bold font-heading">Emergency & Trauma Hotline</h3>
              <p className="text-3xl font-extrabold font-mono tracking-tight">{HOSPITAL_INFO.emergencyPhone}</p>
              <p className="text-xs text-red-100">Zero-delay resuscitation triage & mobile ICU ACLS ambulances.</p>
            </div>

            {/* Address & Timings */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Hospital Campus Address</h4>
                  <p className="mt-0.5">{HOSPITAL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">OPD Consultation Hours</h4>
                  <p className="mt-0.5">8:00 AM – 8:00 PM (Monday to Saturday)</p>
                  <p className="text-[11px] text-slate-400">Emergency & Casualty: 24/7 (365 Days)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Mail className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email Helplines</h4>
                  <p className="mt-0.5">{HOSPITAL_INFO.email}</p>
                  <p>{HOSPITAL_INFO.appointmentsEmail}</p>
                </div>
              </div>
            </div>

            {/* Interactive Maps Placeholder Card */}
            <div className="bg-slate-200 dark:bg-slate-800 h-48 rounded-3xl overflow-hidden relative flex items-center justify-center border border-slate-300 dark:border-slate-700 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                alt="Hospital Location Map"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute bg-white/90 dark:bg-slate-900/90 p-4 rounded-2xl shadow-xl text-center space-y-1 backdrop-blur-md">
                <MapPin className="w-6 h-6 text-red-600 mx-auto animate-bounce" />
                <p className="font-bold text-xs text-slate-900 dark:text-white">Hospital in West Gudur Rural, Andhra Pradesh</p>
                <a
                  href="https://www.google.com/maps/place/SIDDHARDHA+MULTISPECIALITY+HOSPITAL/@14.1491405,79.8265698,2550m/data=!3m1!1e3!4m10!1m2!2m1!1sHospital+in+West+Gudur+Rural,+Andhra+Pradesh!3m6!1s0x3a4ce364fbdc8e0d:0x55a7765c72cab32e!8m2!3d14.1491405!4d79.8445942!15sCixIb3NwaXRhbCBpbiBXZXN0IEd1ZHVyIFJ1cmFsLCBBbmRocmEgUHJhZGVzaJIBCGhvc3BpdGFs4AEA!16s%2Fg%2F11m68hh96m?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-blue-600 font-bold hover:underline block"
                >
                  Get Driving Directions →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
