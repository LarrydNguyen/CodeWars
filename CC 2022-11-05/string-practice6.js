// palindrome without methods
// given a string determine if that string is a palindrome

// str, no special characters, not case sensitive 

// if palindrome --> true
// if not palindrome --> false

// FIRST SOLUTION
// function palindrome(str){
//   // reverse variable 
//   let rev = ''
//   // add the letter to the new string starting from the end
//   for(let i = str.length-1 ; i >= 0 ; i--){
//     rev += str[i]
//   }
//   // return a comparison of rev to original str, true or false
//   return rev === str
// }

// SECOND SOLUTION
// function palindrome(str){
//   // split() reverse join()
//   let rev = str.split('').reverse().join('')
//   return rev === str
//  }

// THIRD SOLUTION
// const palindrome = str => str.split('').reverse().join('') === str

// SAME QUESTION, DIFFERENT RULES
// you only have to iterate through half the string

function palindrome(str){
    // loop through the string 
    // conditional --> if reversed element string equals the inital string then its a palindrome 
    for(let i = 0; i < str.length/2; i++){
      // if the character at i is not equal to the last element 
      if(str.charAt(i) != str.charAt(str.length-1-i)){
  
        return false
      }
    }
    return true
  }
  
  console.log(palindrome('bob'), true)
  console.log(palindrome('larry'),false)
  console.log(palindrome('john'), false)