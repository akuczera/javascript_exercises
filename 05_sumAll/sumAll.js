const sumAll = function(one, two) {
	let sum = 0;
  
  if (one < 0 || two < 0 || !Number.isInteger(one) || !Number.isInteger(two)) {
  return "ERROR";
  } else if (one > two) {
  
  for (i = two; i <= one; i++) 
  sum = sum + i;
  
  } else {
  
  for (i = one; i <= two; i++) 
  sum = sum + i;
  
  } 
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
