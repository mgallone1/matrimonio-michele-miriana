import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) => {
  return (
    <span
      className={`inline-block relative overflow-hidden ${
        disabled
          ? ''
          : 'bg-clip-text text-transparent bg-[linear-gradient(110deg,#523c2f,40%,#d5b58d,50%,#523c2f,60%)] dark:bg-[linear-gradient(110deg,#c9b097,40%,#ffffff,50%,#c9b097,60%)] bg-[length:200%_100%] animate-shine'
      } ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};
