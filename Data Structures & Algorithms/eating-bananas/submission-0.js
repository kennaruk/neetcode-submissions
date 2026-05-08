class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    fitTotalTime(piles, h, k) {
        let totalTime = 0
        for (const pile of piles) {
            totalTime += Math.ceil(pile / k)
        }
        return totalTime <= h
    }
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles);
        let result = r;

        while (l <= r) {
            const m = Math.floor( (l + r) / 2 )

            const fit = this.fitTotalTime(piles, h, m)
            if (fit) {
                result = m;
                r = m - 1;
            } else {
                l = m + 1
            }
        }

        return result
    }
}
