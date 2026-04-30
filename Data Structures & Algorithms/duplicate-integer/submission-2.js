class Solution {
    numSet = new Set()
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (const num of nums) {
            if (this.numSet.has(num))
                return true;
            this.numSet.add(num)
        }
        return false;
    }
}
