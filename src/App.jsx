import { useState } from 'react'
import './App.css'
import ClothingCard from './components/ClothingCard'
import DealsSection from './components/DealsSection'
import { clothingData, specialDeals } from './data/clothingData'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>FashionHub</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-icons">
            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 2L2 4v13a1 1 0 001 1h12a1 1 0 001-1V4l-2-2H4z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 4h16" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 8v5M13 8v5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h2 className="hero-title">Discover Your Style</h2>
          <p className="hero-subtitle">Premium Fashion for Every Occasion</p>
          <button className="hero-cta">Shop Now</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Special Deals Section */}
      <DealsSection deals={specialDeals} />

      {/* Women's Section */}
      <section className="clothing-section" id="women">
        <div className="section-header">
          <h2 className="section-title">Women's Collection</h2>
          <p className="section-subtitle">Elegant styles that define your personality</p>
        </div>
        <div className="clothing-grid">
          {clothingData.women.map(item => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Men's Section */}
      <section className="clothing-section men-section" id="men">
        <div className="section-header">
          <h2 className="section-title">Men's Collection</h2>
          <p className="section-subtitle">Sophisticated fashion for the modern gentleman</p>
        </div>
        <div className="clothing-grid">
          {clothingData.men.map(item => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FashionHub</h3>
            <p>Your destination for premium fashion</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#women">Women</a></li>
              <li><a href="#men">Men</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@fashionhub.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FashionHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
