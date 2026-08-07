class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        
        let hashS = {}
        let hashT = {}

        for(let i = 0; i< s.length;i++){
            hashS[s[i]] = (hashS[s[i]]  || 0) + 1
            hashT[t[i]] = (hashT[t[i]]  || 0) + 1
        }
        

        for (const key in hashS){
            if(hashT[key] !== hashS[key]){
                return false
            }
        }

  

        return true

    }
}
