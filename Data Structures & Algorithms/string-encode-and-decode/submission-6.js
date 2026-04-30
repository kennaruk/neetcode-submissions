const delimeter = String.fromCharCode(300);
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return String.fromCharCode(301);
        return strs.join(delimeter)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === String.fromCharCode(301)) return [];
        return str.split(delimeter)
    }
}
