/**
 * Valid Palindrome
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */

function isPalindrome(s) {
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    for(var i =0; i< s.length/2;i++){        
            if(s[i] != s[s.length-1-i]){
                return false;
            }        
    }
    return true;
}
s="A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
