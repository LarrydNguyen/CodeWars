// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']



function solution(str){
    //P: with a string, return an array of strings
    //R: to the console
    //E: solution('abc')// ['ab', 'c_']
      // solution('abcdef')//['ab', 'cd', 'ef']
    //P: solution(str){
      //loop, 
      // conditional: if its even dont add blank space, if off add blank space
      //
  //}
  
    let i = 0;
    let result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }
  