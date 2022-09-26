// Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    //P: array
    //R: num, no float. sum of cubed odd numbers
    //E: cubeOdd([1, 2, 3, 4])// 28
    //P: forloop check typeof element is number if so 
    //check to see if element is divisior of 3 ( to determine odd number ) if so cube it 
    // return the sum 
    console.log(arr)
    let final = 0
    for (i = 0 ; i < arr.length; i++){
      if(typeof arr[i] != 'number') return;
      if(arr[i] % 2 != 0){
        final += arr[i]**3;
      }
    }
    return final 
  }
  