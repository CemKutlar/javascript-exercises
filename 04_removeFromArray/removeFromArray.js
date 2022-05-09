const removeFromArray = function(arr, ...rest) {
    let result;
    for(item of arr){
        for(removeElem of rest) {
            if(item == removeElem) {
                arr = arr.filter(function(item) {
                    return item !== removeElem;
                })
            }
        }
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
