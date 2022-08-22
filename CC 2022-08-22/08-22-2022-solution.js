// Grasshopper - Combine strings
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

function combineNames(first, last){
    //P: string
    //R: combined string
    //E: combineNames(jake, from statefarm) // 'jake from statefarm'
    //P: use template literals 
    return `${first} ${last}`
  }