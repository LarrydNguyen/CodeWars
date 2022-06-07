// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    //P: num, no float 
    //R: console
    //E: createPhoneNumber([1,2,3,4,5,6,7,8,9,0])// "(123) 456-7890"
      //createPhoneNumber([4,5,6,8,3,1,0,1,3,5])// "(456) 831-0135"
    //P: createPhoneNumber(numbers){
        // use map(String) function 
        // put it in a string but target index of the array.
        // ' fill empty string'
        // add 3 strings together, () + 3 + 4
  //}
    let result = ''
    numbers = numbers.map(String)
    result += `(${numbers[0]}${numbers[1]}${numbers[2]})`
    result += ` ${numbers[3]}${numbers[4]}${numbers[5]}-`
    result += `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    return result
  }