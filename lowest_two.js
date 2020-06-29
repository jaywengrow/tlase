function lowestTwoValues(array) {
    let lowestValue = array[0];
    let secondToLowestValue = array[1];

    array.forEach(currentNumber => {
        if(currentNumber < lowestValue) {
            secondToLowestValue = lowestValue;
            lowestValue = currentNumber;
        } else if(currentNumber > lowestValue && currentNumber < secondToLowestValue) {
            secondToLowestValue = currentNumber;
        }
    });

    return [lowestValue, secondToLowestValue]; 
}

console.log(lowestTwoValues([1, 0, 7, 4, 6]));
//                           a  b