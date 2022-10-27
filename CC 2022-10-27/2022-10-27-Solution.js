// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// string with letters, special characters 
// return "(" if it appears once, ")" if its more than once in original string


// string.toLowerCase(), split('') to turn into array to use map method

// map((lett) => {if(str.indexOf(lett) === str.lastIndexOf(lett))}) => // '('
// indexOf returns the first occurance and if it equal to the lastIndexOf that letter then it means it only occurs once. 
// elseif(str.indexOf(lett) != str.lastIndexOf(lett)) => // ')'

// function semiCircle(word){
//   let unique = ''
//   word.toLowerCase('')
//   for(let i = 0; i < word.length; i++){
//     if(word.lastIndexOf(word[i])=== word.indexOf(word[i])){
//       unique += '('
//     }else{
//       unique += ')'
//     }
//   }
//   return unique
// }

// BETTER SOLUTION:
function semiCircle(word){
    let str = word.toLowerCase().split('')
    // for the array of string, if the indexOf val === lastIndexOf(val) then return '(' if not return ')' , then join it back together to return a string
    return str.map((val,i,a) => a.indexOf(val) == a.lastIndexOf(val) ? '(':')').join('')
  }
  
  console.log(semiCircle("din")) //     =>  "((("
  console.log(semiCircle("recede"))//   =>  "()()()"
  console.log(semiCircle("Success"))//  =>  ")())())"
  console.log(semiCircle("(( @"))  //   =>  "))((" 