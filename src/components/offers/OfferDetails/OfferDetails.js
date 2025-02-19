import React from 'react';
import { useParams } from 'react-router-dom';
import offers from '../../../data/offers';
import './OfferDetails.css';

function OfferDetails() {
  const { id } = useParams();
  const offer = offers.find((offer) => offer.id === parseInt(id));

  if (!offer) {
    return <div>Offer not found</div>;
  }

  return (
    <div className="offer-details">
      <h1 className="offer-title">{offer.title}</h1>
      <img src={offer.image} alt={offer.title} className="offer-image" />
      <p className="offer-discount">Discount: {offer.discount}%</p>
      <p className="offer-category">Category: {offer.category}</p>
      <p className="offer-description">{offer.description}</p>
    </div>
  );
}

export default OfferDetails;
