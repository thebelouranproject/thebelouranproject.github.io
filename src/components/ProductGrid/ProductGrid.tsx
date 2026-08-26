import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

export default function ProductGrid() {
  return (
    <section className="product-grid-section" aria-label="Products">
      <div className="product-grid">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
