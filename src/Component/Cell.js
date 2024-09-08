// import React from 'react'

// function Cell(props) {
//     const {cost}  = props;
//   return (
//     <div>
//         <p>My New Mobile Price: ${cost}</p>
//     </div>
//   )
// }

// export default Cell
// //Rfce


// function Cell({ cost, model ,compamyName}) {
//     return (
//         <div>
//             <p>My New Mobile Price: ₹{cost}</p>
//             <p>Model: {model}</p>
//             <p>Company Name: {compamyName}</p>
//         </div>
//     );
// }

function Cell(props) {
    const{Apples,bananas,Orange} = props;
    return (
        <div>
            <p>Number of Apples: {Apples}</p>
            <p>Number of Bananas: {props.bananas}</p>
            <p>Number of Oranges: {props.Orange}</p>
        </div>
    );
}
export default Cell;