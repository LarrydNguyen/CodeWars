// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    //P: nums, whole, 
    //R: 3 arrays, in muliples of size numbers
    //E: function (3)// 123
                    //  246
                    //  369
    //P: function(size){
        // similar to O(n^2)
        // have container for final answer
        // for loop to create an array for each iteration up until the size 
        // for 
        // every time just go up one number 
      //
  //}
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      console.log(result)
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
        console.log(result)
      }
    }
    return result
  }
  