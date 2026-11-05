import { Link, useLocation } from 'react-router-dom';
import BelouranLogo from '../BelouranLogo/BelouranLogo';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'MANIFESTO', href: '/manifesto' },
  { label: 'LOOKS', href: '/looks' },
  { label: 'VIDEO', href: '/video' },
  { label: 'STORES', href: '/stores' },
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand-wrap" aria-label="Belouran Home">
        <BelouranLogo size={36} color="#888888" />
        <span className="footer-brand-name">BELOURAN</span>
      </Link>
      <div className="footer-nav">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={`footer-link${location.pathname === link.href ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} BELOURAN — ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}

