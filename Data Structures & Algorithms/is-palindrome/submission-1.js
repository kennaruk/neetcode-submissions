class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^\w\d]/g, '')
        console.debug('str', str)
        for (let i = 0, j = str.length - 1 ; i < j ; i++, j--) {
            if (str[i].toLowerCase() !== str[j].toLowerCase()) return false
        }

        return true;
    }
}
