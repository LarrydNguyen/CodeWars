// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    //P:boolean
    //R:console
    //E:smallEnough([1,2,4,5], 3)// false
        //smallEnough([2,4,5], 5)// true
    //P: smallEnough(a, limit){
          //filter, check if each element is lower or equal to the limit
          // conditional check lengths
  //}
     let result = a.filter(num => num <= limit)
      if( result.length != a.length){
        return false
      }else {
        return true
      }
  }