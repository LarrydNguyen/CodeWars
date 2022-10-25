// It's the academic year's end, the fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// array with numbers, no negatives, no floats 

// avg num, avg -> every score divided by the amount of scores 
// get the total amount of scores/how many scores are there 
function getAverage(arr){
    //reduce (linear complexity), takes in a accumulator and a current value and it should give me a sum
    return Math.floor(arr.reduce((a,c)=> a+c)/arr.length)
  }
  
  //ES6 implicit return
  const getAverage = arr => Math.floor(arr.reduce((a,c)=> a+c)/arr.length)
  
  console.log(getAverage([2,2,2,2]),2);
  console.log(getAverage([1,2,3,4,5,]),3);
  console.log(getAverage([1,1,1,1,1,1,1,2]),1);