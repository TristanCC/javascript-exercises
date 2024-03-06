const repeatString = function(string,number) {
    let newstring = string
    if(string == '' || number == 0){
        return ''
    }
    if(number < 0) {
        return "ERROR"
    }
    for (i=0;i<number-1;i++) {
        newstring += string
    }
    return newstring

};

repeatString("howdy", -1)


// Do not edit below this line
module.exports = repeatString;
