// Sum of Multiples

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    //P: two nums 
    //R: sum of nums 
    //E: sumMul(2, 9)// 2 + 4 + 6 + 8 = 20
        //sumMul(3, 13)// 3 + 6 + 9 + 12 = 30
    //P: sumMul(n, m){
      // for loop, starting at 1 but will iterate until the result i*n (multiple) is smaller than the m 
      // variable that will collect every value and add them
      // if the value is greater than 0 it will return r if not it will return 'INVALID'
  //}
    let result = 0 
    for(let i = 1; i*n<m; i++){
      result += i*n
    }
    return result > 0 ? result : 'INVALID'
  }