import React from 'react';

interface DahliaFlowerProps {
  className?: string;
  size?: number;
  paletteVariant?: 'burgundy' | 'champagne' | 'blush' | 'sage' | 'full';
}

export const DahliaFlower: React.FC<DahliaFlowerProps> = ({
  className = '',
  size = 64,
  paletteVariant = 'full',
}) => {
  // Colori autentici estratti dal bouquet di Miriana (incluso il rosa ciclamino/orchidea vivo)
  const strokeBurgundy = '#4a0d1b';
  const strokeChampagne = '#e5dcd0';
  const strokeSage = '#626a3a';
  const strokeRose = '#e5517c'; // Rosa ciclamino / Dalia viva

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`inline-block ${className}`}
      fill="none"
    >
      <defs>
        {/* Sfumature acquerello organiche della palette del bouquet */}
        <radialGradient id="dahliaAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde8ef" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#eec2ad" stopOpacity="0.30" />
          <stop offset="85%" stopColor="#f2f5e8" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="petalBurgundy" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#923649" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#4a0d1b" stopOpacity="0.9" />
        </radialGradient>
        <radialGradient id="petalRose" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fde8ef" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#e5517c" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#923649" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="petalBlush" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#faede7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#eec2ad" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Alone acquerello morbido posteriore */}
      <circle cx="100" cy="100" r="92" fill="url(#dahliaAura)" />

      {/* Petali esterni - Spolverata Salvia e Champagne nobile */}
      <g transform="translate(100, 100)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
          <path
            key={`outer-${deg}`}
            d="M 0 0 C 18 -35, 12 -78, 0 -88 C -12 -78, -18 -35, 0 0 Z"
            transform={`rotate(${deg})`}
            fill={paletteVariant === 'burgundy' ? 'none' : '#faf6f1'}
            fillOpacity="0.6"
            stroke={paletteVariant === 'sage' ? strokeSage : strokeChampagne}
            opacity="0.8"
          />
        ))}

        {/* Petali mediani - Tonalità Rosa Ciclamino / Orchidea vivo del bouquet */}
        {[11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75].map((deg) => (
          <path
            key={`mid-${deg}`}
            d="M 0 0 C 14 -25, 9 -58, 0 -68 C -9 -58, -14 -25, 0 0 Z"
            transform={`rotate(${deg})`}
            fill="url(#petalRose)"
            stroke={strokeRose}
            opacity="0.85"
          />
        ))}

        {/* Petali interni a contrasto - Bordeaux Calibrato e Mauve */}
        {[5, 35, 65, 95, 125, 155, 185, 215, 245, 275, 305, 335].map((deg) => (
          <path
            key={`inner-${deg}`}
            d="M 0 0 C 10 -15, 7 -40, 0 -48 C -7 -40, -10 -15, 0 0 Z"
            transform={`rotate(${deg})`}
            fill="url(#petalBurgundy)"
            stroke={strokeBurgundy}
            opacity="0.95"
          />
        ))}

        {/* Bocciolo centrale in rosa blush & bordeaux */}
        <circle cx="0" cy="0" r="9" fill="#eec2ad" stroke="#e5517c" strokeWidth="1" />
        <circle cx="0" cy="0" r="4.5" fill="#4a0d1b" />
      </g>
    </svg>
  );
};
