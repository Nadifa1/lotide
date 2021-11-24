const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅ Assertion Passed: [actual] === [expected]");
  } else {
    console.log("🛑 Assertion Failed: [actual] !== [expected]");
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(2, 5);

// 2 arrays --> returns true or false 



const eqArrays = function(arrOne, arrTwo) {
  for (var i = 0; i <= arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
    return false;
  } 
  }
return true; 
}
 

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1])); 
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

