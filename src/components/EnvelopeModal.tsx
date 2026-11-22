import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import { WaxSeal } from './WaxSeal';

interface EnvelopeModalProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  // Resetta lo stato di apertura ogni volta che la busta viene riaperta
  React.useEffect(() => {
    if (isOpen) {
      setIsOpening(false);
    }
  }, [isOpen]);

  const containerRef = useRef<HTMLDivElement>(null);
  const topFlapRef = useRef<HTMLDivElement>(null);
  const flapShadowRef = useRef<HTMLDivElement>(null);
  const pocketRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const frontShadingRef = useRef<HTMLDivElement>(null);
  const backShadingRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleOpenEnvelope3D = () => {
    if (isOpening) return;
    setIsOpening(true);

    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      },
    });

    // 1. Il prompt di tocco svanisce dolcemente all'inizio
    tl.to(promptRef.current, {
      opacity: 0,
      y: 12,
      duration: 0.35,
      ease: 'power2.out',
    })

      // 2. L'ombra del lembo sfuma con naturalezza mentre il cartoncino si stacca
      .to(
        flapShadowRef.current,
        {
          opacity: 0,
          duration: 0.45,
          ease: 'power1.out',
        },
        '-=0.15'
      )

      // 3. IL LEMBO IN CARTONCINO SPESSO SI APRE A 180° IN VERO 3D
      // Con moto solenne e rotazione fisica: il sito sottostante è immediatamente visibile all'interno!
      .to(
        topFlapRef.current,
        {
          rotationX: 180,
          duration: 1.8,
          ease: 'power2.inOut',
          transformOrigin: '50% 0%',
        },
        '-=0.35'
      )

      // 4. Chiaroscuro dinamico sul fronte del cartoncino
      .to(
        frontShadingRef.current,
        {
          opacity: 0.5,
          duration: 0.9,
          ease: 'power1.in',
        },
        '<'
      )

      // 5. Chiaroscuro dinamico sul retro (si rischiara aprendosi a 180°)
      .fromTo(
        backShadingRef.current,
        { opacity: 0.6 },
        {
          opacity: 0.05,
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.9'
      )

      // 6. La tasca inferiore in cartoncino scivola verso il basso svelando il resto del sito
      .to(
        pocketRef.current,
        {
          yPercent: 110,
          duration: 1.6,
          ease: 'power2.inOut',
        },
        '-=1.4'
      )

      // 7. Dissolvenza finale fluida per cedere il controllo completo dell'interfaccia al sito
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.out',
        },
        '-=0.3'
      );
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 w-full h-[100dvh] overflow-hidden select-none bg-transparent ${
        isOpening ? 'pointer-events-none' : ''
      }`}
      style={{
        perspective: '1400px',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Partecipazione di nozze in cartoncino spesso di Michele e Miriana"
      onClick={handleOpenEnvelope3D}
    >
      {/* ======================================================== */}
      {/* 1. LEMBO SUPERIORE IN VERO CARTONCINO MATERICO (380 GSM)   */}
      {/* Spalle al 38%, punta al 52%, V a 120°, rotazione a 180°   */}
      {/* ======================================================== */}
      <div
        ref={topFlapRef}
        className="absolute top-0 left-0 right-0 h-[52%] cursor-pointer overflow-visible"
        style={{
          zIndex: 30,
          transformOrigin: '50% 0%',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* ======================================================== */}
        {/* A. LATO ESTERNO: CARTONCINO COTONE MATERICO 380 GSM      */}
        {/* Posizionato a translateZ(2px) per spessore fisico reale  */}
        {/* ======================================================== */}
        <div
          className="absolute inset-0 w-full h-full bg-[#FAF5EE] overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 73%, 50% 100%, 0 73%)',
            backgroundImage: 'url(/images/cardstock_amalfi_seamless.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(2px)',
            WebkitTransform: 'translateZ(2px)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Luce zenitale morbida e naturale sul cartoncino */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-[#523c2f]/10 pointer-events-none" />

          {/* Cordonatura di piegatura superiore battuta a caldo (y = 0) */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/25 via-black/5 to-transparent pointer-events-none" />

          {/* ======================================================== */}
          {/* SPESSORE REALE DEL BORDO FUSTELLATO E CORDONATURA CIECA   */}
          {/* ======================================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Cordonatura interna battuta a caldo (scanalatura cieca a 6px dal bordo) */}
            <line
              x1="0"
              y1="calc(73% - 6px)"
              x2="50%"
              y2="calc(100% - 8px)"
              stroke="#dacdbd"
              strokeWidth="1.2"
              strokeDasharray="6 3"
              opacity="0.85"
            />
            <line
              x1="100%"
              y1="calc(73% - 6px)"
              x2="50%"
              y2="calc(100% - 8px)"
              stroke="#dacdbd"
              strokeWidth="1.2"
              strokeDasharray="6 3"
              opacity="0.85"
            />

            {/* 2. Anima in fibra di cotone grezzo (spessore interno del cartoncino) */}
            <line
              x1="0"
              y1="calc(73% - 3px)"
              x2="50%"
              y2="calc(100% - 4px)"
              stroke="rgba(210, 192, 172, 0.95)"
              strokeWidth="3.2"
            />
            <line
              x1="100%"
              y1="calc(73% - 3px)"
              x2="50%"
              y2="calc(100% - 4px)"
              stroke="rgba(210, 192, 172, 0.95)"
              strokeWidth="3.2"
            />

            {/* 3. Cresta di luce bianca/avorio riflessa sul filo di taglio */}
            <line
              x1="0"
              y1="calc(73% - 1.2px)"
              x2="50%"
              y2="calc(100% - 1.6px)"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1.8"
            />
            <line
              x1="100%"
              y1="calc(73% - 1.2px)"
              x2="50%"
              y2="calc(100% - 1.6px)"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1.8"
            />
          </svg>

          {/* Dalia a secco / deboss cieco elegante al vertice */}
          <div className="absolute left-1/2 bottom-10 -translate-x-1/2 opacity-20 pointer-events-none">
            <img src="/icons/dahlia.svg" alt="" className="w-14 h-14 text-[#523c2f]" />
          </div>

          {/* Chiaroscuro dinamico durante la rotazione 3D (si oscura verso i 90°) */}
          <div
            ref={frontShadingRef}
            className="absolute inset-0 bg-[#2b170c] opacity-0 pointer-events-none"
          />
        </div>

        {/* ======================================================== */}
        {/* B. ANIMA CENTRALE A SPESSORE (COSTA DI TAGLIO 3D 380 GSM) */}
        {/* ======================================================== */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          style={{
            transform: 'translateZ(0px)',
            WebkitTransform: 'translateZ(0px)',
          }}
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <filter id="cardstockEdgeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#382214" floodOpacity="0.45" />
            </filter>
            {/* Ombra di contatto fustellata proiettata direttamente dal bordo */}
            <polyline
              points="0,calc(73% + 1px) 50%,calc(100% + 2px) 100%,calc(73% + 1px)"
              fill="none"
              stroke="#3a2213"
              strokeWidth="3.5"
              strokeOpacity="0.42"
              filter="url(#cardstockEdgeGlow)"
            />
            {/* Spessore della costa di carta artigianale cotone grezzo */}
            <polyline
              points="0,calc(73% - 0.5px) 50%,calc(100% - 0.5px) 100%,calc(73% - 0.5px)"
              fill="none"
              stroke="#dfd2c0"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ======================================================== */}
        {/* C. LATO INTERNO: RETRO DEL CARTONCINO ARTIGIANALE        */}
        {/* Posizionato a rotateX(180deg) translateZ(2px) nello spazio 3D */}
        {/* ======================================================== */}
        <div
          className="absolute inset-0 w-full h-full bg-[#FAF5EE] overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 73%, 50% 100%, 0 73%)',
            backgroundImage: 'url(/images/cardstock_amalfi_seamless.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotateX(180deg) translateZ(2px)',
            WebkitTransform: 'rotateX(180deg) translateZ(2px)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Ombra naturale di piegatura sulla cordonatura superiore */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/5 pointer-events-none" />

          {/* Filetto perimetrale interno elegante che risalta il cartoncino sartoriale */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="73%" x2="50%" y2="100%" stroke="#dacdbd" strokeWidth="1.5" opacity="0.6" />
            <line x1="100%" y1="73%" x2="50%" y2="100%" stroke="#dacdbd" strokeWidth="1.5" opacity="0.6" />
          </svg>

          {/* Monogramma d'apertura calligrafico nobile al centro dell'interno del lembo */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="font-script text-4xl sm:text-5xl text-burgundy/65 tracking-wider font-normal">
              M &amp; M
            </span>
            <div className="h-[1px] w-14 mx-auto bg-champagne/60 mt-1" />
          </div>

          {/* Chiaroscuro dinamico del retro (si rischiara dolcemente all'apertura) */}
          <div
            ref={backShadingRef}
            className="absolute inset-0 bg-[#2b170c] opacity-70 pointer-events-none"
          />
        </div>

        {/* ======================================================== */}
        {/* LA CERALACCA SOLIDALE SULLA PUNTA DELLA V               */}
        {/* SALE IN ALTO CON IL CARTONCINO SPESSO IN 3D!            */}
        {/* ======================================================== */}
        <div
          ref={sealRef}
          className="absolute left-1/2 top-full cursor-pointer pointer-events-auto overflow-visible"
          style={{
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            transform: 'translate3d(-50%, -50%, 10px)',
            willChange: 'transform',
          }}
        >
          <div className="relative group active:scale-95 transition-transform flex items-center justify-center overflow-visible">
            {/* Alone soffuso di pulsazione discreta senza tagli */}
            {!isOpening && (
              <div className="absolute -inset-8 sm:-inset-10 rounded-full bg-burgundy/20 blur-2xl animate-pulse pointer-events-none" />
            )}

            {/* Sigillo in ceralacca con monogramma calligrafico M&M in oro - INLINE SVG vettoriale nitidissimo a qualsiasi zoom */}
            <WaxSeal />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* OMBRA DI CONTATTO NATURALE DEL LEMBO (SENZA TAGLI PIATTI) */}
      {/* ======================================================== */}
      <div
        ref={flapShadowRef}
        className="absolute top-0 left-0 right-0 h-[65%] z-15 pointer-events-none overflow-visible"
        style={{
          filter:
            'drop-shadow(0 3px 4px rgba(45, 28, 18, 0.45)) drop-shadow(0 12px 20px rgba(45, 28, 18, 0.22)) drop-shadow(0 26px 40px rgba(45, 28, 18, 0.12))',
        }}
      >
        <div
          className="w-full h-[80%] bg-black/10"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 73%, 50% 100%, 0 73%)',
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. TASCA INFERIORE IN CARTONCINO MATERICO A TUTTO SCHERMO */}
      {/* ======================================================== */}
      <div
        ref={pocketRef}
        className="absolute inset-0 w-full h-full z-10 cursor-pointer pointer-events-auto"
        style={{ willChange: 'transform' }}
      >
        <div
          className="w-full h-full bg-[#FAF5EE] relative flex flex-col justify-end items-center pb-16 px-6 shadow-2xl"
          style={{
            clipPath: 'polygon(0 38%, 50% 44%, 100% 38%, 100% 100%, 0 100%)',
            backgroundImage: 'url(/images/cardstock_amalfi_seamless.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Vignettatura circolare d'ambiente morbida e graduale (ZERO tagli orizzontali) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(82,60,47,0.06)_100%)] pointer-events-none" />

          {/* Ombra di gola interna della tasca (la fessura della tasca) */}
          <div
            className="absolute top-[38%] left-0 right-0 h-16 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(46, 28, 18, 0.22) 0%, transparent 100%)',
              clipPath: 'polygon(0 0, 50% 16%, 100% 0, 100% 100%, 0 100%)',
            }}
          />

          {/* Spessore e profilo di taglio della tasca inferiore */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Spessore fibra scura della tasca */}
            <line
              x1="0"
              y1="calc(38% + 1.2px)"
              x2="50%"
              y2="calc(44% + 1.2px)"
              stroke="rgba(65, 42, 28, 0.4)"
              strokeWidth="2"
            />
            <line
              x1="100%"
              y1="calc(38% + 1.2px)"
              x2="50%"
              y2="calc(44% + 1.2px)"
              stroke="rgba(65, 42, 28, 0.4)"
              strokeWidth="2"
            />

            {/* Cresta di luce della tasca */}
            <line
              x1="0"
              y1="calc(38% - 1px)"
              x2="50%"
              y2="calc(44% - 1px)"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.4"
            />
            <line
              x1="100%"
              y1="calc(38% - 1px)"
              x2="50%"
              y2="calc(44% - 1px)"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.4"
            />
          </svg>

          {/* Prompt d'invito tattile ed elegante in basso con altissima leggibilità e qualità tipografica */}
          <div ref={promptRef} className="relative text-center">
            <div className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-burgundy text-[#FAF7F2] border border-champagne/40 text-[11px] sm:text-xs uppercase font-sans font-medium shadow-[0_8px_24px_rgba(83,12,30,0.35)] active:scale-95 transition-transform whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-champagne animate-spin-slow shrink-0" />
              <span className="font-semibold tracking-[0.18em]">Tocca il sigillo per aprire</span>
            </div>
            <p className="font-serif italic text-[#38251b] text-sm mt-3 tracking-wider font-normal antialiased">
              Partecipazione di nozze &bull; Michele &amp; Miriana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
