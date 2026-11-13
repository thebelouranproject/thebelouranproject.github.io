import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const productId = location.state?.productId;
  const product = productId ? getProductById(productId) : undefined;

  useEffect(() => {
    if (!productId) {
      navigate('/', { replace: true });
    }
  }, [productId, navigate]);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="not-found">
        <p>PRODUCT NOT FOUND</p>
        <Link to="/">← BACK</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 800);
      return;
    }
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail">
      {/* Back */}
      <button className="back-btn" onClick={() => navigate(-1)} id="back-button">
        ← BACK
      </button>

      <div className="product-detail-inner">
        {/* Images */}
        <div className="product-images">
          <div className="product-main-image">
            <img
              src={product.images[activeImage] || product.image}
              alt={product.name}
            />
          </div>
          {product.images.length > 1 && (
            <div className="product-thumbnails">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`thumb${activeImage === i ? ' active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="product-detail-info">
          {/* Collection tag */}
          <span className="product-collection">{product.collection}</span>

          {/* Name */}
          <h1 className="product-detail-name">{product.name}</h1>

          {/* Price */}
          <p className="product-detail-price">
            {product.soldOut ? 'SOLD OUT' : `$${product.price} USD`}
          </p>

          {/* Description */}
          <p className="product-description">{product.description}</p>

          {/* Sizes */}
          {!product.soldOut && (
            <>
              <div className={`size-selector${sizeError ? ' has-error' : ''}`}>
                <span className="size-label">SIZE</span>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      id={`size-${size}`}
                      className={`size-btn${selectedSize === size ? ' selected' : ''}`}
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeError(false);
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <span className="size-error">PLEASE SELECT A SIZE</span>
                )}
              </div>

              {/* Add to cart */}
              <button
                id="add-to-cart-button"
                className={`add-to-cart${added ? ' added' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? 'ADDED TO CART ✓' : 'ADD TO CART'}
              </button>
            </>
          )}

          {product.soldOut && (
            <button className="add-to-cart sold-out" disabled>
              SOLD OUT
            </button>
          )}

          {/* Details */}
          <div className="product-meta">
            <div className="meta-row">
              <span>CATEGORY</span>
              <span>{product.category}</span>
            </div>
            <div className="meta-row">
              <span>COLLECTION</span>
              <span>{product.collection}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
