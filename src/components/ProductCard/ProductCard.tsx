import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import './ProductCard.css';

interface Props {
  product: Product;
  index: number;
}

// Generate the rotating circular text around each product
function ProductRing({ text, color }: { text: string; color: string }) {
  const id = `ring-path-${text.replace(/\s/g, '-')}`;
  // Repeat text to fill the circle
  const repeatedText = `${text} · `.repeat(6);

  return (
    <svg
      className="product-ring"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <path
          id={id}
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>
      <g className="product-ring-rot">
        <text
          fontSize="7.1"
          fontWeight="700"
          letterSpacing="0.5"
          textAnchor="start"
          style={{ fill: color, stroke: '#444', strokeWidth: '0.1px', textTransform: 'uppercase' }}
        >
          <textPath href={`#${id}`}>
            {repeatedText}
          </textPath>
        </text>
      </g>
    </svg>
  );
}

export default function ProductCard({ product, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Stagger entrance animation
  const style = {
    '--i': index,
    animationDelay: `${index * 0.05}s`,
  } as React.CSSProperties;

  const ringText = `${product.name} · C.E · S30 · ${product.collection}`;

  return (
    <Link
      to={`/products/${product.slug}`}
      ref={cardRef}
      className={`product-card${isHovered ? ' is-hovered' : ''}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${product.name} — $${product.price}`}
      id={`product-card-${product.id}`}
    >
      {/* Spinning ring */}
      <div className={`product-ring-wrapper${isHovered ? ' is-active' : ''}`}>
        <ProductRing
          text={ringText}
          color={product.emitterColor || '#fff'}
        />
      </div>

      {/* Product image */}
      <div className="product-media">
        {imgError ? (
          <div className="product-placeholder">
            <span>{product.name.slice(0, 2)}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Info on hover */}
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">
          {product.soldOut ? 'SOLD OUT' : `$${product.price}`}
        </span>
      </div>
    </Link>
  );
}
