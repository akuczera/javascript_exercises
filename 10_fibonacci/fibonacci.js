const fibonacci = function(num) {
    const int = parseInt(num);
    let array = [1, 1];

    if(int < 0) {
        return "OOPS";
    }else if(int == 0 || int == 1){
        return 1;
    }else {
        for (let i = 2; i <= int; i++) {
            let sum = array[i-1] + array[i-2];
            array.push(sum);
        }
        return array[int-1];

    }
};

// Do not edit below this line
module.exports = fibonacci;
