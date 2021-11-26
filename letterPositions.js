const eqArrays = function(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) { 
    if (arrOne.length[i] !== arrTwo.length[i]) {
    return false; 
  } 
}
return true; 
}; 

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    return console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  }
  else {
    return console.log(`🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`)
  }
};

// we need to figure out how to find the index of each letter
//The charAt() method returns the character at a specified index (position) in a string.

const letterPositions = function (sentence) {
  let results = {};
  let index = 0;
  //set 0 to start counting from 0 
  for (let char of sentence) {
    //loop through every char/letter of the string; evaluates one char at a time
    if (char === " ") {
      // if char = a space
      index++;
      //--> move to the next char/letter
      continue; 
      //don't evaluate space //jump
    } else if (results[char] === undefined) {
      // if char is not found/undefined, assign the char an index/position of the char
      results[char] = [index];
    } else {
      //if char has already been found once, assign another index/position value 
      results[char].push(index);
    }
    index++;
    //evaluates the next char; continues the cycle  
  }
  return results;
};


// let text = "lighthouse in the house";
// let letter = text.charAt(0);
// console.log(letter);



// assertArraysEqual(letterPositions("hello").e, [1]); 
assertArraysEqual(eqArrays(letterPositions("lighthouse in the house").h, [3]), true);
