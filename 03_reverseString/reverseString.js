const reverseString = function(string) {

    let stringArray = string.split("")
    reversedArray = stringArray.reverse()
    reversedString = reversedArray.join("")
    return reversedString 
};

// Do not edit below this line
module.exports = reverseString;
