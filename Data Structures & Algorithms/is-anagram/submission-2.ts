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

        let i = 0
        while(i < s.length){
            hashS={...hashS,[s[i]]:hashS[s[i]]? hashS[s[i]]+1:1}
            hashT={...hashT,[t[i]]:hashT[t[i]]? hashT[t[i]]+1:1}
            i++
        }

        for (const [keyS,valueS] of Object.entries(hashS)){
            if(hashT[keyS] !== valueS){
                return false
            }
        }

  

        return true

    }
}
