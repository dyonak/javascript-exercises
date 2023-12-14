const palindromes = function (testString) {
    let palindrome = false;
    testString = testString.toLowerCase();
    testString = testString.replaceAll(/[^a-zA-Z0-9]/g, '');
    testArray = testString.split('');
    console.log(testArray);

    while (testArray.length > 1)
    {
        a = testArray.shift();
        b = testArray.pop();

        if (a === b) {
            palindrome = true;
            console.log(`a: ${a} b: ${b}`);
            console.log(testArray);
            
        } else {
            return false;
        }
    };

    if (testArray.length === 1) return true;

    return palindrome;
};

palindromes('Animal loots foliated detail of stool lamina.')

// Do not edit below this line
module.exports = palindromes;
