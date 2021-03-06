/**
 * Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */
function longestCommonPrefix(strs) {
    var temp;
    var prefix ="";
    if(strs.length <1){
        return prefix;
    }
    for(var i= 0; i< strs[0].length; i++){
        var temp= strs[0][i];
        for(var j=1; j<strs.length; j++){
            if(strs[j][i] != temp){
                return prefix;
            }
        }
        prefix = prefix + temp;
    }
    return prefix;
}

var strs= ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
