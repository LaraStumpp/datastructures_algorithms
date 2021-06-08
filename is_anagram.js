/** 242. Valid Anagram

From <https://leetcode.com/problems/valid-anagram/> 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false */





function isAnagram(s, t) {
    var sArr= s.split("");
    var tArr= t.split("");
    var sHash={};
    if(s.length != t.length){
      return false;
    }
    for(var i=0; i<sArr.length; i++){
        if(s[i] in sHash){
            sHash[s[i]] = sHash[s[i]] +1;
        }
        else{
             sHash[s[i]] =1;  
        }     
    }
    for(var i=0; i<tArr.length; i++){
        if(t[i] in sHash){
            sHash[t[i]] = sHash[t[i]] -1;
        }
        else{
           return false;    
        }     
    }
    for(var key in sHash){
      if(sHash[key] == 0){
        return true;
      }
      else{
        return false;
      }
    } 
}

var s="anagram";
var t="nagaram";

console.log(isAnagram(s,t));
