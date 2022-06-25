// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){  
    //P: strings
    //R: num to the console
    //E: strCount('Hello', 'o')// 1
      //strCount('Hello', 'l')// 2
    //P: strCount(str, letter){
      // count
      // split() to put into an array
      // just for each to check to see if the element === letter
      // if conditional, if yes add to the count
      // return the count
  //}
    let count = 0
    let arr = str.split("")
    arr.forEach(e =>{
      if(e === letter)
      count += 1
    })
    return count
  }