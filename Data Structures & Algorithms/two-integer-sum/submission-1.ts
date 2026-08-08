class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hash = {}

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const diff = target - num
            if(typeof hash[diff] !== 'undefined'){
                return [hash[diff],i]
            }

            hash[num]=i

        }

    }
}
