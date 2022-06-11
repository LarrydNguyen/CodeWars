// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    //P: num for size of the array 
    //R: to the console
    //E: preFizz(2)// [1, 2]
      //preFizz(5)// [1, 2, 3, 4, 5]
    //P: preFizz(n){
      //have a count
      // for loop ending at n, increments of 1 
      // push new count to array 
  //}
    console.log(n)
    let count = 0
    let arr = []
    for (let i = 0 ; i <= n ; i++){
      count += 1 
      arr.push(count)
    }
      let finalarr = arr.pop()
      return arr
  }