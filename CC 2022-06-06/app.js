// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    //P:num, no float 
    //R:console
    //E: findSum(15)// 54 (3+5+9+10+12+15)
        //findSum(5)// 8 (3+5)
    //P: findSum(n){
      //conditional mod n%3 n%5 ===0
      // hold numbers in array
      // return sum of nums
  //}
    let multiples = []
    for (let i = 0 ; i <= n; i++){
      if( i%3 === 0 && i%5 === 0){
        multiples.push(i)
      }else if ( i % 3 === 0 || i % 5 === 0){
        multiples.push(i) 
      }
    }
    return multiples.reduce((a,b)=> a+b)
  }