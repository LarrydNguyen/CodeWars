// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
  // a string of alphabetical letters
  // num of "distinct case-insensitive characters"
  // "abcde" --> 0
  // "aabbcde" --> 'a' and 'b'
  // "aabBcde" --> 'a' and 'b'
  
  // create map
  let obj = {}
  let count = 0
  
  //loop through each element in the string
  for (let i  of text){
    i = i.toLowerCase()
    // if the object does not exist in the map we'll create it and give it a value of 1
    if (!obj[i]){
      obj[i] = 1
    // if it does exist in the object already, increment it by 1
    }else {
    obj[i]++
   } 
  }
  console.log(obj)
  //look through the object
  for(let i in obj){
    if (obj[i] > 1){
      count++
    }
  }
  return count
}