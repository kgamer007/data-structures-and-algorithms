## Array Reverse 
Reverse an Array 

## Challenge
Write a function called 'reverseArray to reverse a bunch of values in reverse.

## Solution
function reverseArray (arr) {
  let newArray = [];
  for (let i = arr.length-1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}