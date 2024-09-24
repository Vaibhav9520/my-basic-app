import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contest from './Contest';

const App = () => {
  const contestName = "Ultimate Wrestling Contest";
  const wrestlers = ["John Cona", "The Rock", "Stone Cold Steve Austin", "Hulk Hogan"];

  return (
    <div className="Container">
      <Contest contestName={contestName} wrestlers={wrestlers} />
    </div>
  );
}

export default App;

