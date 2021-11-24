const without = function(sourceArr, itemsToRemoveArr) {
  const newArr = []; 
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
    newArr.push(sourceArr[i]); 
  }
}
return newArr;
};  


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]