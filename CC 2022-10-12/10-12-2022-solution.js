//fizzBuzz
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// number, no float, no negative, from 1 to n, % 3 === 'Fizz', % 5 === 'Buzz', 3 and 5 === 'Fizz Buzz'

// words in strings

// n = 5, 1,2,'Fizz', 4 'Buzz'
// n = 10, 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'
// n = 15, 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'

// if divisible by 3 & 5 === 'Fizz Buzz'
// if divisible by 3 === 'Fizz'
// if divisible by 5 === 'Buzz'

function fizzBuzz(num){
    //for loop from 1 to num
      for (let i = 1; i <= num; i++){
    //conditional
    //if num % 3 && num % 5 === 0 -> 'fizzBuzz' 
      if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzBuzz')
    //if num % 3 === 0 -> 'fizz'
      }else if(i % 3 === 0){
        console.log('Fizz')
    //if num % 5 === 0 -> 'buzz'
      }else if (i % 5 === 0){
        console.log('Buzz')
      }else{
        console.log(i)
      }
    }
  }
  // console.log(fizzBuzz(5))
  console.log(fizzBuzz(9))
  // console.log(fizzBuzz(15))