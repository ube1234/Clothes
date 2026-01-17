import { useState, useEffect } from 'react';
import './DealsSection.css';

function DealsSection({ deals }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timers = deals.map((deal, index) => {
      return setInterval(() => {
        const now = new Date().getTime();
        const distance = deal.endTime.getTime() - now;

        if (distance > 0) {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft(prev => ({
            ...prev,
            [deal.id]: { hours, minutes, seconds }
          }));
        } else {
          setTimeLeft(prev => ({
            ...prev,
            [deal.id]: { hours: 0, minutes: 0, seconds: 0 }
          }));
        }
      }, 1000);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [deals]);

  return (
    <section className="deals-section">
      <div className="deals-container">
        <div className="deals-header">
          <h2 className="deals-title">Special Offers & Deals</h2>
          <p className="deals-subtitle">Limited time offers - Don't miss out!</p>
        </div>
        <div className="deals-grid">
          {deals.map((deal, index) => (
            <div 
              key={deal.id} 
              className="deal-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="deal-image-container">
                <img src={deal.image} alt={deal.title} className="deal-image" />
                <div className="deal-overlay"></div>
                <div className="deal-discount-badge">
                  <span className="discount-percent">{deal.discount}%</span>
                  <span className="discount-off">OFF</span>
                </div>
              </div>
              <div className="deal-content">
                <h3 className="deal-title">{deal.title}</h3>
                <p className="deal-description">{deal.description}</p>
                {timeLeft[deal.id] && (
                  <div className="countdown-timer">
                    <div className="timer-label">Ends in:</div>
                    <div className="timer-display">
                      <div className="timer-unit">
                        <span className="timer-value">{String(timeLeft[deal.id].hours).padStart(2, '0')}</span>
                        <span className="timer-label-small">Hours</span>
                      </div>
                      <span className="timer-separator">:</span>
                      <div className="timer-unit">
                        <span className="timer-value">{String(timeLeft[deal.id].minutes).padStart(2, '0')}</span>
                        <span className="timer-label-small">Minutes</span>
                      </div>
                      <span className="timer-separator">:</span>
                      <div className="timer-unit">
                        <span className="timer-value">{String(timeLeft[deal.id].seconds).padStart(2, '0')}</span>
                        <span className="timer-label-small">Seconds</span>
                      </div>
                    </div>
                  </div>
                )}
                <button className="deal-cta-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DealsSection;
