import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import BelouranLogo from '../BelouranLogo/BelouranLogo';
import './Header.css';

const NAV_LINKS = [
  { label: 'MANIFESTO', href: '/manifesto' },
  { label: 'LOOKS', href: '/looks' },
  { label: 'VIDEO', href: '/video' },
  { label: 'STORES', href: '/stores' },
  { label: 'ARCHIVE', href: '/archive' },
];

export default function Header() {
  const { totalItems, toggleCart, state } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close cart on route change
  }, [location]);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}${state.isOpen ? ' cart-open' : ''}`}>
        <div className="header-bar">
          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="Belouran Homepage">
            <BelouranLogo size={32} color="#ffffff" variant="clean" />
            <span className="brand-wordmark">BELOURAN</span>
          </Link>

          {/* Now playing marquee */}
          <div className="now-playing">
            <span className="now-playing-text">
              BELOURAN — CREATION IS REAL — LIVING SITUATIONS CAN BE CHANGED — REST WITHIN SO WITHOUT — BELOURAN —&nbsp;
            </span>
          </div>

          {/* Right controls */}
          <div className="header-right">
            {/* Nav links — desktop */}
            <nav className="header-nav">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`nav-link${location.pathname === link.href ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Live dot */}
            <a
              className="live-dot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live link"
              title="000 LIVE"
            />

            {/* Cart toggle */}
            <button
              id="cart-toggle"
              className="cart-toggle"
              onClick={toggleCart}
              aria-label={`Cart (${totalItems} items)`}
            >
              CART{totalItems > 0 ? ` (${totalItems})` : ''}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop cart overlay */}
      <Cart />
    </>
  );
}
