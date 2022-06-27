// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    //P: array of nums, 
    //R: to the console
    //E: powerOfTwo(3)// [0, 2, 4, 8]
      //powerOfTwo(2)// [0, 2, 4]
    //P: powerOfTwo(n){
      // for loop, start at 0, end at n and increase by one
      // 2 ** n 
      // add to an empty array
      //return array
  //}  
    let arr = []
    for(let i = 0; i <= n; i++){
      arr.push(2**i)
    }
    console.log(arr)
    return arr
  }