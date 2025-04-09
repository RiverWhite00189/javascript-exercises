const reverseString = function(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {      //skip this when you can just do .split
        arr[str.length - i] = str.charAt(i);
    }

    arr.reverse
    return arr.join("")
};

// Do not edit below this line
module.exports = reverseString;
