import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import BelouranLogo from '../components/BelouranLogo/BelouranLogo';
import Footer from '../components/Footer/Footer';
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
        <Link to="/manifesto" className="hero-manifesto-link">
          <p className="hero-manifesto">
            LIVING SITUATIONS CAN BE CHANGED &nbsp;·&nbsp; CREATION IS REAL &nbsp;·&nbsp; REST WITHIN SO WITHOUT
          </p>
        </Link>
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
      <Footer />
    </main>
  );
}
