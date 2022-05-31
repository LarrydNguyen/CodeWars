// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    //P:string
    //R:console
    //E:longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")//"abcdefklmopqwxy"
    //P: longest(s1, s2){
        //turn string into an array with split()
        //sorted().join()
         // conditional, compare string length 
        // return longest
  //}
    let s1ArrSorted = s1.split('').sort()
    let s1Final = [...new Set(s1ArrSorted)].join('')
    console.log(s1Final)
    let s2ArrSorted = s2.split('').sort()
    let s2Final = [...new Set(s2ArrSorted)].join('')
    console.log(s2Final)
    let final = s1Final + s2Final
    let finalReturn = [...new Set(final)].sort().join('')
    return finalReturn
  }