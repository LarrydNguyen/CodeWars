// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]



// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    //P:num
    //R: array, 2 nums
    //E: twoOldesAges([1, 4, 5, 6]) //[5, 6]
    //    twoOldesAges([4, 6, 7, 8]) //[7, 9]
    //P: twoOldestAges(ages){
          // sort((a,b) => a-b) from least to greatest
          // target the last and second to last index
          // return the last two indexes 
  //}
    let ascending = ages.sort((a,b)=> a-b)
     console.log([ascending[ascending.length-2], ascending[ascending.length-1]])
    return [ascending[ascending.length-2], ascending[ascending.length-1]]
  }