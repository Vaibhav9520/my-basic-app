// import React from 'react'

// function CarList({cars}) {
//   return (
//     <ul>
//         {cars.map((cars) => {
//             <li>
//                 {cars.brand} - {cars.model}
//             </li>
//         })}
//     </ul>
//   );
// }

// function App(){
//     const cars = [
//         {brand : "Honda", model : "Verma"},
//         {brand : "Tyota" ,model : "Hyandye"},
//         {brand : "Skoda", model : "kushsh"},
//     ];
//     return(
//         <div>
//             <h1>My Car details:</h1>
//             <CarList cars={cars}/>
//         </div>
//     );
// }
// export default CarList;

import React from 'react';

function CarList({ cars }) {
  return (
    <ul>
      {cars.map((car) => (
        <li>
          {car.brand} - {car.model}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const cars = [
    { brand: 'Honda', model: 'Verma' },
    { brand: 'Toyota', model: 'Hyundai' },
    { brand: 'Skoda', model: 'Kushaq' },
  ];

  return (
    <div>
      <h1>My Car details:</h1>
      <CarList cars={cars} />
    </div>
  );
}

export default App;
