/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let w = Math.floor(Math.sqrt(area))
    for(let i=w; i>0; i--){
        let l = area/i
        if(l==Math.floor(l)) return [l,i]
    }
};