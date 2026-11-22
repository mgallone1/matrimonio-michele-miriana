import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((element, i) => (
        <motion.span
          key={i}
          initial={{
            filter: 'blur(6px)',
            opacity: 0,
            y: direction === 'top' ? -12 : 12,
          }}
          animate={
            inView
              ? {
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: (i * delay) / 1000,
            ease: [0.16, 1, 0.3, 1], // easeOutExpo raffinato
          }}
          className="inline-block"
        >
          {element}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
};
