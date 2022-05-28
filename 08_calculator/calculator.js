const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  const total = array.reduce((a, b) => a + b, 0);
  return total;
};

const multiply = function(array) {
  const multiple = array.reduce((a, b) => a * b, 1);
  return multiple;

};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(x) {
  if(x == 0) {
    return 1;
  } else {
    let fact = 1;
    for (i = 1; i <= x; i++) {
      fact = fact * i;
    }
    return fact;
  }
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
