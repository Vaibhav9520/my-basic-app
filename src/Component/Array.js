import React from 'react';

const ArrayOperations = ({ numbers }) => {
  // // greater than 5
  // const firstGreaterThanFive = numbers.find(num => num > 5);

  // //greater than 8
  // const someGreaterThanEight = numbers.some(num => num > 8);

  // //less than 11
  // const everyLessThanEleven = numbers.every(num => num < 11);

  // // descending order
  // const sortedArray = [...numbers].sort((a, b) => b - a);

  // greater than 5
  let firstGreaterThanFive;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
      firstGreaterThanFive = numbers[i];
      break; 
  }
}


// greater than 8
  let someGreaterThanEight = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 8) {
     someGreaterThanEight = true;
     break; 
  }
}


// less than 11
  let everyLessThanEleven = true;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 11) {
      everyLessThanEleven = false;
      break; 
  }
}


// descending order
  let sortedArray = [...numbers];
  for (let i = 0; i < sortedArray.length - 1; i++) {
   for (let j = i + 1; j < sortedArray.length; j++) {
     if (sortedArray[i] < sortedArray[j]) {
      // Swap elements
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = temp;
    }
  }
}


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

// Example usage
const App = () => {
  const numbersArray = [3, 9, 2, 6, 7, 10, 1];

  return (
    <div>
      <h1>Array Operations</h1>
      <ArrayOperations numbers={numbersArray} />
    </div>
  );
};

export default App;
