// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// string, case sensitive, including specific amount of spaces 
// for every lower case --> upper case
// for every uppper case --> lower case

// string into an array,  map returning a new array with a function with conditionals
// if the element === element.toLowerCase() // print element.toUpperCase()
// if the element === element.toUpperCase() // print element.toLowerCase()
// reverse only the order of words//.reverse(' ') .join('')

function caseReverse(str){
    // split reverse join W/ spaces in split and join --> reverse the order of words
   return str.split(' ').reverse().join(' ').split('')
     // turn it back to an array to use map function, if e is uppercase return lower, if e is upper return upper and join it back to return as string
     .map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  }
  
  //Better solution (one liner)
  // const caseReverse = str => str.split(' ').reverse().join(' ').split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  
  console.log(caseReverse('Example Input'), 'iNPUT eXAMPLE')
  console.log(caseReverse('Larry Nguyen'), 'nGUYEN lARRY')