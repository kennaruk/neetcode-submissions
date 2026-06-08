class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        // 

        const map = new Map<number, number[]>()

        for (let i = 0 ; i < numCourses ; i++) {
            map.set(i, [])
        }
        for (const [course, prerequisite] of prerequisites) {
            map.get(course).push(prerequisite)
        }

        // console.log('[debug] map:', map)
        const visited = new Set<number>()
        const detectedCycle = (course: number): boolean => {
            // console.log('[debug] map:', map, 'course:', course, 'map.get(course):', map.get(course))
            const prerequisites = map.get(course)
            if (prerequisites.length === 0) return false;
            if (visited.has(course)) return true

            visited.add(course)

            const isDetected = prerequisites.some((prerequisite) => detectedCycle(prerequisite))
            if (isDetected) return true

            visited.delete(course)
            map.set(course, [])
        }
        for (let course = 0 ; course < numCourses ; course++) {
            // console.log('[debug] course iteration:', course)
            if (detectedCycle(course)) return false
        }

        return true
    }
}
