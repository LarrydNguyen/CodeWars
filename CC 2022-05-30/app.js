// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    //P:string
    //R:console
    //E: removeDuplicateWords( hey its larry larry hey apple)// hey its larry apple
        //removeDuplicateWords( dog cat mouse turtle turtle cat cat dog)// dog cat mouse turtle
    //P: removeDuplicateWords(s){
        //new Set() gets rid of reoccuring words
        //split it first in a new array
        // join it back together but open quotes over whole string
   //}
    console.log([...new Set(s.split(' '))].join(' '))
    return [...new Set(s.split(' '))].join(' ')
    
  }