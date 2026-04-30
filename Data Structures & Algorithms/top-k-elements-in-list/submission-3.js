class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {};

        // pre-process
        for (const num of nums) {
            if (!counter[num]) counter[num] = 1;
            else counter[num]++;
        }

        console.debug('counter:', counter)

        // sort
        const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1])
        
        console.debug(sorted)
        const result = []
        for (let i = 0 ; i < k ; i ++) {
            result.push(sorted[i][0])
        }

        return result
    }
}
