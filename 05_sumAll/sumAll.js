const sumAll = function(fromNumber, toNumber) {
    let sumReturn = 0;

    if (typeof fromNumber !== 'number' || fromNumber < 0 
    || typeof toNumber !== 'number' || toNumber < 0){
        return 'ERROR';
    };
    
    if (fromNumber > toNumber) [fromNumber, toNumber] = [toNumber, fromNumber];

    for (let index = fromNumber; index <= toNumber; index++) {
        sumReturn += index;
    };

    return sumReturn;
};

// Do not edit below this line
module.exports = sumAll;
