// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    // split it apart to an array 
    // map creates a new array with a function on every element ( x + x)
    // join it back together
    
     return str.split("").map(x => x + x).join("")
  }