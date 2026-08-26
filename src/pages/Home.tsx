import ProductGrid from '../components/ProductGrid/ProductGrid';
import BelouranLogo from '../components/BelouranLogo/BelouranLogo';
import './Home.css';

export default function Home() {
  return (
    <main className="page-home">
      {/* Hero Banner */}
      <div className="home-hero">
        <div className="hero-emblem">
          <BelouranLogo size={90} color="#ffffff" variant="spray" />
        </div>
        <h1 className="hero-brand-title">BELOURAN</h1>
        <p className="hero-manifesto">
          LIVING SITUATIONS CAN BE CHANGED &nbsp;·&nbsp; CREATION IS REAL &nbsp;·&nbsp; REST WITHIN SO WITHOUT
        </p>
        <div className="hero-text-wrap">
          <span className="hero-label">BELOURAN SS30</span>
          <span className="hero-divider">·</span>
          <span className="hero-label">NEW COLLECTION</span>
        </div>
        <div className="hero-scroll-hint">SCROLL ↓</div>
      </div>

      {/* Product grid */}
      <ProductGrid />

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-brand-wrap">
          <BelouranLogo size={36} color="#888888" />
          <span className="footer-brand-name">BELOURAN</span>
        </div>
        <div className="footer-nav">
          <a href="/looks" className="footer-link">LOOKS</a>
          <a href="/video" className="footer-link">VIDEO</a>
          <a href="/stores" className="footer-link">STORES</a>
          <a href="/archive" className="footer-link">ARCHIVE</a>
          <a href="/contact" className="footer-link">CONTACT</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} BELOURAN — ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
