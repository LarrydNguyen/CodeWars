// Failed Sort - Bug Fixing #4
// Failed Sort - Bug Fixing #4
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order 

// solution:
var sortArray = function(value) {
  // c/p is not ascending, c-p is the correct syntax.
  return value.split('').sort((c, p) => c - p ).join('');
}