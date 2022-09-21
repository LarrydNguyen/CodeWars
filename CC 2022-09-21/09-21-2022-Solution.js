// Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    //P: array of strings and nums
    //R: num = (add strings integers) - (total of non strings) 
    //E:divCon[9, 3, '7', '3'])// 2
      // ['5', '0', 9, 3, 2, 1, '9', 6, 7] // 14
    //P: // for loop, filter out string numbers, then push in to new variable 
    // conditional, if its 
    let final = 0
    for ( let i = 0 ; i < x.length ; i++){
      if ( typeof x[i] === 'number'){
        final += x[i]
      }else {
        final -= Number(x[i])
      }
    }
    return final
  }