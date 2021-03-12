/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [1, 4, 5, 2, 3];
 let target= 9;
 const twoSum = function(nums, target) {
     for(let i = 0; i < nums.length; i++) {
         for(let j = i + 1; j < nums.length; j++) {
             if(nums[i] + nums[j] === target) {
                 return [i, j];
             }
             
         }
     }
     return [];
 }

//twoSum([4,5,1, 3],9);
//twoSum([2,9,4,1],9);
console.log(twoSum);