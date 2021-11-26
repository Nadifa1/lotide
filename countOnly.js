const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //create a new object to put our results in
  for (const item of allItems) {
    //loops through the array 
    if (itemsToCount[item]) {
      // evaluates if the object has the item from the array
      if (results[item]) {
        //if it evaluates to true and the new object already has the item as a key
        results[item] += 1;
        //add one to its value
      } else {
        //if the 1st if statement is true and the item hasn't been logged into the new object yet 
        results[item] = 1;
        //assign the key to 1
      }
    }
  return results; 
  //returns the new object that we've filled with the properties (keys and values)
}
}; 

    
// Test scenarios 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



    