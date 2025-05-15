/**
 * Definition for guess API.
 * function guess(num: number): number {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1, high = n;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);
        
        if (res === 0) return mid;       
        else if (res === -1) high = mid - 1; 
        else low = mid + 1;            
    }

    return -1; 
};
