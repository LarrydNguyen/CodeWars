// Minimize Sum Of Array (Array Series #1)
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

function minSum(arr) {
    //P: array of positive integers 
    //R: the minimum sum , summing each two integers product
    //E: minSum([5,4,2,3])// 5*2+ 3*4 = // 22 
     // minSum([9,2,8,7,5,4,0,6])// 9*0 + 8*2 + 7*4 6*5 // 74)
    //P: multiply the beginning number by the end and move towards the middle 
    // sort the array in ascending order
    return arr.sort((a,b)=> a-b)
    // use slice, start from the 0 index, take the first half
    .slice(0, arr.length/2)
       // use reduce to add the first two elements and * by the array with the last index - 1, with initial value of 0)
    .reduce((a,b,i) => a += b * arr[arr.length - i - 1],0)
  
  }