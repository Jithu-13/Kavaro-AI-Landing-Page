import React from 'react';

export function KavaroLogo({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape */}
      <path d="M100 10L180 45V110C180 155 145 190 100 210C55 190 20 155 20 110V45L100 10Z" fill="#B6E1C4" />
      
      {/* Circuit Tree */}
      <g fill="#1B1D2F">
        {/* Main Stem */}
        <rect x="95" y="70" width="10" height="90" rx="2" />
        
        {/* Nodes */}
        <circle cx="100" cy="70" r="8" />
        <circle cx="100" cy="100" r="8" />
        <circle cx="100" cy="130" r="8" />
        <circle cx="100" cy="160" r="8" />
        
        {/* Left Branches */}
        <rect x="60" y="97" width="40" height="6" rx="2" />
        <rect x="60" y="157" width="40" height="6" rx="2" />
        <circle cx="60" cy="100" r="8" />
        <circle cx="60" cy="160" r="8" />
        
        {/* Right Branches */}
        <rect x="100" y="97" width="40" height="6" rx="2" />
        <rect x="100" y="127" width="40" height="6" rx="2" />
        <circle cx="140" cy="100" r="8" />
        <circle cx="140" cy="130" r="8" />
      </g>
    </svg>
  );
}

export function KavaroLogoWithText({ size = 120 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center">
      <KavaroLogo size={size} />
      <div className="font-poppins font-semibold text-xl mt-2">
        <span className="text-white">Kavaro</span>
        <span className="text-[#2B8C74]">AI</span>
      </div>
    </div>
  );
}