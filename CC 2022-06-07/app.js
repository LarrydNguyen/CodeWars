// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves){
    //P:num, no floats
    //R: console
    //E: numberOfPairs(['red','green', 'blue']) // 0
      // numberOfPairs(['red', 'red', 'blue', 'blue']) // 2
    //P: numberOfPairs(gloves){
        //sort so yoou can compair to the next element
        //conditional, if gloves[i] === gloves[i+1]
        // add to count
        // take out the first 2 elements 
        // back up 1 index to compare the first two elements again
        // return count
  //}
      let counter = 0;
      let copyGloves = [...gloves].sort();
      for (let i = 0; i < copyGloves.length; i++) {
          if (copyGloves[i] === copyGloves[i+1]) {
              counter++;
              copyGloves.splice(i, 2)
              i--;
          }
      }
      return counter;
  }