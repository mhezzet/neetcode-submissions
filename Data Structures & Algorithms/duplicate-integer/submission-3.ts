class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash=new Set()

        for ( const num of nums ) {
            if(!hash.has(num)){
               hash.add(num)
            }else {
                return true
            }
        } 

        return false

    }
}
