// Multiple of index
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
    //P: array
    //R: return an array 
    //E: [68, -1, 1, -7, 10, 10] => [-1, 10]
      // [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
    //P: multipleOfIndex(array){
      //use mod to determine if the element is a multiple of the index 
      // element / index 
      // return new array so you can use map() because it creates a new array after executing a function
      // using filter can create a new array that passes the test implemented 
  //}
    return array.filter((e,i) => e % i === 0)
  
  }
    
  