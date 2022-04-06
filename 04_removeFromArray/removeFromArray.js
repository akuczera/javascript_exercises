const removeFromArray = function() {
  let array = arguments[0];
  let args = Array.from(arguments);
  
  for (i=0; i < array.length; i++) {
    for (j=1; j < args.length; j++ ) {
    if (array[i] === args[j]) {
      array.splice(i, 1);
      i=0;
    }
    }
    j = 1;
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
