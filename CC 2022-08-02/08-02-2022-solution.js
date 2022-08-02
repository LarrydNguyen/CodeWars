// Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
    //P: array of nums
    //R: return 1 num
    //E: largestPairSum ([10, 14, 2, 23, 19]) -->  42 (= 23 + 19) 
      // largestPairSum ([12, 3, 5, 6, 10]) --> 22 (=12 + 10)
    //P: sort() in ascending order 
      // return the addition of the last 2 elements
    
    numbers.sort((a,b)=> a - b)
    return numbers[numbers.length-1] + numbers[numbers.length-2]
  }