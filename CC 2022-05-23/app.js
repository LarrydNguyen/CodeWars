// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]


const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    //P: num, pos, no floats
    //R: the console, if begin is bigger than end = 0 
    //E: sequenceSum = (1, 10, 3) => (1 + 4 + 7 + 10) // 22
        // sequenceSum = (11, 16, 2) => (11 + 13 +15) // 39
    //P: sequenceSum = (begin, end, step){
        // for loop 
        // add to a count every loop
        // return total num
  //}
    let total = 0
    for (let i = begin; i <= end; i += step){
        total += i
    }
    return total
  };