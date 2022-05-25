// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    //P:num, greater than 0, whole num 
    //R: console
    //E: findShort('hello today is may 5th')// 2
        //findShort('which word will be the shortest')// 2
    //P: findShort(s){
        //split the string to turn it into an array
        // use sort() to get the array oredered from least to greatest
        // you can look for length of the string that is the shortest
        //
  //}
  return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
  
  }