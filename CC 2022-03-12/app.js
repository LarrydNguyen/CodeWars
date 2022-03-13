// Code as fast as you can! You need to double the integer and return it.


class SmallestIntegerFinder {
    findSmallestInt(args) {
      //using sort() we can order the array in acsending order 
      // then return the first index in the array 
    let up = args.sort((a,b) => a-b)
    return up[0]
    }
  }