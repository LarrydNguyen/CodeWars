// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    //P: array, but zeros at the end 
    //R: return to console
    //E: moveZeros([false,1,0,1,2,0,1,3,"a"])//[false,1,1,2,1,3,"a",0,0]
        //moveZeros([1,2,0,1,0,1,0,3,0,1])//[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
    //P: moveZeros(arr){
      //store
      // conditional of if it === 0 store it in an array1 
      // conditional of if it != 0 store it in an array2
      //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  //}
  
  let zeros = []
  let others = []
  for (let i = 0 ; i < arr.length; i++){
    if (arr[i]===0){
      zeros.push(arr[i])
    }else{
      others.push(arr[i])
    }
  }
      console.log(others.concat(zeros))
    return others.concat(zeros)
  
  }
  
  