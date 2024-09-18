import React from 'react';

function TravelRender({ travelData }) {
    const handleBookNow = (destination) => {
        alert(`You have selected to book a trip to ${destination}`);
      };
  return (
    <div>
      <h2>Travel Destinations</h2>
      <style>
        {`
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          tr:hover {
            background-color: #ddd;
          }
          button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 4px;
          }
          button:hover {
            background-color: #45a049;
          }
        `}
      </style>
      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {travelData.map((data, index) => (
            <tr key={index}>
              <td>{data.destination}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td><button onClick={() => handleBookNow(data.destination)}>Book Now</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TravelRender;
