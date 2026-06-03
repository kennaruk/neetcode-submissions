class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
    // Fixed: Explicitly typed to avoid implicit any[]
    const result: number[][] = [];

    // Defining backtrack inside the main function gives it access to nums and result
    function backtrack(target: number, current: number[], index: number) {
        // Fixed: Separate the push and the return
        if (target === 0) {
            result.push([...current]);
            return;
        }
        
        if (target < 0 || index >= nums.length) return;

        // 1. Pick the current number
        current.push(nums[index]);
        backtrack(target - nums[index], current, index);
        current.pop();

        // 2. Or choose to move to the next index
        backtrack(target, current, index + 1);
    }

    backtrack(target, [], 0);

    return result;
}
}
