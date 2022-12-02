// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 
// return s/r/j
// return str.split('').reverse().join('')
// leon -> noel - empty str -> loop add each char


function reverseString(str){
    let reverseStr = ''
    for(let char of str){
        reverseStr = char + reverseStr
    }
    return reverseStr
}

console.log(reverseString('bob'), 'bob')
console.log(reverseString('john'), 'john')
console.log(reverseString('sarah'), 'sarah')