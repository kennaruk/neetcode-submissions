
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (const word of strs) {
            const sorted = word.split('').sort().join('')
            if (!result[sorted]) result[sorted] = [word]
            else result[sorted].push(word)
        }

        return Object.values(result)
    }
}
