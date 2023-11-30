const removeFromArray = function(inputArray) {
    itemsToBeRemoved = [];
    while (arguments.length > itemsToBeRemoved.length + 1) {
        itemsToBeRemoved.push(arguments[1 + itemsToBeRemoved.length]);
    };
    for (const item of itemsToBeRemoved) {
        let index = inputArray.indexOf(item);
        if (index != -1){
            inputArray.splice(index, 1);
        }
    };
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
