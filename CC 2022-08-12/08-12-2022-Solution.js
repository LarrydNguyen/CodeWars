// Find Multiples of a Number
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
    //P: nums, integer != 0 
    //R: return an array , if the limit is a multiple of integer, include that 
    //E: findMultiples(2, 6)// [2, 4, 6]
      // findMultiples(5, 25)// [5, 10, 15, 20, 25]
    //P: findMultiples(intger, limit){
      // for loop
      // make a varible for the array
      // for each pass in the loop push the number into an empty array 
  //}
    console.log(integer, limit)
    let result = []
    
    for (let i = integer; i<=limit ; i+=integer)
      result.push(i)
      
    return result
  }