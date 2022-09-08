// Flatten and sort an array
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

"use strict";

function flattenAndSort(array) {
  //P: array 
  //R: array sorted and flat
  //E: flattenAndSort([[2] []])//2
  //P: use concat() to merge two or more arrays. 
    // ... spread syntax, allows an iterable, such an array or string, 
    //to be expanded in places where zero or more arguments or elements are expected. 
    // sort() to make the order in ascending order
  return [].concat(...array).sort((a,b)=>a-b)
}