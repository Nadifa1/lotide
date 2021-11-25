const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//skip or don't count spaces
//loop 


const countLetters = function(str) {
let unspaced = str.split(" ").join("");
const results = {}; 
for (let index of unspaced) { 
    if (results[index]) {
      results[index]++; 
    } else {
    results[index] = 1; 
    }
  }
return results; 
}

console.log(countLetters("hello world"));