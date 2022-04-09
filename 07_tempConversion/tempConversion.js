const ftoc = function(fahrenheit) {
  celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  return parseFloat(celsius);
};

const ctof = function(celsius) {
  fahrenheit = ((celsius * ( 9 / 5 )) + 32).toFixed(1);
  return parseFloat(fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
