/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they *add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 * 
 */
function twoSum(nums, target) {
  var response=[];
    for(var i=0; i<nums.length; i++){
        for(var j =i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
              response.push(i);
              response.push(j);
                return response;
            }
        }
    }
    
}


var nums = [3,2,4];
var target = 6;
console.log(twoSum(nums, target));
