
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
    console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  }
   else { 
     console.log(`🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`)
}
  };  
 
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 


const words = ["ground", "control", "to", "major", "tom"];
 
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); 
  }
  return results; 
}; 

const callback = function(item) { 
  return item[0]
}; 

const results1 = map(words, callback); 

console.log(assertArraysEqual(words, results1)); 

// console.log(results1);



 