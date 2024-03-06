const removeFromArray = function(array,  ...inputs) {
    inputs.forEach(input => {
        index = array.indexOf(input)
        if(index != -1) {
            array.splice(index,1)
        }
    }) 
    console.log(array)
    

};

removeFromArray([1,2,3,4,5],3,4)

// Do not edit below this line
module.exports = removeFromArray;
