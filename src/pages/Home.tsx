import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, PhoneCall, ShieldAlert, Award, HeartPulse, Stethoscope, 
  ChevronRight, ChevronLeft, ArrowRight, CheckCircle2, Star, Activity, Users, 
  Building, Clock, Sparkles, Search, HelpCircle, UserCheck, ShieldCheck,
  Video, Eye, Play, MapPin, Zap
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS, FAQS } from '../data/mockData';
import { HeroDoctorCarousel } from '../components/home/HeroDoctorCarousel';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection';

interface HomeProps {
  onOpenAppointment: (doctorId?: string, deptId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAppointment }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeptCategory, setSelectedDeptCategory] = useState<string>('All');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Automatic Hero Carousel States
  const [leftSlideIndex, setLeftSlideIndex] = useState(0);
  const [rightSlideIndex, setRightSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const heroLeftSlides = [
    {
      badge: 'NABH & JCI Accredited Tertiary Center',
      title: 'Compassionate Care. Advanced Medical Excellence.',
      subtitle: '500+ Bedded Tertiary Hospital equipped with Robotic Surgical Systems, 24/7 Level-1 Trauma Care, and 140+ internationally trained medical specialists.',
      bgImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
      highlightTag: 'Zero-Wait ER Triage'
    },
    {
      badge: 'State-of-the-Art Surgical Robotics',
      title: 'Precision Robotic & Minimally Invasive Surgery.',
      subtitle: 'DaVinci Robotic Surgical Suite enabling ultra-precise cardiac, neurological, orthopaedic and organ transplant surgeries with 50% faster recovery.',
      bgImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000',
      highlightTag: 'Over 10,000+ Successful Robotic Surgeries'
    },
    {
      badge: '24/7 Level-1 Emergency & ICU Care',
      title: 'Rapid Emergency Response & Critical Care Units.',
      subtitle: 'Dedicated Cardiac Cath Labs, Stroke Rapid Response Team, and 120 Advanced Critical Care ICU Beds with round-the-clock specialists.',
      bgImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000',
      highlightTag: 'ACLS Ambulances Dispatched in 180s'
    },
    {
      badge: 'Mother & Child Centre of Excellence',
      title: 'Super Specialty Maternity & Paediatric Care.',
      subtitle: 'Level-4 NICU/PICU, high-risk pregnancy fetal medicine, and compassionate mother-child care led by senior obstetricians and pediatricians.',
      bgImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=2000',
      highlightTag: '24/7 Neonatal & Fetal Care Unit'
    }
  ];

  // Auto-play interval for hero carousels (cycles every 4.5 seconds)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setLeftSlideIndex((prev) => (prev + 1) % heroLeftSlides.length);
      setRightSlideIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, heroLeftSlides.length]);

  const filteredDepartments = selectedDeptCategory === 'All'
    ? DEPARTMENTS
    : DEPARTMENTS.filter(d => d.category === selectedDeptCategory);

  return (
    <div className="w-full space-y-20 pb-16">
      
      {/* 1. Fullscreen Hero Section with Dual Automatic Carousel */}
      <section 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-12 lg:py-0 transition-all"
      >
        {/* Dynamic Slide Background Image with Soft Dark Gradient */}
        {heroLeftSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              idx === leftSlideIndex ? 'opacity-35' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-red-950/40"></div>
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Carousel Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Slide Counter & Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center space-x-2 bg-[#E52320]/20 border border-[#E52320]/40 px-3.5 py-1.5 rounded-full backdrop-blur-md text-red-200 text-xs sm:text-sm font-semibold">
                  <Sparkles className="w-4 h-4 text-[#E52320]" />
                  <span>{heroLeftSlides[leftSlideIndex].badge}</span>
                </span>
                <span className="px-2.5 py-1 bg-white/10 text-slate-300 text-xs rounded-full font-mono font-medium backdrop-blur-sm">
                  0{leftSlideIndex + 1} / 0{heroLeftSlides.length}
                </span>
              </div>

              {/* Animated Slide Title */}
              <div className="min-h-[140px] sm:min-h-[160px] flex items-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading text-white transition-all">
                  {heroLeftSlides[leftSlideIndex].title.split('.')[0]}. <br />
                  <span className="text-[#E52320] bg-clip-text text-transparent bg-gradient-to-r from-[#E52320] to-rose-400">
                    {heroLeftSlides[leftSlideIndex].title.split('.')[1] || ''}
                  </span>
                </h1>
              </div>

              {/* Slide Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed font-light min-h-[60px]">
                {heroLeftSlides[leftSlideIndex].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onOpenAppointment()}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#E52320] hover:bg-red-700 text-white font-bold rounded-full shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 text-sm sm:text-base cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book OPD Appointment</span>
                </button>

                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold rounded-full border border-red-500/50 shadow-lg transition-all flex items-center justify-center space-x-3 text-sm sm:text-base group"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse text-[#E52320]" />
                  <span>24/7 Emergency Call</span>
                </a>
              </div>

              {/* Carousel Indicators & Controls */}
              <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4">
                <button
                  onClick={() => setLeftSlideIndex((prev) => (prev - 1 + heroLeftSlides.length) % heroLeftSlides.length)}
                  className="p-2 rounded-full bg-slate-900/80 hover:bg-[#E52320] text-white border border-slate-700 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots */}
                <div className="flex items-center space-x-2">
                  {heroLeftSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLeftSlideIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === leftSlideIndex ? 'w-8 bg-[#E52320]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setLeftSlideIndex((prev) => (prev + 1) % heroLeftSlides.length)}
                  className="p-2 rounded-full bg-slate-900/80 hover:bg-[#E52320] text-white border border-slate-700 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Features */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-Wait ER</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cashless Insurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Robotic Surgery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 ICU & Lab</span>
                </div>
              </div>
            </div>

            {/* Right Carousel Column */}
            <div className="lg:col-span-5">
              <HeroDoctorCarousel onOpenAppointment={onOpenAppointment} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Hospital Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            {HOSPITAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E52320] dark:text-red-400 font-heading tracking-tight">
                  {stat.value}
                </span>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Siddhartha Hospital */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-[#E52320] uppercase tracking-widest bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900">
            Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Why Choose Siddhartha Hospital?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm">
            Delivering advanced tertiary medical care backed by pioneering technology, patient-first empathy, and zero compromise on safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '3D Robotic Surgical Precision',
              description: 'South India’s leading center for robotic knee replacement, laparoscopic tumor resection, and minimally invasive surgeries with sub-millimeter precision.',
              icon: Zap,
              color: 'text-[#E52320] bg-red-50 dark:bg-red-950/50'
            },
            {
              title: '24/7 Level-1 Emergency & ICU',
              description: 'Dedicated zero-wait trauma triage, 120 intensive care beds, cardiac PPCI protocols, and a fleet of mobile ICU ambulances.',
              icon: ShieldAlert,
              color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/50'
            },
            {
              title: 'Pioneering Medical Specialists',
              description: 'Over 140+ senior consultants and surgeons trained at top institutes like AIIMS, Mount Sinai, NIMHANS, and Royal Colleges (UK).',
              icon: UserCheck,
              color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 space-y-4"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#E52320] transition-colors font-heading">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Departments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#E52320] uppercase tracking-widest bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900">
              Centers of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading mt-2">
              Speciality Departments
            </h2>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Super Speciality', 'Surgical', 'Medical', 'Diagnostics & Emergency'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedDeptCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedDeptCategory === cat
                    ? 'bg-[#E52320] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Departments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-[#E52320] text-white rounded-lg">
                    {dept.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#E52320] transition-colors font-heading">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {dept.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    {dept.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <Link
                  to={`/departments/${dept.id}`}
                  className="text-xs font-bold text-[#E52320] hover:underline flex items-center space-x-1"
                >
                  <span>Explore Department</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenAppointment(undefined, dept.id)}
                  className="px-3.5 py-1.5 bg-red-50 dark:bg-red-950/60 text-[#E52320] hover:bg-[#E52320] hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Doctors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-[#E52320] uppercase tracking-widest bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900">
              Expert Medical Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading mt-2">
              Meet Our Senior Specialists
            </h2>
          </div>

          <Link
            to="/doctors"
            className="inline-flex items-center space-x-1 text-sm font-bold text-[#E52320] hover:underline"
          >
            <span>View All 140+ Doctors</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.slice(0, 4).map((doc) => (
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
                  <span className="text-xs font-bold text-[#E52320] uppercase tracking-wider block">
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
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#E52320] shrink-0" />
                  <span>OPD: {doc.opdTimings}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    to={`/doctors/${doc.id}`}
                    className="px-3 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl text-center transition-colors"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => onOpenAppointment(doc.id, doc.departmentId)}
                    className="px-3 py-2 bg-[#E52320] hover:bg-red-700 text-white text-xs font-bold rounded-xl text-center shadow-md transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Patient Testimonials & Google Reviews */}
      <GoogleReviewsSection />

      {/* 7. FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-[#E52320] uppercase tracking-widest bg-red-50 dark:bg-red-950/60 px-3.5 py-1 rounded-full border border-red-200 dark:border-red-900">
            Help & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-6 font-bold text-slate-900 dark:text-white flex justify-between items-center text-sm sm:text-base hover:text-[#E52320] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-slate-400 transform transition-transform ${activeFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Emergency Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#E52320] via-red-700 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full border border-white/30 inline-block">
              24 Hours Ambulance & Trauma Hotline
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading">
              In Need of Critical Emergency Care?
            </h3>
            <p className="text-sm text-red-100 leading-relaxed">
              Our mobile ICU ACLS ambulances are dispatched within 180 seconds. Dedicated zero-wait trauma triage team standing by.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-2xl shadow-xl flex items-center justify-center space-x-3 text-sm sm:text-base transition-all border border-white/20"
            >
              <PhoneCall className="w-5 h-5 animate-bounce text-[#E52320]" />
              <span>Call Emergency Now</span>
            </a>
            <button
              onClick={() => onOpenAppointment()}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold rounded-2xl backdrop-blur-md flex items-center justify-center space-x-2 text-sm sm:text-base transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
