class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const queue = []
        for (const char of s) {
            if ('([{'.includes(char)) queue.push(char)
            else {
                const popped = queue.pop()
                if (
                    char === '}' && popped === '{' ||
                    char === ']' && popped === '[' ||
                    char === ')' && popped === '('
                ) continue;

                return false
            }
        }

        if (queue.length === 0) return true
        return false
    }
}
