const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayToSum) {
	let total = 0;
  arrayToSum.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = function(arrayToMultiply) {
  let result = 1
  arrayToMultiply.forEach(num => 
    result *= num
  );
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	if (x === 0) {
    return 1;
  };

  result = 1;
  while (x > 1) {
    result = result * x;
    x--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
