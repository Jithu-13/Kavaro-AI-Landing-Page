import React from 'react';

export function KavaroLogoDark({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape based on the original logo */}
      <path d="M100 20L170 50V110C170 145 135 175 100 190C65 175 30 145 30 110V50L100 20Z" fill="#B6E1C4" />
      
      {/* Circuit Tree - exact match to original */}
      <g fill="#1B1D2F">
        {/* Main Center Stem */}
        <rect x="95" y="60" width="10" height="90" rx="2" />
        
        {/* Top Node */}
        <circle cx="100" cy="60" r="8" />
        
        {/* Upper Right Branch */}
        <path d="M100 80L145 65V73L100 88V80Z" />
        <circle cx="145" cy="69" r="8" />
        
        {/* Upper Left Branch */}
        <path d="M55 85L100 80V88L55 93V85Z" />
        <circle cx="55" cy="89" r="8" />
        
        {/* Lower Right Branch */}
        <path d="M100 120L145 105V113L100 128V120Z" />
        <circle cx="145" cy="109" r="8" />
        
        {/* Lower Left Branch */}
        <path d="M55 125L100 120V128L55 133V125Z" />
        <circle cx="55" cy="129" r="8" />
        
        {/* Bottom Node */}
        <circle cx="100" cy="150" r="8" />
      </g>
    </svg>
  );
}

export function KavaroLogoLight({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape based on the original logo */}
      <path d="M100 20L170 50V110C170 145 135 175 100 190C65 175 30 145 30 110V50L100 20Z" fill="#0F1C3E" />
      
      {/* Circuit Tree - exact match to original */}
      <g fill="#3BA271">
        {/* Main Center Stem */}
        <rect x="95" y="60" width="10" height="90" rx="2" />
        
        {/* Top Node */}
        <circle cx="100" cy="60" r="8" />
        
        {/* Upper Right Branch */}
        <path d="M100 80L145 65V73L100 88V80Z" />
        <circle cx="145" cy="69" r="8" />
        
        {/* Upper Left Branch */}
        <path d="M55 85L100 80V88L55 93V85Z" />
        <circle cx="55" cy="89" r="8" />
        
        {/* Lower Right Branch */}
        <path d="M100 120L145 105V113L100 128V120Z" />
        <circle cx="145" cy="109" r="8" />
        
        {/* Lower Left Branch */}
        <path d="M55 125L100 120V128L55 133V125Z" />
        <circle cx="55" cy="129" r="8" />
        
        {/* Bottom Node */}
        <circle cx="100" cy="150" r="8" />
      </g>
    </svg>
  );
}

export function KavaroLogoWithTextDark({ size = 120 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center">
      <KavaroLogoDark size={size} />
      <div className="font-poppins font-semibold text-xl mt-3">
        <span className="text-white mr-2">Kavaro</span>
        <span className="text-[#2B8C74]">AI</span>
      </div>
    </div>
  );
}

export function KavaroLogoWithTextLight({ size = 120 }: { size?: number }) {
  return (
    <div className="flex items-center">
      <KavaroLogoLight size={size} />
      <div className="font-poppins font-semibold text-xl ml-3">
        <span className="text-[#0F1C3E] mr-2">Kavaro</span>
        <span className="text-[#3BA271]">AI</span>
      </div>
    </div>
  );
}

// Horizontal version of the logo with text for the navbar
export function KavaroNavbarLogo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center">
      <KavaroLogoLight size={size} />
      <div className="font-poppins font-semibold text-xl ml-2">
        <span className="text-[#0F1C3E] mr-1">Kavaro</span>
        <span className="text-[#3BA271]">AI</span>
      </div>
    </div>
  );
}