// Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    //P: array
    //R: first string with stars inbetween each letter
    //E: twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])// 'b***i***t***c***o***i***n' 
    //P: you are given a list(array), so to order them alphabetically you have to .sort() the list
      // after you sort you can take the first element of that array so itll be s[0]
      // to add the stars split it up into just substrings of letters and then join them back with *** stars to turn it back into a string
    s.sort()
    return s[0].split('').join('***')
  }