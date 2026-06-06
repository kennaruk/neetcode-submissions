class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = {}
        const bucket: number[][] = Array.from({length: nums.length + 1}, () => [])

        console.log('[debug] bucket:', bucket)
        for (const num of nums) {
           count[num] = (count[num] || 0) + 1;
        }
        console.log('[debug] count:', count)
        for (const num in count) {
            console.log('[debug] count[num]:', count[num], bucket[count[num]])
            bucket[count[num]].push(parseInt(num))
        }
        console.log('[debug] bucket:', bucket)
        
        const result = []
        for (let i = bucket.length - 1, kCount = 0 ; i > 0 && kCount < k ; i--) {
            if (bucket[i].length) {

                for (const n of bucket[i]) {
                    result.push(n)
                    kCount++
                    if (kCount === k) return result
                }
            }
        }
        return result
    }
}
