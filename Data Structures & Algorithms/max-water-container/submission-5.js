class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        for (let left = 0, right = heights.length - 1 ; left < right ; ) {
            const lowestHeight = Math.min(heights[left], heights[right])
            const total = (right - left) * lowestHeight
            console.debug('lowestHeight:', lowestHeight, left, heights[left], right, heights[right])
            max = Math.max(max, total)

            if (heights[left] < heights[right]) left ++;
            else right --;
        }
        return max
    }
}
