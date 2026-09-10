/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let first = word1.join('')
    let secound = word2.join('')
    return first==secound
};