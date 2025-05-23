import React from 'react';

// Dark version for the hub (dark background)
export function KavaroLogoDark({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape - more Porsche-like */}
      <path d="M100 15L175 48V110C175 150 140 182 100 200C60 182 25 150 25 110V48L100 15Z" fill="#B6E1C4" />
      
      {/* Circuit Tree with angled branches and hollow nodes */}
      <g fill="#1B1D2F">
        {/* Main Stem */}
        <rect x="95" y="70" width="10" height="80" rx="2" />
        
        {/* Nodes - hollow in the middle */}
        <circle cx="100" cy="70" r="8" />
        <circle cx="100" cy="100" r="8" />
        <circle cx="100" cy="130" r="8" />
        <circle cx="100" cy="150" r="8" />
        
        {/* Fill white in the nodes to make them hollow */}
        <circle cx="100" cy="70" r="4" fill="#B6E1C4" />
        <circle cx="100" cy="100" r="4" fill="#B6E1C4" />
        <circle cx="100" cy="130" r="4" fill="#B6E1C4" />
        <circle cx="100" cy="150" r="4" fill="#B6E1C4" />
        
        {/* Left Branches - slanted upwards */}
        <path d="M60 97L100 87V93L60 103V97Z" />
        <path d="M60 147L100 137V143L60 153V147Z" />
        <circle cx="60" cy="100" r="8" />
        <circle cx="60" cy="150" r="8" />
        <circle cx="60" cy="100" r="4" fill="#B6E1C4" />
        <circle cx="60" cy="150" r="4" fill="#B6E1C4" />
        
        {/* Right Branches - slanted upwards */}
        <path d="M100 87L140 77V83L100 93V87Z" />
        <path d="M100 127L140 117V123L100 133V127Z" />
        <circle cx="140" cy="80" r="8" />
        <circle cx="140" cy="120" r="8" />
        <circle cx="140" cy="80" r="4" fill="#B6E1C4" />
        <circle cx="140" cy="120" r="4" fill="#B6E1C4" />
      </g>
    </svg>
  );
}

// Light version for the navbar (light background)
export function KavaroLogoLight({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Shape - more Porsche-like */}
      <path d="M100 15L175 48V110C175 150 140 182 100 200C60 182 25 150 25 110V48L100 15Z" fill="#0F1C3E" />
      
      {/* Circuit Tree with angled branches and hollow nodes */}
      <g fill="#3BA271">
        {/* Main Stem */}
        <rect x="95" y="70" width="10" height="80" rx="2" />
        
        {/* Nodes - hollow in the middle */}
        <circle cx="100" cy="70" r="8" />
        <circle cx="100" cy="100" r="8" />
        <circle cx="100" cy="130" r="8" />
        <circle cx="100" cy="150" r="8" />
        
        {/* Fill white in the nodes to make them hollow */}
        <circle cx="100" cy="70" r="4" fill="#0F1C3E" />
        <circle cx="100" cy="100" r="4" fill="#0F1C3E" />
        <circle cx="100" cy="130" r="4" fill="#0F1C3E" />
        <circle cx="100" cy="150" r="4" fill="#0F1C3E" />
        
        {/* Left Branches - slanted upwards */}
        <path d="M60 97L100 87V93L60 103V97Z" />
        <path d="M60 147L100 137V143L60 153V147Z" />
        <circle cx="60" cy="100" r="8" />
        <circle cx="60" cy="150" r="8" />
        <circle cx="60" cy="100" r="4" fill="#0F1C3E" />
        <circle cx="60" cy="150" r="4" fill="#0F1C3E" />
        
        {/* Right Branches - slanted upwards */}
        <path d="M100 87L140 77V83L100 93V87Z" />
        <path d="M100 127L140 117V123L100 133V127Z" />
        <circle cx="140" cy="80" r="8" />
        <circle cx="140" cy="120" r="8" />
        <circle cx="140" cy="80" r="4" fill="#0F1C3E" />
        <circle cx="140" cy="120" r="4" fill="#0F1C3E" />
      </g>
    </svg>
  );
}

// Dark logo with text for the hub
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

// Light logo with text for the navbar
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