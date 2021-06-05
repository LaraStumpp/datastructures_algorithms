/** D Gets Jiggy
Write a function that accepts as a parameter a string containing someone’s name. Return a string containing the following oh-so-cool greeting: strip off the first letter of the name, capitalize this new word, and add " to the [first letter]!" 
Given "Dylan", return "Ylan to the D!" */

function dGetsJiggy (str){
  var addStr = " to the ";  
  var strToArr = str.split("");
  var temp=strToArr[0];
  strToArr[1].toUpperCase();
  for(var i= 1; i< strToArr.length; i++){
    
    strToArr[i-1]= strToArr[i];
    
  }
  strToArr[strToArr.length-1] = addStr + temp;
  return strToArr.join("");
}

var str = "Jessica";
console.log(dGetsJiggy(str));
