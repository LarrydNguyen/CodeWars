// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.


function rowWeights(array){
    //P:nums
    //R:two nums in array
    //E: rowWeights([1,2,3,4]) returns:[4,6]
      // rowWeights([10,20,40,10,10]) returns: [60,30]
      // rowWeights([2,4,6,7,10]) returns: [18,11]
      // rowWeights([0]) returns: [0,0]
    //P: function rowWeights(array){
            //filter through array to see if remainder is 0 
            //reduce the numbers down to 1 number
            //return array team 1, team 2 
  //}
    
    let t1 = array.filter((x, i)=>i%2===0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
    
  }