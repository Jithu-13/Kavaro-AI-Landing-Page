import React from 'react';

export function KavaroLogoDark({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape - more Porsche-like */}
      <path d="M100 15L175 48V110C175 150 140 182 100 200C60 182 25 150 25 110V48L100 15Z" fill="#B6E1C4" />
      
      {/* Circuit Tree with both sides slanting upwards */}
      <g fill="#1B1D2F">
        {/* Main Stem */}
        <rect x="95" y="70" width="10" height="80" rx="2" />
        
        {/* Nodes - hollow in the middle */}
        <circle cx="100" cy="70" r="8" />
        <circle cx="100" cy="100" r="8" />
        <circle cx="100" cy="130" r="8" />
        <circle cx="100" cy="150" r="8" />
        
        {/* Fill hollow in the nodes */}
        <circle cx="100" cy="70" r="4" fill="#B6E1C4" />
        <circle cx="100" cy="100" r="4" fill="#B6E1C4" />
        <circle cx="100" cy="130" r="4" fill="#B6E1C4" />
        <circle cx="100" cy="150" r="4" fill="#B6E1C4" />
        
        {/* Left Branches - slanting upwards */}
        <path d="M60 105L100 85V91L60 111V105Z" />
        <path d="M60 150L100 130V136L60 156V150Z" />
        <circle cx="60" cy="108" r="8" />
        <circle cx="60" cy="153" r="8" />
        <circle cx="60" cy="108" r="4" fill="#B6E1C4" />
        <circle cx="60" cy="153" r="4" fill="#B6E1C4" />
        
        {/* Right Branches - slanting upwards */}
        <path d="M100 85L140 65V71L100 91V85Z" />
        <path d="M100 130L140 110V116L100 136V130Z" />
        <circle cx="140" cy="68" r="8" />
        <circle cx="140" cy="113" r="8" />
        <circle cx="140" cy="68" r="4" fill="#B6E1C4" />
        <circle cx="140" cy="113" r="4" fill="#B6E1C4" />
      </g>
    </svg>
  );
}

export function KavaroLogoLight({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape - more Porsche-like */}
      <path d="M100 15L175 48V110C175 150 140 182 100 200C60 182 25 150 25 110V48L100 15Z" fill="#0F1C3E" />
      
      {/* Circuit Tree with both sides slanting upwards */}
      <g fill="#3BA271">
        {/* Main Stem */}
        <rect x="95" y="70" width="10" height="80" rx="2" />
        
        {/* Nodes - hollow in the middle */}
        <circle cx="100" cy="70" r="8" />
        <circle cx="100" cy="100" r="8" />
        <circle cx="100" cy="130" r="8" />
        <circle cx="100" cy="150" r="8" />
        
        {/* Fill hollow in the nodes */}
        <circle cx="100" cy="70" r="4" fill="#0F1C3E" />
        <circle cx="100" cy="100" r="4" fill="#0F1C3E" />
        <circle cx="100" cy="130" r="4" fill="#0F1C3E" />
        <circle cx="100" cy="150" r="4" fill="#0F1C3E" />
        
        {/* Left Branches - slanting upwards */}
        <path d="M60 105L100 85V91L60 111V105Z" />
        <path d="M60 150L100 130V136L60 156V150Z" />
        <circle cx="60" cy="108" r="8" />
        <circle cx="60" cy="153" r="8" />
        <circle cx="60" cy="108" r="4" fill="#0F1C3E" />
        <circle cx="60" cy="153" r="4" fill="#0F1C3E" />
        
        {/* Right Branches - slanting upwards */}
        <path d="M100 85L140 65V71L100 91V85Z" />
        <path d="M100 130L140 110V116L100 136V130Z" />
        <circle cx="140" cy="68" r="8" />
        <circle cx="140" cy="113" r="8" />
        <circle cx="140" cy="68" r="4" fill="#0F1C3E" />
        <circle cx="140" cy="113" r="4" fill="#0F1C3E" />
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
    <div className="flex flex-col items-center">
      <KavaroLogoLight size={size} />
      <div className="font-poppins font-semibold text-xl mt-3">
        <span className="text-[#0F1C3E] mr-2">Kavaro</span>
        <span className="text-[#3BA271]">AI</span>
      </div>
    </div>
  );
}