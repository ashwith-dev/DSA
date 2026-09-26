/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let str = ""
    let key1 = ""
    let keyValue = false
    let map = new Map()
    for (let pair of knowledge) {
        map.set(pair[0], pair[1])
    }
    for(let i=0; i<s.length; i++){
        if(s[i] == "(") {
            keyValue = true
        }
        else if(s[i]== ")") {
            keyValue = false
            if (map.has(key1)) str+=map.get(key1)
            else str += "?"
            key1 = ""
        }
        else if(keyValue) {
            key1+=s[i]
        }
        else if(!keyValue){ 
            str+=s[i]
        }
    }
    return str
};