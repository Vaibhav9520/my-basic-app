import React from 'react';
import PropTypes from 'prop-types';

const Contest = ({ contestName, wrestlers }) => {
  const handleAlert = () => {
    alert("Contest Button Clicked!");
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h1>{contestName}</h1>
        <button className="btn btn-primary" onClick={handleAlert}>Alert</button>
        <ul className="list-group mt-3">
          {wrestlers.map((wrestler, index) => (
            <li key={index} className="list-group-item">{wrestler}</li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <img 
          src="https://via.placeholder.com/400" 
          alt="Wrestling Contest" 
          className="img-fluid"
        />
      </div>
    </div>
  );
};

Contest.propTypes = {
  contestName: PropTypes.string.isRequired,
  wrestlers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Contest;