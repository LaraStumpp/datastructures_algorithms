/** 349. Intersection of Two Arrays
Easy
14861582Add to ListShare
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

From <https://leetcode.com/problems/intersection-of-two-arrays/> */



function intersection(arr1, arr2) {
  var hashmap={};
  var arr=[];
  var n=0;
    for(var i=0; i<arr1.length; i++){
      if(!(arr1[i] in hashmap)){
        hashmap[arr1[i]]= 1;
      }
    }
  for(var j=0; j<arr2.length; j++){
    if(arr2[j] in hashmap) {
      hashmap[arr2[j]]= hashmap[arr2[j]]+1;
    }
  }
  var n=0
  for(var key in hashmap){
    if(hashmap[key] >1){
      arr[n++]=key;
    }
  }

  return arr;
}

var arr1 = [4,9,5];

var arr2 = [9,4,9,8,4];
console.log(intersection(arr1,arr2));

