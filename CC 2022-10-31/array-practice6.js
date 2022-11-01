// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// multiple arrays, no negatives, no floats - arr multiple each unique sub array
// number -> unique number of combinations

// if it is a *UNIQUE NUMBER* use Set because you dont want duplicates

// function solve(arr){
//   console.log(arr.map(v => [...new Set(v)].length))
//   // for each val, make a new Set(for no duplicates) of array with only size
//   // reduce() to multiply each array to determine how many arrays can be formed. 
// return arr.map(v => [...new Set(v)].length).reduce((a,c)=>a*c,1)
// }

// function solve(arr){
// return arr.map(v => new Set(v).size).reduce((a,c)=>a*c,1)
// }

// one line solution:
// pass in the array, reduce it by taking the accu multiplying it by the new sets current value size
const solve = arr => arr.reduce((a,c)=> a * new Set(c).size,1)

console.log(solve([[1,2],[4],[5,6]]),4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2],[3,4],[5,6]]),8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)