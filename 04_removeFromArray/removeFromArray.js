const removeFromArray = function(arr, val1, val2) {
    if (val1 !== null) {
        let val_index = arr.indexOf(val1);
        arr.splice(val_index, 1);
    }

    if (val2 !== null) {
        let val_index = arr.indexOf(val2);
        arr.splice(val_index, 1);
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
