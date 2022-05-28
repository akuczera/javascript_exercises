const palindromes = function (string) {
    //take in the string, remove all punctuation and put into an array, then convert back to string
    let letterArray = string.toLowerCase().split('').filter(el => el.match(/[A-Z]/i)).join('');
    //flip the array in reverse in another variable, and end up with reversed string
    let reversed = string.toLowerCase().split('').filter(el => el.match(/[A-Z]/i)).reverse().join('');
    //compare the two strings if they're the exact same
        //then return true.
        //else, return false
    	        if(letterArray === reversed) {
    	        return true;
    	        } else {
    	        return false;
    	        }

}

// Do not edit below this line
module.exports = palindromes;
