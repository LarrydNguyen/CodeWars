// Convert an array of strings to array of numbers
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
    //P: string
    //R: array of number
    //E: toNumberArray(["1", "2", "3"])// [1, 2, 3]
    //P: toNumberArray(stringarray){
      // split(), to turn the string into an array 
      // return as number
  //}
    let nums = stringarray.map(e => Number(e))
    console.log()
    return nums
  }
  