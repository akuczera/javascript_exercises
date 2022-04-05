const repeatString = function(string, num) {
    let output = '';
    if (num < 0) {
    return output = 'ERROR';
    } else {
    for (i=0; i < num; i++) {
    output = output + string;
  }
}

return output;
};

// Do not edit below this line
module.exports = repeatString;
