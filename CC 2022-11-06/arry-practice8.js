// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// array of ordered numbers 1 --> n
// missing number 
// if first array === output array --> 0


// too much time spent on the first section
// function findDeletedNumber(arr, mixArr){
//   // filter through to find a specific number
//   // if the value of mixArr.indexOf(value) === -1 --> MISSING NUMBER 
//   return arr1.filter(v => mixArr.indexOf(v) == -1)[0]|| 0
// }

// function findDeletedNumber(arr, mixArr){
//   // for loop throught the first array if the index of array2 === < 0
//   // return that value
//   for(let i = 0; i < arr.length; i++){
//     if(mixArr.indexOf(arr[i]) < 0 ){
//       return arr[i]
//     }
//   }
//   return 0
// }

//two linears are faster than a quadratic 
function findDeletedNumber(arr, mixArr){
    if(arr.length === mixArr.length){
      return 0 
    }else{
      return arr.reduce((a,b)=>a+b,0) - mixArr.reduce((a,b)=>a+b,0)
    }
 }
 
 
 
 console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion');
 console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
 console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')