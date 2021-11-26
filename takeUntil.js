
//need to push info into array ? 
//need to use .slice OR .findIndex 

// const itemInArray = array[i] --> item in the array 

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
 

const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    const itemInArray = array[i]; 
    if (callback(itemInArray)) {
      break;
    }
    results.push(itemInArray); 
  }
  return results; 
} 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(data1, results1));
console.log(assertArraysEqual(data2, results2));

/* Result
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/