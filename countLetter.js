const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(string) {
  let unspaced = string.split(" ").join("")
  //takes in the parameter (i.e., string) and removes the spaces " " to avoid counting it in the new object
  const results = {}; 
  //creating an empty/new object to put the results in
  for (let char of unspaced) {
    //loop through every element in the (revised) parameter
    if (results[char]) {
      // if the char is already in the new object (evaluates to true); add to the count/value
      results[char] += 1;
      //add 1 to the value 
    } else {
      //if the char is not already in the new object (i.e., the if statement above evaluate to false); create a key with a value of 1 
      results[char] = 1;
    }
  }
  return results; 
}

console.log(countLetters("lighthouse in the house")); 


