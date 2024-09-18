import React from 'react';
import Travellinfo from './Travellinfo';

const TravelData = () => {
  // Travel data to pass as props
  const travelData = [
    { destination: 'Paris', description: 'The city of light.', price: '$200' },
    { destination: 'Tokyo', description: 'A bustling metropolis.', price: '$1103' },
    { destination: 'New York', description: 'The city that never sleeps.', price: '$1300' }
  ];

  return (
    <div className="container">
      <h1>Explore Our Travel Destinations</h1>
      <Travellinfo travelData={travelData} />
    </div>
  );
};

export default TravelData;
