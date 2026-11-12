import React from 'react';
import logoSvg from '../../assets/belouran-logo.svg?url';

interface BelouranLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  variant?: 'clean' | 'spray';
}

export const BelouranLogo: React.FC<BelouranLogoProps> = ({
  size = 40,
  color = 'currentColor',
  className = '',
  ...props
}) => {
  return (
    <img
      src={logoSvg}
      alt="Belouran Logo"
      width={size}
      height={typeof size === 'number' ? (size * 114) / 86 : size}
      style={{ color }}
      className={`belouran-logo-img ${className}`}
      {...(props as any)}
    />
  );
};

export default BelouranLogo;
