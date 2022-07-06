// DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  
    //P: loop through the array, 
      // if the indexOf(i) ( returns the first index at which a given element) with  -1
      // then push(i) into the unique array
      
    let uniqueArr = []
    
    for(let i of a){
      if(uniqueArr.indexOf(i)=== -1){
        uniqueArr.push(i);
      }
    }
    return uniqueArr
  }