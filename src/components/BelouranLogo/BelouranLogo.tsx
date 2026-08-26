import React from 'react';

interface BelouranLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  variant?: 'clean' | 'spray';
}

export const BelouranLogo: React.FC<BelouranLogoProps> = ({
  size = 40,
  color = 'currentColor',
  variant = 'clean',
  className = '',
  ...props
}) => {
  const filterId = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 240"
      width={size}
      height={typeof size === 'number' ? (size * 240) / 200 : size}
      fill="none"
      className={`belouran-logo-svg ${className}`}
      {...props}
    >
      {variant === 'spray' && (
        <defs>
          <filter id={`spray-blur-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="0.8" />
          </filter>
        </defs>
      )}

      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={variant === 'spray' ? `url(#spray-blur-${filterId})` : undefined}
      >
        {/* Bottom Base Line */}
        <path d="M 28 215 L 172 215" strokeWidth="12" />

        {/* Hood Contour */}
        <path d="M 32 215 L 75 130 L 18 122 L 132 22" strokeWidth="12" />

        {/* Inner Hanging Stem & Dot */}
        <path d="M 132 22 L 132 88" strokeWidth="12" />
        <circle cx="132" cy="90" r="13" fill={color} stroke="none" />

        {/* Right Vertical Bar & Open Circle Ring */}
        <path d="M 172 215 L 172 70" strokeWidth="12" />
        <circle cx="172" cy="50" r="16" strokeWidth="10" fill="none" />
      </g>
    </svg>
  );
};

export default BelouranLogo;
