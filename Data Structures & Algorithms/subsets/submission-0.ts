class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [[]]

        for (const num of nums) {
            const length = res.length;
            for (let i = 0 ; i < length ; i++) {
                
                res.push(res[i].slice().concat(num))
            }
        }

        return res
    }
}
