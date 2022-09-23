// Odd or Even?
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    //P: array 
    //R: string to determine of the total of the array is even or odd
    //E: oddOrEven([0, 1, 4])//'odd'
    //P: 
    //reduce the array to one number, if that number is divisible by 2 then it will be even, if not odd
  
     return array.reduce((s,n)=> s + n,0)%2 === 0 ? "even" : "odd";
  }