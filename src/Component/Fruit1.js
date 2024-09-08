import React from 'react'
import Cell from './Cell';

export default function Fruit1() {
  let apple = 10;
  let orange = 15;
  let banana = 20;
  return (
    <div>
      <p>
      <Cell Apples ={apple} bananas ={banana} Orange ={orange} />
      </p>
    </div>
        
  )
}
