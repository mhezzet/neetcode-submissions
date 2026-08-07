class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        
        let hashS = s.split("").reduce((acc,value)=>({...acc,[value]:acc[value]?acc[value]+1:1}),{})
        let hashT = t.split("").reduce((acc,value)=>({...acc,[value]:acc[value]?acc[value]+1:1}),{})

        

        for (const [keyS,valueS] of Object.entries(hashS)){
            if(hashT[keyS] !== valueS){
                return false
            }
        }

  

        return true

    }
}
