// Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //P: array
    //R: mean Num
    //E: getAverage([2,2,2,2])// 2
    //P: reduce array
      // divide by array length
    // Math.floor for the rounded down nearest integer
    let total = marks.reduce((a,b)=> a+b)
    return Math.floor(total/marks.length)
  }