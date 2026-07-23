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
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-2xl shadow-md transition-transform hover:scale-105"
      >
        {/* Background container if dark/light variant specified */}
        {variant === 'dark' && (
          <rect width="120" height="120" rx="24" fill="#2D2D2D" />
        )}
        {variant === 'light' && (
          <rect width="120" height="120" rx="24" fill="#FFFFFF" />
        )}

        <g transform="translate(10, 10)">
          {/* Vibrant Red Medical Cross Base (#E52320) */}
          {/* Horizontal Bar */}
          <rect x="5" y="36" width="90" height="28" rx="8" fill="#E52320" />
          {/* Vertical Bar */}
          <rect x="36" y="5" width="28" height="90" rx="8" fill="#E52320" />

          {/* White Stylized 'S' Ribbon Overlay */}
          <path
            d="M 62 10 
               C 35 10, 31 38, 50 50 
               C 68 62, 65 90, 38 90 
               C 29 90, 31 82, 38 82 
               C 56 82, 58 58, 41 46 
               C 25 34, 32 10, 62 10 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>

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
