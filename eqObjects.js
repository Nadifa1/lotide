const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // returns an array of keys of object1
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    //checking if there are the same number of keys in the objects
    return false; 
  }
  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    } 
  }
  return true; 
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
