import { useState } from 'react';

function Favcolor() {
  const [colour, setColour] = useState('Blue'); 
  return (
    <div>
      <h1 style={{ color: colour }}>My Favorite Color is: {colour}</h1>
      <button onClick={() => setColour("Yellow")}>Change Color</button> 
    </div>
  );
}

export default Favcolor;
