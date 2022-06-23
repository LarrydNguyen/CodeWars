// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    //P: num no float
    //R: console
    //E: century(1705)// 18th
        //century(1900)// 19th
    //P: century(year){
      // if the last two number are greater than 0 than the century is a number up,
      // but if not just return the first two numbers
  //}
  return Math.ceil(year/100)
  }