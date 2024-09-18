import React from "react";
const ArrayOperation = ({number}) => {
    let firstGreaterthanFive;
    let n = number.length;
    for(let i=0;i<n;i++){
        if(number[i] > 5){
            firstGreaterthanFive = number[i];
            break;
        }    
    }

    let GreaterThanEight = false;
    
    for(let i=0;i<n;i++){
        if(number[i] > 8){
            GreaterThanEight = true;
            break;
        }    
    }

    let LessThanEleven = false;
    for(let i=0;i<n;i++){
        if(number[i] < 11){
            LessThanEleven = true;
            break;
        }
    }

    let sortedArray = [...number];

    for(let i=0;i<sortedArray.length;i++){
        for(let j=i+1;j<sortedArray.length;j++){
            if(sortedArray[i] < sortedArray[j]){
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    

    return(
        <div>
            <h1>Orginal Array: {number.join(",")}</h1>
            <h4>First Element Greater than 5: {firstGreaterthanFive}</h4>
            <h4>Element Greater than 8: {GreaterThanEight ? "True":"false"}</h4>
            <h4>Every Element is Less than 11: {LessThanEleven ? "False":"True"}</h4>
            <h4>Array After Sorting: {sortedArray.join(",")}</h4>

        </div>

    );
}

const App = () => {
    const ArrayNumbers = [3,6,1,87,4,3,9];

    return (
        <div>
            <h1>Array Operations </h1>
            <ArrayOperation number = {ArrayNumbers} />
        </div>
    )
}
export default App;