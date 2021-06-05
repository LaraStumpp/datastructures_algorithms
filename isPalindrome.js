/** Is Palindrome
Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation, and capitalization) the letters are the same when reading from the back to the front.
Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation. */
1)
function isPalindrome(str){
  var strToArr = str.split("");
  for(var i= 0; i<strToArr.length/2; i++){
    if(strToArr[i] != strToArr[strToArr.length-1-i])
      return false;
  }
  return true;
}

var str = "daad";
console.log(isPalindrome(str));

	2) Ignore white space…

function isPalindrome(str){
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var strToArr = str.split("");
  for(var i= 0; i<strToArr.length/2; i++){
    if(strToArr[i] != strToArr[strToArr.length-1-i])
      return false;
  }
  return true;
}

var str = "ra'ce car";
console.log(isPalindrome(str));
