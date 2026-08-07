class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash={}

        for ( const num of nums ) {
            if(!hash[String(num)]){
                hash[num]=String(num)
            }else {
                return true
            }
        } 

        return false

    }
}
