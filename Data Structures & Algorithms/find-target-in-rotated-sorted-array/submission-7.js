class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;

        if (nums[left] === target) return left
        if (nums[right] === target) return right

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (nums[mid] > nums[right]) left = mid + 1
            else right = mid
        }

        const pivot = left
        
        const binarySearch = (left, right) => {
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1;
        }
        return Math.max(binarySearch(pivot, nums.length), binarySearch(0, pivot - 1))
    }
}
