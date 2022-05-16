// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    //filter creates a new array with all elements that pass the test implemented by the provided function
    // includes() method determines whether an array includes a certain value among its entries returning true or false as appropriate.
   return a.filter(e => !b.includes(e));
  }