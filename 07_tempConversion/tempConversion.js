const convertToCelsius = function(f) {
  convertednum = (f-32)*5/9
  return convertednum = Math.round(convertednum*10)/10
};

const convertToFahrenheit = function(c) {
  convertednum = (9/5*c)+32
  return convertednum = Math.round(convertednum*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
