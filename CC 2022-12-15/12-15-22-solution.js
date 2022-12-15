// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// arr
// all pairs that add up to given sum 
// hash map

function twoSum(arr, sum){
    // pairs array
    const pairs = []
    // numbers object
    const nums = {}
    
    // [1, 2, 2, 3, 4]
    // look at my hash map, if 4 - 1 = 3, does 3 exist inside the hash map?, if yes === pair
    // 4-2  = 2, is 2 in the object?, if no then just put it into the object
    // 4-2  = 2, 2 is already in the object, so put it in the pair arr
    // 4-3  = 1, is 1 in the object?, yes then its pair is 3 
    // all youre doing is looking for its pair in the object that equals to 4 
    
    for(const num1 of arr){
      //       3 = 4   -  1
      //       2 = 4   -  2
      //       2 = 4   -  2
      //       1 = 4   -  3
      //       0 = 4   -  4
      // is there 3 in your object ?, no, so num1 goes into the object as the value of 1: 1 
      // is there 2 in your object ?, no, so num1 goes into the object as the value of 2: 1 
      // is there 2 in your object ?, yes!, so push the num in the pairs array, [2,2]
      // is there 1 in your object ?, yes!, so push the num in the pairs array, [3,1]
      // is there 0 in your object ?, no, so num1 goes into the object as the value of 0: 1 
  
      const num2 = sum - num1 
      // if counter part is in our object, push the pairs
      if(nums[num2]){
        pairs.push(num1,num2)
      }else{
        //if it was not in the object, add it to the hash map
        nums[num1] = 1
      }
    }
    return pairs
  }
  
  console.log(twoSum([1, 2, 2, 3, 4], 4), '[[2, 2], [3, 1]]')