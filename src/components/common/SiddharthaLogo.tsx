import React from 'react';

interface SiddharthaLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'transparent';
}

export const SiddharthaLogo: React.FC<SiddharthaLogoProps> = ({
  className = '',
  size = 40,
  showText = false,
  variant = 'transparent'
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
    
      
       <img
              src="./images/doctors/logo1.png"
              alt="Hospital Infrastructure"
              className="rounded-3xl shadow-2xl w-10 border border-slate-100 dark:border-slate-800 object-cover"
            />

      {showText && (
        <div>
          <h1 className="text-xl font-bold leading-none text-[#E52320] font-heading tracking-tight">
            Siddhartha
          </h1>
          <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">
            Multispeciality Hospital
          </p>
        </div>
      )}
    </div>
  );
};
