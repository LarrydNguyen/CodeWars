// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    //P: num, unique num, no float
    //R: to console
    //E: findUniq([1, 1, 1, 4, 1, 1, 1])// 4 
        //findUniq([2, 2, 2, 2, 5, 2, 2])// 5
    //P:findUniq(arr){
      //sort in decending order
      // compare the first two elements, if they are equal return the last. 
  //}
    arr.sort((a,b)=>a-b);
    console.log(arr)
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
  