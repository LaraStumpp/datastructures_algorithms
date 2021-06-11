/** 1207. Unique Number of Occurrences
Easy
72527Add to ListShare
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
 
Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:
Input: arr = [1,2]
Output: false
Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

From <https://leetcode.com/problems/unique-number-of-occurrences/> */


function uniqueOccurrences(arr) {
    var hashmap={};
    var hashmap2={};
    for(var i=0; i<arr.length; i++){
        if(arr[i] in hashmap){
            hashmap[arr[i]] =hashmap[arr[i]] +1;
        }
        else{
            hashmap[arr[i]] =1;
        }
    }
    for (var key in hashmap){
        if(hashmap[key] in hashmap2){
            hashmap2[hashmap[key]]= hashmap2[hashmap[key]] +1;
          
        }
      
        else{
             hashmap2[hashmap[key]]=1;
        }
      
      
        
    }
  
    for(var key2 in hashmap2){
        if(hashmap2[key2] > 1){
            return false;
        }
      
      }
  return true;   
       
}

var arr = [2, 3, 3, 4, 4, 4];
console.log(uniqueOccurrences(arr));
