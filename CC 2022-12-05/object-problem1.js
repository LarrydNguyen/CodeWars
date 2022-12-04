// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// string 

// num of occurances of the letter 


//SOLUTION 1:
// function numOfLetters(str){
//   // variable to hold the letters
//   var result = {};
//   // for loop to go through the letters and count how many times it occurs
//   for(let i = 0; i < str.length; i++){
//     // hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property 
//     // if it is true it result will add 1, 
//     if (result.hasOwnProperty(str[i])){
//       result[str[i]] += 1;
//       // else it will just note that there is one there 
//     }else {
//       result[str[i]] = 1;
//     }
//   }
//   return result 
// }



//SOLUTION 2 W/ new for loop: 
function numOfLetters(str){
    let countObj = {}
    //new way of for loop
    for(const c of str){
      // it will count how many of those objects are there
      //set a property using square bracket notation 
      if(countObj[c]){
        countObj[c]++
      }else{
        countObj[c] = 1
      }
    }
    return countObj
  }
  
  console.log(numOfLetters('aba'), '{a: 2, b:1}')
  console.log(numOfLetters('abba'), '{a: 2, b:2}')
  console.log(numOfLetters('larry'), '{l: 1, a:1, r:2, y:1}')
  