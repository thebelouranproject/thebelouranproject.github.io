import manifestoImg from '../assets/belouran-manifesto.jpg';
import Footer from '../components/Footer/Footer';
import './Manifesto.css';

export default function Manifesto() {
  return (
    <div className="page-manifesto">
      <main className="manifesto-content">
        <div className="manifesto-container">
          <img
            src={manifestoImg}
            alt="The Belouran Project Manifesto — Founded by Áron Darázs and Márkó Manolache"
            className="manifesto-image"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

