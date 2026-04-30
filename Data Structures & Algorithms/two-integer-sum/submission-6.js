class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();
        for (let i = 0 ; i < nums.length ; i++) {
            const num = nums[i]
            const diffValue = target - num;

            const diffIndex = numMap.get(diffValue)
            console.debug('[debug] diffIndex:', diffIndex, 'diffValue:', diffValue, 'numMap:', numMap)
            if (diffIndex !== undefined) {
                return [diffIndex, i]
            } else {
                numMap.set(num, i)
            }
            console.debug(numMap)
        }
    }
}
