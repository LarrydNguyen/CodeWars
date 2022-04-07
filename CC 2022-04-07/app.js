// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length > 0){
      let total = array.reduce((a,b)=>a+b)
      return total/array.length;
    }else if (array.length <=0 ){
        return 0
      }
  }