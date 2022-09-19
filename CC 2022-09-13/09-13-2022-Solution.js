// Find numbers which are divisible by given number
// DESCRIPTION:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
    //P: array and num 
    //R: all number which are divisible by divisor
    //E: divisibleBy([1, 2, 3, 4, 5, 6], 2)// [2, 4, 6]
    //P: with an array you can use either for loop to determine if it is divisible 
      // or you can use filter element through the whole array to see if the element is divisible by the divisor === 0 
    console.log(numbers, divisor)
    return numbers.filter(e => e%divisor === 0)
  }