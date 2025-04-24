/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    for (let num of numSet) {
         if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
    
};