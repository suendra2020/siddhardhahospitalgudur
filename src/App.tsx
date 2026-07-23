import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActionButtons } from './components/common/FloatingActionButtons';
import { AppointmentModal } from './components/modals/AppointmentModal';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Departments } from './pages/Departments';
import { DepartmentDetail } from './pages/DepartmentDetail';
import { Doctors } from './pages/Doctors';
import { DoctorProfile } from './pages/DoctorProfile';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);
  const [selectedDeptId, setSelectedDeptId] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (doctorId?: string, deptId?: string) => {
    setSelectedDoctorId(doctorId);
    setSelectedDeptId(deptId);
    setAppointmentModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
          <Navbar onOpenAppointment={() => handleOpenAppointment()} />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/departments" element={<Departments onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/departments/:id" element={<DepartmentDetail onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/doctors" element={<Doctors onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/doctors/:id" element={<DoctorProfile onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/services" element={<Services onOpenAppointment={() => handleOpenAppointment()} />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home onOpenAppointment={handleOpenAppointment} />} />
            </Routes>
          </main>

          <Footer />

          {/* Floating Emergency, WhatsApp, and Scroll-to-top buttons */}
          <FloatingActionButtons onOpenAppointment={() => handleOpenAppointment()} />

          {/* Appointment Booking Modal */}
          <AppointmentModal
            isOpen={appointmentModalOpen}
            onClose={() => setAppointmentModalOpen(false)}
            preselectedDoctorId={selectedDoctorId}
            preselectedDeptId={selectedDeptId}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
