// Sorted? yes? no? how?
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    //P: string "yes, ascending" , "yes, decending", "no"
    //R: console
    //E:isSortedAndHow([1, 2])//'yes, ascending'
        //isSortedAndHow([15, 10, 12, 3])// 'yes, decending'
    //P: The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  //}
    return array.every((e,i)=> i==0 || array[i] >= array[i-1]) ? 'yes, ascending':
          array.every((e,i) => i==0 || array[i] <= array[i-1]) ? 'yes, descending': 'no'
  }