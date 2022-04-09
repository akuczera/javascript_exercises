const leapYears = function(year) {
	if (year % 100 == 0 && year % 4 == 0 && year % 400 == 0) {
  	console.log("TRUE");
  	return true;
  } else if (year % 100 == 0 && year % 4 == 0) {
  	console.log("FALSE");
  	return false;
  } else if (year % 4 == 0) {
  	console.log("TRUE");
  	return true;
  } else {
  	console.log("FALSE");
  	return false;
  }
};

//Not as clean as the solution, but I went with what I knew here at the time.
// Do not edit below this line
module.exports = leapYears;
