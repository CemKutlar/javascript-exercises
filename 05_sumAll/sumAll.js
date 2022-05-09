const sumAll = function(x,y) {
    let sum = 0;
    if(x > y) {
        let temp = y;
        y = x;
        x = temp;
    } 
    if( x < 0 || y < 0 || typeof(x) != "number" || typeof(y) != "number") return "ERROR";

    for(x=x; x <= y; ++x) {
        sum +=x;
    } 
    return sum;
};

console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
