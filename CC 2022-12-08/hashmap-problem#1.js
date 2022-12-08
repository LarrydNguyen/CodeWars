// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

// string, no special characters, lowercase does not matter?

// character that occurs the most 

// create a map, and count
// loop through the map establishing all the characters
// add a count for each one that shows up
// return highest count
function maxCharacter(str){
    // create an object (hashmap)  
    let charMap = {},
        count = 0,
        maxChar = null
      
    // loop through with a value of true
    for(const char of str){
      // add its character in the object 
      // add one to the char or make it one
      charMap[char] = charMap[char] + 1 || 1
    }
    // loop through each property in my object and check what the number is 
      // look for each character in the object, (char in charMap)
    for (const char in charMap){
      if(charMap[char] > count){
      // if the character is lower than the count, set count to be equal to that value
        count = charMap[char]
      // making maxChar the char, which is the highest value of character that is from the loop
        maxChar = char
      }
    }
    return maxChar 
  }
  
  
  console.log(maxCharacter('Hello World!'), 'l')