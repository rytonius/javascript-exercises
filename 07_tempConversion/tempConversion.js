const convertToCelsius = function(x) {
  return Math.round(((x - 32) * .5556 + Number.EPSILON ) * 10) / 10;
};

const convertToFahrenheit = function(x) {
  return Math.round(((x * 1.8 + 32) + Number.EPSILON ) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
