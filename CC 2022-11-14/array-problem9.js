// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// given and array of 3 
// find the index of the middle array 


function middleIndex(arr){
    // sort the array, but spread it so that it does not effect the original array.
    let sorted = [...arr].sort((a,b)=> a-b)
    // find the indexof the middle element calling the orginal array
    return arr.indexOf(sorted[1])
  }
  
  
  // const middleIndex = arr => [...arr].sort((a,b)=> a-b).indexOf(sorted[1])
  
  console.log(middleIndex([2, 3, 1]), '0')
  console.log(middleIndex([5, 10, 14]), '1')
  