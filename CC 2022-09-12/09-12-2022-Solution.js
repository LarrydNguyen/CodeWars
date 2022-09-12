// Smallest value of an array
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0


function min(arr, toReturn) {
    //P: array, string
    //R: smallest value of an array or the index of the value, depending on what the string is asking for
    //E: min([1,2,3,4,5], 'value') // 1
      // min([1,2,3,4,5], 'index') // 0
    //P: conditional of toReturn
    // if its value you can Math.min the array 
    // else indexOf Math.min of the arr to get the lowest element. 
    
    if ( toReturn === 'value'){
      return Math.min(...arr)
    }else if( toReturn === 'index'){
      return arr.indexOf(Math.min(...arr))
      }
  }