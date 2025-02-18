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
      <h1>{offer.title}</h1>
      <img src={offer.image} alt={offer.title} className="offer-image" />
      <p>Discount: {offer.discount}%</p>
      <p>Category: {offer.category}</p>
    </div>
  );
}

export default OfferDetails;
