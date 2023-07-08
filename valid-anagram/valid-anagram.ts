function isAnagram(s: string, t: string): boolean {
if(s.length!== t.length)
return false
else{
    const hash ={}
    for(const a of t){
        if(hash[a])
        hash[a]++
        else
        hash[a] =1
    }
        for(const a of s){
        if(hash[a])
        hash[a] -=1
        else return false
    }
    return true
}
}