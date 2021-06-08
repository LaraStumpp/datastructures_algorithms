/** 819. Most Common Word
Easy
9892139Add to ListShare
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
The words in paragraph are case-insensitive and the answer should be returned in lowercase.
 
Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:
Input: paragraph = "a.", banned = []
Output: "a"

From <https://leetcode.com/problems/most-common-word/> */


function mostCommonWord(paragraph, banned) {
    var re = /[^A-Za-z0-9]/g;
    var hashmap={};
    var max=0;
    var keyMax;
    var bannedHash={};
    paragraph = paragraph.toLowerCase().replace(re, ' ');
    var paragraphArr = paragraph.split(" ");
  
    for (var i=0; i<banned.length; i++){
      bannedHash[banned[i]] = i;
    }
 
  
    for (var i=0; i<paragraphArr.length;i++){
        if(!(paragraphArr[i] in bannedHash) && paragraphArr[i].length >0){
            if(paragraphArr[i] in hashmap){
            hashmap[paragraphArr[i]] = hashmap[paragraphArr[i]] +1;
            }
            else{
                hashmap[paragraphArr[i]]=1;
            }
        }
            
    }
       
    for (var key in hashmap){
        if(hashmap[key] > max){
            max =hashmap[key];
          keyMax= key;
        }
        
    }
    return keyMax;  

}

var paragraph = "Bob hit a ball bob, the hit BALL flew far after it was hit.";
var banned=["hit", "far", "bob"];

console.log(mostCommonWord(paragraph,banned));
