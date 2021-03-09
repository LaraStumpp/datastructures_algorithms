/**
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */


function strStr(haystack, needle) {
    if (needle =='') {
        return 0
    }
      var idx = 0
      for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] != needle[idx]) {
          i = i-idx
          idx = 0
        } 
          else {
          if (idx == needle.length-1) 
              return i-idx
            idx++
        }
      }
      return -1
}
   
