const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false; 
  } 
  for (let i = 0, j = 0; i < arrOne.length; j++, i++) {
    if (arrOne[i] === arrTwo[j]) {
    continue;
  } else {
    return false;
  }
  }
return true; 
}; 

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    return console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  }
   else { 
     return console.log(`🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`)
}
  };  


const middle = function(arr) {
  let length = arr.length;
  const middleIndex = Math.floor(length/2);
  let middleArr = []; 
  if (length < 3) {
    return middleArr; 
  } else if (length % 2 === 0) {
    middleArr.push(arr[middleIndex-1], arr[middleIndex]);
  } else {
    middleArr.push(arr[middleIndex]);
  }return middleArr;
  }; 

 console.log(middle([1,2,3,4,5]));
  console.log(middle([1]));
  console.log(middle([1,2, 3, 4]));
  



  
    

    
  


  