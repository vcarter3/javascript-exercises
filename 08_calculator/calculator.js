const add = function(num1,num2) {
  return num1+num2
};

const subtract = function(num1,num2) {
  return num1-num2
};

const sum = function(array) {
  let sum = 0;
  for(i=0; i<array.length; i++){
    sum += parseInt(array[i])
  }
  return sum
	
};

const multiply = function(array) {
  let mult = 1
  for(i=0; i<array.length; i++){
    mult *= array[i]
  }
  return mult
};

const power = function(num1,num2) {
  if(num2==0){return 0}
  let pow = 1;
  for(i=1; i < num2+1; i++){
    pow*=num1
  }
	return pow
};

const factorial = function(num) {
  let fact = 1;
  for(i=1; i<num+1; i++){
    fact *= i
  }
	 return fact
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
