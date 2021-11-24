const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false; 
  } 
  for (let i = 0, j = 0; i < arrOne.length; j++, i++) {
    if (arrOne[i] === arrTwo[j]) {
    continue;
  } else {
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





