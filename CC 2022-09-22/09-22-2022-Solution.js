// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //P: num
    //R: return an integer with its degits in decending order
    //E: descendingOrder(42145)// 54421
      // decendingOrder(145263)// 654321
    //P: turn the number into a string to split() it up and turn it into an array
    // so now you have an array full of numbers that you can sort
    // reverse so it becomes decending order
    // join the array and return it as a Number using parseInt.
  
    let strNum = String(n),
        strNumArr = strNum.split(''),
        strNumArrSorted = strNumArr.sort((a,b) => a-b)
    strNumArrsorted = strNumArrSorted.reverse()
    strNum = strNumArrSorted.join('')
    return parseInt(strNum)
  
  }