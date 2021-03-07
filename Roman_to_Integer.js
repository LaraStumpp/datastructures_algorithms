/**
 * Roman to Integer
 * 
 */
function romanToInt(s) {

    const dic = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    var result = 0;

    for (i=0; i < s.length; i++){
        const cur = dic[s[i]];
        const next = dic[s[i+1]];

        if (cur < next){
            result = result + next - cur;
            i++;
        } else {
            result = result +cur;
        }
    }

    return result; 
}

var s= "VI";
console.log(romanToInt(s))
