/**
 * First Unique Character in a String
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 
 Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

 */



function firstUniqChar (s) {
    var map= {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 0;
        } 
        map[s[i]]++;
    }
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
