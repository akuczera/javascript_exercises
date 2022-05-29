const findTheOldest = function(array) {
	const sorted = array.sort(function(a, b){
  	if(!a.yearOfDeath) {
    	var first = (new Date().getFullYear()) - a.yearOfBirth;
      }else {
      	var first = (a.yearOfDeath - a.yearOfBirth);
      }

    if(!b.yearOfDeath) {
    	var second = (new Date().getFullYear()) - b.yearOfBirth;
      }else {
      	var second = (b.yearOfDeath - b.yearOfBirth);
      }

      if(first > second) {
      return -1;
      } else {
      return 1;
      }
});
return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
