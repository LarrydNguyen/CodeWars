// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

// array of strings

// remove consecutive duplicates, from each element in array

function dup(arr){
    // for each element --> map
      // split the value to turn it into an array
      // filter through each v (element) and if the element is not equal to past index in the array
      // join to bring it back to a string
      return arr.map((v,i,a) => v.split("").filter((v,i,a) => v != a[i-1]).join(""))
    // check to see if the next element is the NOT the same 
    }
    
    
    
    console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
    console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
    console.log(dup(["kelless","keenness"]), ['keles','kenes'])