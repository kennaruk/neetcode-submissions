class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        nums.sort((a, b) => a - b)

        for (let i = 0 ; i < nums.length ; i++) {
            let left = i+1, right = nums.length - 1;

            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue;
            
            for ( ;left < right; ) {
                const sum = nums[i] + nums[left] + nums[right]
                console.debug(sum, nums[i], nums[left], nums[right])
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    // move left cursor
                    do {
                        left++;
                    } while (nums[left] === nums[left-1] && left < right)
                }
                else if (sum > 0) right --;
                else if (sum < 0) left++;
            }
        }


        console.debug(nums.sort())
        return result;
    }
}
