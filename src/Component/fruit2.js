import React from 'react'
import ClassComp1 from './ClassComp1';
const isDoorOpen = false;


function Fruit2() {
    // const fruit = {name:"",colour:""};
    const fruitShop = {};
  return (
    <div>
      <h1>Fruits</h1>
      {fruitShop.name !== undefined && fruitShop.colour !== undefined ? <ClassComp1 fruitShop = {fruitShop}/>:null}

        {/* <ClassComp1 fruitShop={fruitShop}/> */}

        {isDoorOpen?<h2>Door is open</h2>:<h2>Door is closed</h2>}
    </div>
  )
}

export default Fruit2;