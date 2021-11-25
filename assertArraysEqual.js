const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) { 
    if (arrOne.length[i] !== arrTwo.length[i]) {
    return false; 
  } 
}
return true; 
}; 

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    return console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  }
   else { 
     return console.log(`🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`)
}
  };  

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual(['1', '2', '3'], [1, 2]); 





