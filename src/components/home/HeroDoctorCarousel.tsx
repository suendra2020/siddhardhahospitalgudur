import React, { useState, useEffect } from 'react';

interface DoctorSlide {
  id: string;
  name: string;
  image: string;
}

const SPOTLIGHT_DOCTORS: DoctorSlide[] = [
 
  {
    id: 'dr-meera',
    name1: 'Dr. Meera Srinivas',
    image: '/images/doctors/dd5.png',
  },
  {
    id: 'dr-sunita',
    name1: 'Dr. Sunita Reddy',
    image: '/images/doctors/d2.png',
  },
  {
    id: 'dr-siddharth',
    name1: 'Dr. R. K. Siddhartha',
    image: '/images/doctors/d3.png',
  },
  {
    id: 'dr-ananya',
    name1: 'Dr. Ananya Murthy',
    image: '/images/doctors/d1.png',
  }
];

interface HeroDoctorCarouselProps {
  onOpenAppointment?: (doctorId?: string, deptId?: string) => void;
}

export const HeroDoctorCarousel: React.FC<HeroDoctorCarouselProps> = () => {
  const [docIndex, setDocIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  // Auto scroll doctor portrait and name every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setDocIndex((prev) => (prev + 1) % SPOTLIGHT_DOCTORS.length);
        setFade(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentDoctor = SPOTLIGHT_DOCTORS[docIndex];

  return (
    <div className="relative w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col items-center justify-end select-none overflow-visible">
      
      {/* Main Overlapping Doctor Portrait - Clean cutout with no background blobs */}
      <div 
        className="relative z-10 w-full flex flex-col items-center justify-end transition-all duration-700"
        style={{ 
          opacity: fade ? 1 : 0, 
          transform: fade ? 'translateY(0px)' : 'translateY(16px)' 
        }}
      >
        {/* Doctor Cutout Image */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-[360px] sm:h-[420px] lg:h-[460px] flex items-end justify-center">
          <img
            src={currentDoctor.image}
            alt={currentDoctor.name}
            className="h-full w-auto object-cover object-top rounded-3xl filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] animate-float bgimg"
          />
        </div>

        {/* Doctor Name in Pure White Color */}
        <div className="mt-4 text-center z-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight drop-shadow-md">
            {currentDoctor.name}
          </h3>
          <div className="flex items-center justify-center space-x-1.5 mt-2">
            {SPOTLIGHT_DOCTORS.map((doc, idx) => (
              <span
                key={doc.id}
                className={`h-1.5 rounded-full transition-all ${
                  docIndex === idx ? 'w-6 bg-[#E52320]' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};



