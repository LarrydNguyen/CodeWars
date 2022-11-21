// This question is setting us up for a more complicated question next Monday! 

// ```
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// str 

// new str with only one of each word 

function single(str){
    // filter only works with arrays --> split(' ')
    // filter, if the current word does not equal to, in the array the past index
    // join to bring it back to a string
    return str.split(" ").filter((w, i, a) => w != a[i-1]).join(" ")
  }
  
  console.log(single("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")