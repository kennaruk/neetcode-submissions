class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const characterSet = new Set();
        // xyzxga
        let max = 0;
        for (let left = 0, current = 0 ; current < s.length ; current ++) {
            const character = s[current];
            // console.debug(characterSet.has(character))

            if (characterSet.has(character)) {
                while (characterSet.has(character)) {
                    characterSet.delete(s[left])
                    left ++;
                }
            }
            characterSet.add(character)

            const streak = current - left + 1
            console.debug('streak:', streak, 'Set:', characterSet, 'left:', left, 'current:', current, character)
            max = Math.max(max, streak);
        }

        return max;
    }
}
