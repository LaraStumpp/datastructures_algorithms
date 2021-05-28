/**
 * Majority Element
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */
function majorityElement(nums) {
    var hashmap = {};
    for(var i=0; i< nums.length; i++)
        {
            if(nums[i] in hashmap){
                hashmap[nums[i]]= hashmap[nums[i]] +1;
            }
            else{
                hashmap[nums[i]]=1;
            }
        }
    for(var key in hashmap){
        if(hashmap[key] >= nums.length/2){
        return key;}
    
    }
}

    var nums=[2,2,1,1,1,2,2];
    console.log(majorityElement(nums));
