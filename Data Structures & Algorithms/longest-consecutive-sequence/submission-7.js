class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numMap = new Map();
        let res = 0;

        for (const num of nums) {
            if (!numMap.has(num)) {
                const leftAccumulation = numMap.get(num - 1) || 0
                const rightAccumulation = (numMap.get(num + 1) || 0)
                numMap.set(
                    num,
                    leftAccumulation + rightAccumulation + 1,
                )
                numMap.set(num - leftAccumulation, numMap.get(num))
                numMap.set(num + rightAccumulation, numMap.get(num))

                res = Math.max(res, numMap.get(num))
            }
        }

        return res

    }
}
