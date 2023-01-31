// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

// divisor >=1 & x and y are also >=1 

// greatest common divisor of 2 nums

// mygcd(30,12) --> 6
// mygcd(8,9) --> 1
// mygcd(1,1) --> 1

function mygcd(x,y){
  // divisor >=1 & x and y are also >=1 
  
  // greatest common divisor of 2 nums

  // mygcd(30,12) --> 6
  // mygcd(8,9) --> 1
  // mygcd(1,1) --> 1


  // split the largest number in half and start with that as your first divisor & then keep going down
  // pick a num and divide by both nums, if both nums are whole numbers then it is correct 
  
  
  
  // is y the value of 0 ? no, x will equal x & y 
  // mod x by y to determine the common divisor
 return y == 0 ? x : mygcd(y, x % y)
}