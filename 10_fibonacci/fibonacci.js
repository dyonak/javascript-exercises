const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    a = 1;
    b = 1;
    while (x > 2){
        temp = b;
        b = b + a;
        a = temp;
        x--;
    };
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
