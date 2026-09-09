/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let row = accounts.length
    let col = accounts[0].length
    let richest = 0;
    for (let i=0; i<row; i++) {
        let sum = 0;
        for (let j=0; j<col; j++) {
            sum+=accounts[i][j];
        }
        richest = Math.max(richest,sum);
    }
    return richest;
};