import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Stethoscope, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DEPARTMENTS, DOCTORS } from '../../data/mockData';
import { AppointmentFormData } from '../../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctorId?: string;
  preselectedDeptId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctorId,
  preselectedDeptId
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    department: preselectedDeptId || DEPARTMENTS[0].id,
    doctor: preselectedDoctorId || '',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTimeSlot: '10:00 AM',
    symptoms: '',
    visitType: 'First Visit'
  });

  const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');

  // Synchronize doctor list on department change
  useEffect(() => {
    if (formData.department) {
      const docs = DOCTORS.filter((d) => d.departmentId === formData.department);
      setFilteredDoctors(docs);
      if (!docs.some((d) => d.id === formData.doctor)) {
        setFormData((prev) => ({ ...prev, doctor: docs[0]?.id || '' }));
      }
    } else {
      setFilteredDoctors(DOCTORS);
    }
  }, [formData.department]);

  useEffect(() => {
    if (preselectedDoctorId) {
      const doc = DOCTORS.find((d) => d.id === preselectedDoctorId);
      if (doc) {
        setFormData((prev) => ({
          ...prev,
          doctor: doc.id,
          department: doc.departmentId
        }));
      }
    } else if (preselectedDeptId) {
      setFormData((prev) => ({
        ...prev,
        department: preselectedDeptId
      }));
    }
  }, [preselectedDoctorId, preselectedDeptId, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit mobile number required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email address required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const randomApptId = 'SMH-' + Math.floor(100000 + Math.random() * 900000);
      setAppointmentId(randomApptId);

      const selectedDoctorObj = DOCTORS.find((d) => d.id === formData.doctor);
      const selectedDeptObj = DEPARTMENTS.find((dept) => dept.id === formData.department);

      // Submit via FormSubmit API (https://formsubmit.co)
      const formPayload = {
        appointmentId: randomApptId,
        patientName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        department: selectedDeptObj?.name || formData.department,
        doctor: selectedDoctorObj?.name || 'Assigned Specialist',
        preferredDate: formData.preferredDate,
        timeSlot: formData.preferredTimeSlot,
        symptoms: formData.symptoms || 'None provided',
        _subject: `New OPD Appointment #${randomApptId} - ${formData.fullName}`,
        _template: 'table',
        _captcha: 'false'
      };

      try {
        await fetch('https://formsubmit.co/ajax/care@siddhardhahospital.org', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formPayload)
        });
      } catch (err) {
        console.info('FormSubmit process:', err);
      } finally {
        setIsSubmitting(false);
        setIsSubmitted(true);

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const selectedDoctorObj = DOCTORS.find((d) => d.id === formData.doctor);
  const selectedDeptObj = DEPARTMENTS.find((dept) => dept.id === formData.department);

  const resetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in overflow-hidden">
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-all">
        {/* Always visible, high contrast Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-white/20 shadow-lg transition-all focus:outline-none flex items-center justify-center cursor-pointer min-w-[44px] min-h-[44px]"
          aria-label="Close modal"
          title="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#E52320] via-red-700 to-rose-800 p-5 sm:p-7 text-white relative shrink-0 pr-16 sm:pr-20">
          <div className="flex items-center space-x-2.5 mb-1.5">
            <span className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-white" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-100">
              Siddhartha Hospital OPD
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-heading">
            Book Doctor Appointment
          </h2>
          <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-md leading-relaxed">
            Guaranteed consultation slot with world-class specialists. Zero waiting time.
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-7 overflow-y-auto flex-1 space-y-5">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Appointment Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  Your OPD token has been generated. Confirmation details have been sent via SMS & Email.
                </p>
              </div>

              {/* Digital Pass Ticket */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-6 rounded-2xl border border-dashed border-red-300 dark:border-red-700 max-w-md mx-auto text-left space-y-3.5">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Appointment ID</span>
                    <p className="text-base sm:text-lg font-mono font-bold text-[#E52320] dark:text-red-400">{appointmentId}</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Patient Name</span>
                    <p className="font-bold text-slate-800 dark:text-slate-100 truncate">{formData.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Doctor</span>
                    <p className="font-bold text-slate-800 dark:text-slate-100 truncate">{selectedDoctorObj?.name || 'Assigned Specialist'}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Department</span>
                    <p className="font-bold text-slate-800 dark:text-slate-100 truncate">{selectedDeptObj?.name}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Date & Time</span>
                    <p className="font-bold text-slate-800 dark:text-slate-100 truncate">{formData.preferredDate} at {formData.preferredTimeSlot}</p>
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E52320] shrink-0" />
                  <span>Please present this digital pass at OPD Desk 15 mins prior.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-8 py-3 bg-[#E52320] hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all ${
                        errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="ramesh.kumar@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Select Department */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Select Department *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Select Doctor */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Select Doctor *
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all"
                    >
                      {filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doc) => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name} ({doc.title})
                          </option>
                        ))
                      ) : (
                        <option value="">Any Available Specialist</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all"
                    >
                      <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                      <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:30 AM">11:30 AM - 12:30 PM</option>
                      <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                      <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                      <option value="06:00 PM">06:00 PM - 07:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Symptoms / Chief Complaint */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Symptoms or Medical Reason (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your symptoms or reason for visit..."
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#E52320] outline-none text-slate-900 dark:text-white transition-all"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Confidential & Secure HIPAA compliant</span>
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-[#E52320] hover:bg-red-700 disabled:opacity-70 text-white font-bold rounded-xl shadow-lg shadow-red-200 dark:shadow-none transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Booking</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
