// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


// given strings and nums, negative? , floats? 
// return just the added numbers = sum 

// [9, 3, '7', '3'])-> 22


function sumMix(arr) {
    // map() function turning everything into a number 
    //reduce to make all numbers sum into one whole number
      return arr.map((e) => Number(e)).reduce((a,c)=> a+c,0)
    }
    
    // another way of solving the problem 
    // reduce(previous,current) with every 'current' element, if its a string it will turned into a number with Number(), with an initial value of 0 so it can be treated as a number value
    // return arr.reduce((a,c)=> a+Number(c),0)
    
    console.log(sumMix([9, 3, '7', '3']), 22)
    console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
    console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)