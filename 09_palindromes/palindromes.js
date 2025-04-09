const palindromes = function (str) {
    let strArr = []; 
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str.at(i))) {     
            strArr.push(str.at(i)); 
        }
    }

    str = strArr.join("");
    let reverse  = str.split("").reverse().join("");
    return str == reverse;
};

// Do not edit below this line
module.exports = palindromes;
