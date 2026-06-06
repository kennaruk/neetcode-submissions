class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // 12#str
        const encoded = []
        for (const str of strs) {
            encoded.push(str.length, '#', str)
        }
        console.log('[debug] encoded:', encoded.join('') )
        return encoded.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []

        for (let end = 0, start = 0 ; end < str.length ; end++) {
            const char = str[end]
            if (char == '#') {
                const strLength = parseInt(str.slice(start, end))
                end++
                if (strLength === 0) {
                    result.push("")
                } else {
                    const decoded = str.slice(end, end + strLength)
                    result.push(decoded)
                }
                end = end + strLength
                start = end
            }
        }
        return result
    }
}
