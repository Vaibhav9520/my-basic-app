import React from 'react';
import PropTypes from 'prop-types';
import './Travellinfo.css'; 

const Travellinfo = ({ travelData }) => {
  
  const handleBookNow = (destination) => {
    alert(`You have selected to book a trip to ${destination}`);
  };

  return (
    <table className="travel-table">
      <thead>
        <tr>
          <th>Destination</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {travelData.map((travel, index) => (
          <tr key={index}>
            <td>{travel.destination}</td>
            <td>{travel.description}</td>
            <td>{travel.price}</td>
            <td>
              <button
                className="book-btn"
                onClick={() => handleBookNow(travel.destination)}
              >
                Book Now
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


Travellinfo.propTypes = {
  travelData: PropTypes.arrayOf(
    PropTypes.shape({
      destination: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Travellinfo;
