import { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { state, removeItem, closeCart, totalPrice } = useCart();
  const { items, isOpen } = state;
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        closeCart();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, closeCart]);

  // Prevent body scroll when cart is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Scrim */}
      <div
        className={`cart-scrim${isOpen ? ' visible' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Cart panel */}
      <div
        ref={overlayRef}
        className={`site-cart${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="cart-header">
          <span className="cart-title">CART</span>
          <button
            className="cart-close"
            onClick={closeCart}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <button className="cart-empty-link" onClick={closeCart}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            items.map((item, i) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="cart-item"
                style={{ '--i': i } as React.CSSProperties}
              >
                <div className="cart-item-image">
                  <img src={item.product.image} alt={item.product.name} />
                </div>
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.product.name}</span>
                  <span className="cart-item-size">SIZE: {item.size}</span>
                  <span className="cart-item-qty">QTY: {item.quantity}</span>
                  <span className="cart-item-price">${item.product.price * item.quantity}</span>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.product.id, item.size)}
                  aria-label={`Remove ${item.product.name}`}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <a
              href="#checkout"
              className="cart-checkout"
              id="checkout-button"
            >
              CHECKOUT
            </a>
          </div>
        )}
      </div>
    </>
  );
}
