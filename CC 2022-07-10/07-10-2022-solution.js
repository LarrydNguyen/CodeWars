// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    //O(log n) //cutting your time in half, by eliminating more than one element at a time like O(n)
    let left = 0,
        right = nums.length-1;
    while(left<=right){
        //index
        let mid = left + Math.floor((right-left)/2);
            if(nums[mid] === target){
                return mid
            }else if ( nums[mid] < target){
                left = mid + 1    
            }else{
                right = mid - 1
            }
        }
    return -1
};

// target = 9
// Solve by : O(log n) 

// NOTES:
// mid = 0 + (5-0)/2 = 2.5 = 2 
//  L    M     R
// [-1,0,3,5,9,12]

//mid < target? yes, so:
// left = mid + 1  
//         L M R
// [-1,0,3,5,9,12]

// if all cases fails:
// right = mid - 1
//   L M R
// [-1,0,3,5,9,12]