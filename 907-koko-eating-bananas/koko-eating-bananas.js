/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalHrs = 0;

        for (let pile of piles) {
            totalHrs += Math.ceil(pile / mid);
        }

        if (totalHrs <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};