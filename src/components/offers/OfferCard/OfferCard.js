import React from 'react';
import { Link } from 'react-router-dom';
import './OfferCard.css';

function OfferCard({ offer }) {
  return (
    <div className="offer-card offer-item offer item card">
      <Link to={`/offer/${offer.id}`}>
        <img src={offer.image} alt={offer.title} className="offer-image" />
        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-discount">{offer.discount}% Off</p>
      </Link>
      <button className="offer-button">Use Offer {offer.discount}%</button>
    </div>
  );
}

export default OfferCard;
