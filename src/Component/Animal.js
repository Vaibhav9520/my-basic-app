import React from 'react'
import Zoo from './Zoo';
import Bird from './Bird';

function Animal() {
    const animal1 = "Horse";
    const animal2 = "Dog";
    const animal3 = "Cat";

    const Bird1 = "Peigen";
    const Bird2 = "owl";
    const Bird3 = "Sparrow";
  return (
    <div>
        <Zoo animal11 ={animal1} animal22 ={animal2} animal33 ={animal3} />
        <Bird Bird11 ={Bird1} Bird22 ={Bird2} Bird33 ={Bird3} />
    </div>
  )
}

export default Animal;