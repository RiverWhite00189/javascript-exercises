const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function(arr) {
  let product = arr[0];
  for (let i = 1; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a == 0) return 1;

  let tot = a;
  for (let i = a - 1; i > 0; i--) {
    tot *= i;
  }
  return tot;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
