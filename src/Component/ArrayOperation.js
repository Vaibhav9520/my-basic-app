import React from 'react';

const ArrayOperation = ({ numbers }) => {
  
  const firstGreaterThanFive = numbers.find(num => num > 5);

  const someGreaterThanEight = numbers.some(num => num > 8);

  
  const everyLessThanEleven = numbers.every(num => num < 11);

  
  const sortedArray = [...numbers].sort((a, b) => b - a);

  return (
    <div>
      <h3>Original Array: {numbers.join(', ')}</h3>
      <p>First element greater than 5: {firstGreaterThanFive}</p>
      <p>Are some elements greater than 8? {someGreaterThanEight ? 'Yes' : 'No'}</p>
      <p>Is every element less than 11? {everyLessThanEleven ? 'Yes' : 'No'}</p>
      <p>Sorted Array (Descending): {sortedArray.join(', ')}</p>
    </div>
  );
};

export default ArrayOperation;
