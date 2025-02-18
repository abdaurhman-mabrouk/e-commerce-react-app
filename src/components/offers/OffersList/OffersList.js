import React, { useState, useEffect } from 'react';
import { offersList } from '../../../services/offersService';
import OfferCard from '../OfferCard/OfferCard';
import './OffersList.css';

function OffersList() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(offersList);
  }, []);

  return (
    <div className="offers-list-div">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OffersList;
