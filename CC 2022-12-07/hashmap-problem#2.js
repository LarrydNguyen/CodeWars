// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.


// strings for the type of stones of jewels, elements in stones is a type of stone you have

// how many stones you have are also jewels, how many stones are the same as jewels 

// use has table solution

// var findJewels = function(jewels, stones) {
//     let map={}
//     let count=0
//     for(let i=0;i<jewels.length;i++){
//         map[jewels[i]]=1
//     }
//     for(let i=0;i<stones.length;i++){
//         if(freq[stones[i]]){
//             map++
//         }
//     }
//     return count
// };

//leons solution

function findJewels(jewels, stones){
    const map ={}
    let count = 0 
            // made up variable name that is passed through the actual parameter
            // this creates--> { a: true
           //                    A: true
                              //}
    for (const jewel of jewels ){
      map[jewel] = true
    }
            // made up variable name that is passed through the actual parameter
            // for loop that grab stones
            // checks if your map property has an "a" --> which is true
            // if it is true then it will count the value up by 1 
            // if it does not have the value it will return the count, if it is a b, which is false, it will return nothing 
    for (const stone of stones){
      if(map[stone]){
        count++
      }
    }
    return count
  }
  // 2 O of n
  console.log(findJewels('aA', 'aAAbbbb'), '3')
  console.log(findJewels('z', 'ZZ'), '0')
  
  //HASH MAP NOTES
  
  