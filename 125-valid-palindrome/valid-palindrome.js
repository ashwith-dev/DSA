/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s1 = ""
    for(let i=0; i<s.length; i++){
        let ascii = s.charCodeAt(i)
        if(ascii>=65 && ascii<=90 || ascii>=97 && ascii<=122 || ascii >= 48 && ascii <= 57){
            s1+=s[i].toLowerCase()
        }
    }
    return s1==s1.split('').reverse().join('')
};