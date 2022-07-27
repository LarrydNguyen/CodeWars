// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
    //P: num, no float
    //R: sum of nums
    //E: sumCubes(2)// 1 + 8 = 9
        //sumCubes(3)// 1 + 8 + 27 = 36
    //P: for loop, for each num in the loop going up to n cube it and push into an array
      // reduce that array into 1 num
    //return the num
    let array = []
    for(let i = 1 ; i <= n ; i++){
       array.push(i**3)
    }
    return array.reduce((a,b)=> a + b, 0)
  }