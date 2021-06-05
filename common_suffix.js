Common Suffix
constantly seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array. 
For inputs ["deforestation", "citation","conviction", "incarceration"], return "tion" (not all that creative a rhyming point). If it is ["nice", "ice", "baby"], return "", because that’s just … not.

function commonSuffix(arr){
  var hashmap={};
  for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
      var substr = arr[i].substring(j);
      if( substr in hashmap){
        hashmap[substr] = hashmap[substr] + 1;        
      }
      else{
        hashmap[substr] = 1;
      }
    }
    
  }
  for(var key in hashmap){
    if(hashmap[key] == arr.length){
      return key;
    }
  }
}

var arr = ["deforestation", "citation","conviction", "incarceration"];
console.log(commonSuffix(arr));
