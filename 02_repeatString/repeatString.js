const repeatString = function(inputString, n) {
    returnString = '';
    if (n == NaN || n < 0) {
        return 'ERROR'
    }
    while(n > 0) {
        returnString += inputString;
        n--;
    };
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
