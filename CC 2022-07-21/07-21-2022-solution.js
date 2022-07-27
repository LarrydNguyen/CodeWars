// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    //P: boolean, true or false
    //R: to console
    //E: 
    //P: isIsogram(str){
      //new set() -> creates a new set with only unique letters (no repeating letters)  in the string
        // str = abba = 4
        // will now be:  Set{'a', 'b'} = 2
      // toLowerCase() -> makes all letters in the string lower case 
      // you want to compare the new string length to the original string length and if thats true , its an isogram, if not then its false
  //}
  
    return new Set(str.toLowerCase()).size === str.length 
  }