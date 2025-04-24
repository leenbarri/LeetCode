/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      let map = {};
      for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let needed = target - current;
     if (map.hasOwnProperty(needed)) {
        return [map[needed], i];
    }
     map[current] = i;
  }
 return [];
    
};