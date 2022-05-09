const reverseString = function(str) {
    let reversed = [];
    let i = 0;
    while(i < str.length) {
        reversed.unshift(str.charAt(i));
        i++
    }
    return reversed.join("");
};


// Do not edit below this line
module.exports = reverseString;
