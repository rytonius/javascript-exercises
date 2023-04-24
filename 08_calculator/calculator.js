const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(params) {
  let totalValue = 0;
	for (i = 0; i < params.length; i++) {
    totalValue += params[i] ;
  }
  return totalValue;
};

const multiply = function(params ) {
  let totalValue = params[0];
	for (i = 1; i < params.length; i++) {
    totalValue *= params[i] ;
  }
  return totalValue;
};

const power = function(a, b) {
	return Math.pow(  a, b  );

};

const factorial = function(a) {
  if ( a == 0) {
    return 1;
  }

  return a * factorial(a - 1);
  
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
