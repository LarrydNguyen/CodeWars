
// Array plus array
// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let both = [arr1, arr2]
    let total = both.reduce((a,b)=>a.concat(b))
    return total.reduce((a,b)=> a + b)
  }