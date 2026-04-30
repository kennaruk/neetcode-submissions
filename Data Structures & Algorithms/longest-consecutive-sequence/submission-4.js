class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)

        let streak = 0;
        let max = 0;
        for (const num of nums) {
            for (let i = num ; ; i++) {
                if (numSet.has(i)) {
                    streak ++
                } else {
                    break;
                }
            }

            max = Math.max(streak, max);
            streak = 0;
        }

        return max
    }
}
