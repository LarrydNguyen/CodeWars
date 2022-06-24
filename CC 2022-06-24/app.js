// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    //P: nums, no floats, array
    //R: nums in order
    //E: pipeFix([1,3,5,6,7,8])//[1,2,3,4,5,6,7,8]
    //P: pipeFix(numbers){
        //sort(numbers)
        // for loop but add one to a count and push it every loop
        // return array
  //}
    let start = numbers[0]
    let nums = []
    let end = numbers[numbers.length-1]
    for(let i = start; i <= end; i++){
      nums.push(i)
    }
    return nums
  }