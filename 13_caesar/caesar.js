const caesar = function(str, shift) {
    if(shift < 0) shift = shift + 26;
    shift = shift % 26;
    let result = "";
    for(let i = 0; i<str.length; i++) {
        let shiftedUnicode = str.charCodeAt(i) + shift;
        if(shiftedUnicode > 90 && (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)) {
            result += String.fromCharCode(64 + (shiftedUnicode - 90));
        } else if (shiftedUnicode > 122 && (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)) {
            result += String.fromCharCode(96 + (shiftedUnicode - 122));
        } else if ((str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)){
            result += String.fromCharCode(shiftedUnicode);
        } else {
            result += str.charAt(i);
        }
         
    }
    return result;
};

console.log(caesar("Hello, World!", 5));

// Do not edit below this line
module.exports = caesar;
