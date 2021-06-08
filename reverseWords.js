557. Reverse Words in a String III
Easy
1494103Add to ListShare
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 
Example 1:
Input: s = "Let's take LeetCode contest"
/** Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:
Input: s = "God Ding"
Output: "doG gniD"

From <https://leetcode.com/problems/reverse-words-in-a-string-iii/> 
*/



function reverseWords (s) {
    var sToArr = s.split(" ");

    var temp;
    for(var i=0; i< sToArr.length; i++){
      var wordArr= sToArr[i].split("");
        for(var j=0; j< sToArr[i].length/2; j++){            
            temp = wordArr[j];
            wordArr[j]=wordArr[wordArr.length-1-j];         
            wordArr[wordArr.length-1-j] =temp;
          
            sToArr[i]=wordArr.join("")
        }
     
      
      
    }
  return sToArr.join(" ");
}

var s = "Let go outside!";

console.log(reverseWords(s));

