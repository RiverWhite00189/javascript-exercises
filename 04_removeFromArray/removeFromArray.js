const removeFromArray = function(arr, ...vals) {
    for (let val of vals) {
        if (val !== undefined) {
            let val_index = arr.indexOf(val);
            while (val_index !== -1 ) {
                arr.splice(val_index, 1);
                val_index = arr.indexOf(val);
            }
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
