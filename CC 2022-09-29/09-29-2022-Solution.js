// Maximum Gap (Array Series #4)
// DESCRIPTION:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

// Note : Regardless the sign of negativity .

// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
// Explanation:
// The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

// Note : Regardless the sign of negativity .

// maxGap ({-54,37,0,64,640,0,-15}) //return (576)
// Explanation:
// The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

// Note : Regardless the sign of negativity .

function maxGap (numbers){
    //P: array of numbers, of negative and zeros included 
    //R: the largest difference between successive elements
    //E: maxGap([13,10,5,2,9])// 4
      // maxGap([-3,-27,-4,-2])// 23
    //P: sort the array
    let sorted = numbers.sort((a,b)=> a-b)
    console.log(sorted)
    let results = []
    //loop the array of sorted numbers
     for(let i = 0 ; i < numbers.length; i++){
       //compare the first element loop to this second element loop  
        for(let j = i+1; j < numbers.length ; j++){
          //push the result of the difference of element 2 - element 1
          results.push(sorted[j]-sorted[i])
          // add 1 to the first loop so it iterates through all the way till the end
          // j relys on i to move so you have to move i by 1 
          i+=1 
        }
     }
    console.log(results)
    return Math.max(...results)
    
  }