const removeFromArray = function(array,  ...inputs) {
    inputs.forEach(input => {
        while (array.includes(input)){
        index = array.indexOf(input)
        if(index != -1) {
            array.splice(index,1)
        }}
    }) 
    return array
    

};

// Do not edit below this line
module.exports = removeFromArray;
