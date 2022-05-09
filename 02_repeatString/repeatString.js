const repeatString = function(str, num) {
    if(num == 0) return "";
    if(num <0) return "ERROR";
    result = str + repeatString(str, num-1);
    return result;
};
let result;

console.log(repeatString("hey",3));

// Do not edit below this line
module.exports = repeatString;
