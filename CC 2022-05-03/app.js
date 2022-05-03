// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

 

// For example:

 

// a = 1

// b = 4

// --> [1, 2, 3, 4]

function between(a, b) {
    // start array with a
    // count up until array ends at b
    let newArr = []
    for (let i = a; i <= b; i++){
      newArr.push(i)
    }
    return newArr

  }