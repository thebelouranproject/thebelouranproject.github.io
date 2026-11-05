import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Manifesto from './pages/Manifesto';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="/looks" element={<PlaceholderPage title="LOOKS" />} />
            <Route path="/video" element={<PlaceholderPage title="VIDEO" />} />
            <Route path="/stores" element={<PlaceholderPage title="STORES" />} />
            <Route path="/archive" element={<PlaceholderPage title="ARCHIVE" />} />
            <Route path="/contact" element={<PlaceholderPage title="CONTACT" />} />
            <Route path="*" element={<PlaceholderPage title="NOT FOUND" />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - var(--header-height))',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          minHeight: '60vh',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        {title}
      </div>
      <Footer />
    </div>
  );
}

export default App;
