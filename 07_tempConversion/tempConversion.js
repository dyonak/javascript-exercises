const convertToCelsius = function(tempF) {
  return +(((tempF - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  return +((tempC / 5) * 9 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
