// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// num 

// 1--> num, 
//loop
//when num % 2 === 0 --> 'Fizz' , 
//when num % 3 === 0 --> 'Buzz', 
//both num % 2 === 0 && num % 3 === 0 --> 'Fizz Buzz'

function fizzBuzz(num){
    for(let i = 1 ; i <= num; i++){
     if(i % 2 === 0 && i % 3 === 0){
       console.log('Fizz Buzz')
     }else if (i % 2 === 0){
       console.log('Fizz')
     }else if (i % 3 === 0){
       console.log('Buzz')
     }else{
       console.log(i)
     }
    }
  }
  
  
  console.log(fizzBuzz(5), '1, Fizz, Buzz, Fizz, 5')
  console.log(fizzBuzz(10), '1, Fizz, Buzz, Fizz, 5, Fizz Buzz, 7, Fizz, Buzz, Fizz')