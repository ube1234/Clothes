import { useState } from 'react';
import './ClothingCard.css';

function ClothingCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="clothing-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="card-image"
        />
        <div className={`card-overlay ${isHovered ? 'visible' : ''}`}>
          <button className="quick-view-btn">Quick View</button>
        </div>
        {item.discount > 0 && (
          <span className="discount-badge">-{item.discount}%</span>
        )}
        {item.isNew && <span className="card-badge new-badge">New</span>}
        {item.isHot && <span className="card-badge hot-badge">Hot</span>}
      </div>
      <div className="card-content">
        <p className="card-category">{item.category}</p>
        <h3 className="card-name">{item.name}</h3>
        <p className="card-color">{item.color}</p>
        <div className="card-footer">
          <div className="price-container">
            <span className="card-price">{formatPrice(item.price)}</span>
            {item.originalPrice && item.originalPrice > item.price && (
              <span className="original-price">{formatPrice(item.originalPrice)}</span>
            )}
          </div>
          <button className="add-to-cart-btn">
            <span>Add to Cart</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 2L2 4v9a1 1 0 001 1h10a1 1 0 001-1V4l-2-2H4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M2 4h12" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 7v4M10 7v4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClothingCard;
