class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let l = 0, r = rows * cols - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            
            const row = Math.floor(m / cols);
            const col = m % cols;

            const value = matrix[row][col]

            console.debug('row', row, 'col', col, 'm', m, 'value', value)

            if (value === target) return true 
            else if (value < target) l = m + 1;
            else if (value > target) r = m - 1;
        }

        return false;
    }
}
