// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
    //P: string
    //R: reversed string
    //E: reverseWords("The greatest victory is that which requires no battle") // "battle no requires which that is victory greatest The"
    //P: reverseWrods(str)
    //str split reverse join
    return str.split(' ').reverse().join(' '); 
  }