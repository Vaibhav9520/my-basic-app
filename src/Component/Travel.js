import React from "react";
import TravelRender from "./TravelRender"

const Travel = () =>{

    const travelDatas = [
        { destination: 'Paris', description: 'The city of light.', price: '$200' },
        { destination: 'Tokyo', description: 'A bustling metropolis.', price: '$1103' },
        { destination: 'New York', description: 'The city that never sleeps.', price: '$1300' }
      ];

    return(
        <div>
            <h1>Explore Our Travel Destinations</h1>
            <TravelRender travelData = {travelDatas} />
            
        </div>
    )
}

export default Travel;