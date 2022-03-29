// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    // do a for loop up intil you get to n 
  // if n divided by i and is a whole number add it to count 
  for (var d = 0, i = n ; i > 0; i--){
    if (n % i == 0) d++;
  }
  return d;
}