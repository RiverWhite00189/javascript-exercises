const convertToCelsius = function(temp) {
  let c = (temp - 32) * (5/9)
  if (c == 0) return c;
  return parseFloat(c.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let f = (temp * (9/5)) + 32;
  if (f == 0) return f;
  return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
