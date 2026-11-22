import React from 'react';

// Tracciati vettoriali nobiliari estratti matematicamente (Great Vibes / Calligrafia Reale)
// Garantiscono indipendenza assoluta da font esterni, zero artefatti su display Retina e simmetria 100% identica tra le due M.
const PATH_M =
  "M35.49 2.99Q35.10 2.94 34.42 2.80Q33.75 2.65 33.05 2.24Q32.34 1.82 31.85 0.98Q31.36 0.13 31.36-1.27Q31.36-2.89 32.02-4.82Q32.68-6.76 33.64-8.87Q34.61-10.97 35.49-13.03Q36.19-14.66 36.19-15.52Q36.19-16.38 35.54-16.38Q34.81-16.38 33.37-15.22Q31.93-14.07 30.03-11.73Q29.54-11.10 28.76-10Q27.98-8.89 27.09-7.55Q26.21-6.21 25.36-4.85Q24.52-3.48 23.88-2.34Q23.24-1.20 22.96-0.52Q22.62 0.29 22.18 0.59Q21.74 0.88 21.35 0.88Q21.01 0.88 20.77 0.70Q20.51 0.52 20.51 0.26Q20.51 0.10 20.59 0Q20.75-0.31 21.37-1.43Q22-2.55 22.83-4.39Q23.66-6.24 24.41-8.68Q24.65-9.44 24.90-10.43Q25.14-11.41 25.35-12.47Q25.56-13.52 25.70-14.44Q25.84-15.37 25.84-15.94Q25.84-16.85 25.53-17.28Q25.22-17.71 24.70-17.71Q24.13-17.71 23.40-17.21Q22.67-16.72 21.92-15.78Q20.62-14.14 19.63-12.75Q18.64-11.36 17.82-9.98Q17-8.61 16.21-7.05Q15.42-5.49 14.53-3.55Q13.65-1.61 12.51 0.94Q12.32 1.35 11.90 1.53Q11.47 1.72 11.10 1.72Q10.74 1.72 10.50 1.56Q10.27 1.40 10.35 1.12Q10.92 0.21 11.62-1.16Q12.32-2.52 13.05-4.19Q13.78-5.85 14.46-7.64Q15.13-9.44 15.67-11.15Q16.20-12.87 16.51-14.38Q16.82-15.89 16.82-16.95Q16.82-18.95 15.98-19.81Q15.13-20.67 13.81-20.67Q12.64-20.67 11.23-20.10Q9.83-19.53 8.41-18.54Q6.99-17.55 5.75-16.30Q3.95-14.51 2.93-12.40Q1.90-10.30 1.90-8.14Q1.90-6.68 2.44-5.67Q2.99-4.65 3.89-4.13Q4.78-3.61 5.88-3.61Q6.99-3.61 7.97-4.17Q8.94-4.73 9.69-5.63Q10.43-6.53 10.84-7.53Q11.26-8.53 11.26-9.41Q11.26-10.17 10.84-10.66Q10.43-11.15 9.52-11.15Q9.41-11.15 9.29-11.14Q9.18-11.13 9.05-11.13L8.97-11.13Q8.79-11.13 8.63-11.19Q8.48-11.26 8.48-11.36Q8.48-11.47 8.75-11.60Q9.02-11.73 9.75-11.73Q10.92-11.73 11.51-11.04Q12.09-10.35 12.09-9.28Q12.09-8.24 11.56-7.15Q11.02-6.06 10.11-5.12Q9.20-4.19 8.07-3.61Q6.94-3.04 5.75-3.04Q4.34-3.04 3.13-3.69Q1.92-4.34 1.20-5.58Q0.47-6.81 0.47-8.53Q0.47-10.17 1.14-11.77Q1.82-13.36 2.90-14.78Q3.98-16.20 5.20-17.29Q6.55-18.51 8.06-19.38Q9.57-20.25 11.06-20.74Q12.56-21.22 13.86-21.22Q15.78-21.22 17.04-20.07Q18.30-18.93 18.30-16.38Q18.30-15.34 18.02-14Q17.73-12.66 17.34-11.32Q16.95-9.98 16.59-8.94L16.64-8.94Q17.58-10.63 18.32-11.84Q19.06-13.05 19.81-14.09Q20.57-15.13 21.50-16.28Q22.31-17.24 23.35-17.81Q24.39-18.38 25.35-18.38Q26.21-18.38 26.81-17.81Q27.40-17.24 27.40-15.86Q27.40-15.70 27.40-15.60Q27.40-15.50 27.38-15.29Q27.14-12.79 26.39-10.39Q25.64-7.98 24.83-5.54Q25.64-6.79 27.01-8.71Q28.39-10.63 30.03-12.69Q32.03-15.18 33.75-16.43Q35.46-17.68 36.58-17.68Q37.99-17.68 37.99-15.96Q37.99-15.31 37.74-14.40Q37.49-13.49 36.97-12.48Q36.40-11.34 35.71-9.84Q35.02-8.35 34.40-6.71Q33.77-5.07 33.37-3.50Q32.97-1.92 32.97-0.60Q32.97 0.83 33.63 1.70Q34.29 2.57 35.93 2.57L36.09 2.57Q36.48 2.57 36.48 2.73Q36.48 2.83 36.22 2.94Q35.96 3.04 35.49 2.99";

const PATH_AMP =
  "M5 0.86Q3.38 0.86 2.32 0.35Q1.25-0.15 0.73-0.98Q0.21-1.80 0.21-2.74Q0.21-3.78 0.84-4.82Q1.46-5.85 2.71-6.60Q3.95-7.35 5.76-7.54Q5.49-7.90 5.36-8.37Q5.22-8.83 5.22-9.25Q5.24-10.26 5.79-11.03Q6.35-11.80 7.21-12.33Q8.07-12.86 9.06-13.14Q10.05-13.41 10.92-13.41Q11.46-13.41 12.01-13.27Q12.56-13.13 12.94-12.77Q13.32-12.41 13.32-11.74Q13.32-11.19 12.98-10.75Q12.63-10.32 12.14-10.32Q11.78-10.32 11.51-10.58Q11.25-10.85 11.25-11.19Q11.25-11.59 11.50-11.85Q11.76-12.10 12.14-12.10Q12.31-12.10 12.53-11.99Q12.75-11.87 12.81-11.76Q12.82-11.84 12.82-11.97Q12.82-12.48 12.41-12.69Q11.99-12.90 11.51-12.90Q10.75-12.90 9.75-12.53Q8.74-12.16 7.79-11.32Q7.45-11.02 7.09-10.53Q6.73-10.03 6.48-9.47Q6.23-8.91 6.23-8.34Q6.23-7.90 6.38-7.58Q6.67-7.58 7.04-7.61Q7.41-7.64 7.81-7.64Q8.30-7.64 8.59-7.43Q8.87-7.22 8.87-6.95Q8.87-6.76 8.64-6.59Q8.42-6.42 7.92-6.42Q7.30-6.42 6.79-6.70Q6.29-6.97 6-7.26Q4.75-7.09 3.88-6.33Q3-5.57 2.55-4.53Q2.09-3.50 2.09-2.47Q2.09-1.65 2.40-0.95Q2.72-0.25 3.36 0.18Q4.01 0.61 5 0.61Q6.02 0.61 6.87 0.24Q7.71-0.13 8.32-0.72Q8.93-1.31 9.26-1.97Q9.60-2.62 9.60-3.19Q9.60-3.69 9.24-4.02Q8.89-4.35 8.32-4.51Q7.75-4.67 7.11-4.67Q6.44-4.67 5.79-4.49Q5.13-4.31 4.67-3.94Q4.22-3.57 4.12-3Q4.12-2.96 4.11-2.92Q4.10-2.87 4.10-2.83Q4.10-2.41 4.42-2Q4.73-1.60 5.40-1.25Q5.57-1.18 5.57-0.97Q5.57-0.76 5.38-0.85Q4.33-1.41 3.85-2.06Q3.36-2.72 3.36-3.31Q3.36-4.16 4.28-4.78Q5.21-5.40 6.92-5.40L10.28-5.40Q10.58-5.40 11.18-5.53Q11.78-5.66 12.41-5.92Q13.03-6.17 13.48-6.53Q13.93-6.88 13.93-7.33Q13.93-7.58 13.76-7.87Q13.72-7.92 13.72-8Q13.72-8.11 13.81-8.11Q13.89-8.11 13.95-8.02Q14.23-7.60 14.23-7.16Q14.23-6.65 13.86-6.21Q13.49-5.78 12.86-5.44Q12.24-5.11 11.47-4.94Q10.70-4.77 9.90-4.79Q10.26-4.48 10.43-4.10Q10.60-3.72 10.60-3.31Q10.60-2.60 10.18-1.87Q9.77-1.14 9.01-0.52Q8.25 0.10 7.23 0.48Q6.21 0.86 5 0.86M7.92-6.75Q8.55-6.75 8.55-6.99Q8.55-7.09 8.39-7.19Q8.23-7.30 7.96-7.31Q7.85-7.33 7.58-7.33Q7.31-7.33 7.02-7.33Q6.73-7.33 6.54-7.33Q7.01-6.75 7.92-6.75";

export const WaxSeal: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      className="w-36 h-36 sm:w-44 sm:h-44 overflow-visible select-none pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        {/* Ombra naturale a 360° senza tagli orizzontali */}
        <filter id="sealSoftShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur1" />
          <feOffset in="blur1" dx="0" dy="8" result="offsetBlur1" />
          <feFlood floodColor="#220208" floodOpacity="0.45" result="color1" />
          <feComposite in="color1" in2="offsetBlur1" operator="in" result="shadow1" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur2" />
          <feOffset in="blur2" dx="0" dy="2.5" result="offsetBlur2" />
          <feFlood floodColor="#38040f" floodOpacity="0.32" result="color2" />
          <feComposite in="color2" in2="offsetBlur2" operator="in" result="shadow2" />

          <feMerge>
            <feMergeNode in="shadow1" />
            <feMergeNode in="shadow2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Gradiente ceralacca nobile bordeaux (#530c1e) */}
        <radialGradient id="waxPuddleGrad" cx="35%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#9c183a" />
          <stop offset="25%" stopColor="#78102b" />
          <stop offset="60%" stopColor="#530c1e" />
          <stop offset="85%" stopColor="#360410" />
          <stop offset="100%" stopColor="#1d0107" />
        </radialGradient>

        {/* Piatto centrale satinato impresso dal timbro d'ottone */}
        <radialGradient id="innerPlateGrad" cx="36%" cy="34%" r="65%">
          <stop offset="0%" stopColor="#5a0b20" />
          <stop offset="55%" stopColor="#420615" />
          <stop offset="85%" stopColor="#2a030d" />
          <stop offset="100%" stopColor="#180106" />
        </radialGradient>

        {/* Oro anticato caldo per il monogramma in rilievo (Champagne Gold) */}
        <linearGradient id="goldLeaf" x1="25%" y1="15%" x2="75%" y2="85%">
          <stop offset="0%" stopColor="#fffcf5" />
          <stop offset="20%" stopColor="#ebd3b2" />
          <stop offset="45%" stopColor="#d5b58d" />
          <stop offset="70%" stopColor="#b0885c" />
          <stop offset="90%" stopColor="#7a5533" />
          <stop offset="100%" stopColor="#52361c" />
        </linearGradient>

        {/* Riflesso lucido speculare sull'arco superiore del cordolo */}
        <linearGradient id="specularGloss" x1="15%" y1="10%" x2="70%" y2="80%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="30%" stopColor="#ff8ca8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        {/* Ombra interna al cordolo per scavare il piatto */}
        <radialGradient id="dieRimShadow" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="transparent" />
          <stop offset="93%" stopColor="#000000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
        </radialGradient>
      </defs>

      <g filter="url(#sealSoftShadow)">
        {/* 1. Colata organica esterna di ceralacca fusa a mano */}
        <path
          d="M120,18
             C150,17 172,29 193,47
             C214,65 229,88 227,117
             C225,147 213,171 193,191
             C173,212 147,225 118,224
             C87,223 63,210 44,190
             C25,170 13,144 15,115
             C17,86 29,62 49,45
             C69,28 89,19 120,18 Z"
          fill="url(#waxPuddleGrad)"
        />

        {/* Bagliore lucido speculare sull'arco superiore della ceralacca (ore 10 - 13) */}
        <path
          d="M56,47 C76,31 97,25 120,24 C146,23 170,33 188,49"
          fill="none"
          stroke="url(#specularGloss)"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.8"
        />



        {/* 2. Cordolo di pressione del timbro (anello bombato che racchiude il sigillo) */}
        <circle cx="120" cy="120" r="82" fill="none" stroke="#4e0719" strokeWidth="4.5" />
        <circle cx="120" cy="120" r="80.5" fill="none" stroke="#a32145" strokeWidth="1.4" opacity="0.55" />

        {/* 3. Piatto interno incavato dal timbro d'ottone (r = 78) */}
        <circle cx="120" cy="120" r="78" fill="url(#innerPlateGrad)" />
        <circle cx="120" cy="120" r="78" fill="url(#dieRimShadow)" />

        {/* 4. Ghiera nobiliare a rilievo perlinata dorata (oro champagne antico) */}
        <circle
          cx="120"
          cy="120"
          r="73.5"
          fill="none"
          stroke="url(#goldLeaf)"
          strokeWidth="1.8"
          strokeDasharray="3.5 3.5"
          opacity="0.9"
        />
        <circle cx="120" cy="120" r="70" fill="none" stroke="url(#goldLeaf)" strokeWidth="0.7" opacity="0.45" />

        {/* Dalia reale stilizzata al vertice superiore (ore 12) */}
        <g
          transform="translate(120, 68) scale(0.18)"
          stroke="url(#goldLeaf)"
          fill="none"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(45)" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(90)" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(135)" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(180)" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(225)" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(270)" fill="#530c1e" fillOpacity="0.7" />
          <path d="M0,0 C8,-14 6,-32 0,-38 C-6,-32 -8,-14 0,0" transform="rotate(315)" fill="#530c1e" fillOpacity="0.7" />
          <circle cx="0" cy="0" r="5" fill="url(#goldLeaf)" />
        </g>

        {/* Festone di foglie d'ulivo dorate alla base (spostato prima del monogramma e abbassato a y=166 per dare massimo respiro) */}
        <g stroke="url(#goldLeaf)" fill="url(#goldLeaf)" strokeWidth="0.8" opacity="0.8" transform="translate(0, 4)">
          {/* Ramo sinistro */}
          <path d="M113,162 C102,162 91,158 81,151" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M102,161 C98,157 98,152 102,150 C105,152 105,157 102,161 Z" />
          <path d="M91,158 C87,154 87,149 91,147 C94,149 94,154 91,158 Z" />
          <path d="M81,151 C78,146 79,141 83,140 C85,143 84,148 81,151 Z" />

          {/* Ramo destro */}
          <path d="M127,162 C138,162 149,158 159,151" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M138,161 C142,157 142,152 138,150 C135,152 135,157 138,161 Z" />
          <path d="M149,158 C153,154 153,149 149,147 C146,149 146,154 149,158 Z" />
          <path d="M159,151 C162,146 161,141 157,140 C155,143 156,148 159,151 Z" />

          {/* Perla d'unione centrale */}
          <circle cx="120" cy="162" r="2.5" stroke="#1d0208" strokeWidth="0.5" />
        </g>

        {/* ========================================================================= */}
        {/* 5. MONOGRAMMA IN PRIMISSIMO PIANO ASSOLUTO (Z-TOP FOREGROUND - NESSUN     */}
        {/* ELEMENTO LO SOVRASTA, ZERO TAGLI, VETTORIALE PURO E MATEMATICO AL 100%)    */}
        {/* ========================================================================= */}
        <g id="monogram-foreground">
          {/* Ombra di incisione a caldo sotto ciascun elemento (dy = +0.8) */}
          <g fill="#150105" opacity="0.85" transform="translate(0, 0.8)">
            <path d={PATH_M} transform="translate(64, 128)" />
            <path d={PATH_AMP} transform="translate(113, 126)" />
            <path d={PATH_M} transform="translate(138, 128)" />
          </g>

          {/* Rilievo principale in foglia d'oro caldo nobile (warm gold) */}
          <g fill="url(#goldLeaf)">
            <path d={PATH_M} transform="translate(64, 127.2)" />
            <path d={PATH_AMP} transform="translate(113, 125.2)" />
            <path d={PATH_M} transform="translate(138, 127.2)" />
          </g>

          {/* Cresta di luce zenitale morbida sui bordi superiori (dy = -0.5) */}
          <g fill="#fff9e6" opacity="0.32">
            <path d={PATH_M} transform="translate(64, 126.7)" />
            <path d={PATH_AMP} transform="translate(113, 124.7)" />
            <path d={PATH_M} transform="translate(138, 126.7)" />
          </g>
        </g>
      </g>
    </svg>
  );
};
