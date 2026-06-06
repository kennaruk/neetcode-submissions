class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        // max
        // dfs - left, up, down, right
        // if it's 1 -> count ++
        // - dfs change 1 -> 0
        let max = 0;
        const dfs = (row: number, column: number): number => {
            console.log('[debug] row:', row, 'column:', column)
            // boundary
            // 0

            if (row < 0 || row > grid.length - 1 || column < 0 || column > grid[0].length - 1) return 0
            if (grid[row][column] === 0) return 0

            grid[row][column] = 0
            // console.log('[debug] grid:', grid)
            return dfs(row + 1, column) + // down
                dfs(row, column + 1) + // right
                dfs(row, column - 1) +
                dfs(row - 1, column) + 1
        }

        for (let i = 0 ; i < grid.length ; i++) {
            for (let j = 0 ; j < grid[i].length ; j++) {
                const area = dfs(i, j)
                max = Math.max(max, area)
            }
        }
        
        return max;
    }

    
}
