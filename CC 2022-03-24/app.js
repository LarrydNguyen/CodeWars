// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    //split the string to individual numbers
    // map creates a new array with a provided function on every element
   
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
  }