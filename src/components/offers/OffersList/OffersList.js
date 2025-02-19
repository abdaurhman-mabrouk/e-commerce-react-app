import React from 'react';
import offers from '../../../data/offers';
import OfferCard from '../OfferCard/OfferCard';
import './OffersList.css';

function OffersList() {
  return (
    <div className="offers-list">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OffersList;
