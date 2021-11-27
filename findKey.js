const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyOne = function(object, callback) {
  const keys = Object.keys(object); 
  for (const key of keys) {
    if (callback !== object[key][key]) {
    return undefined; 
    }  
}
return key;
};

findKeyObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}; 

// let callback = x => x.stars === 2 // => "noma"

assertEqual(findKeyOne(findKeyObject, x => x.stars === 2)); 