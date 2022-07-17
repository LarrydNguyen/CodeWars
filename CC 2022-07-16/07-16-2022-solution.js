// Find the vowels


// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
    //P: string 
    //R: array with nums
    //E: vowelIndices('Super')// [2,4]
      //vowelIndices('Apple')// [1,5]
    //P: vowlIndices(word){
      // have a variable to hold indexes
      // establish what are the variables 
      // for loop, -> conditional 
      // if the the word is includes() in the vowels, 
          // if true it will push the index + 1 since it starts at 0
      // return indexes
  //}
    let indexes = [];
    let vowels = 'aeiouy',
        wArr = word.toLowerCase().split('');
    console.log(wArr)
    for (let i = 0; i < word.length; i++){
      if(vowels.includes(wArr[i])){
        indexes.push(i + 1)
      }
    }
    return indexes
  }