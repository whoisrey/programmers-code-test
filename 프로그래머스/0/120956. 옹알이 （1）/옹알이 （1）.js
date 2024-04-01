function solution(babbling) {
    const bab = ["aya", "ye", "woo", "ma"]
    const answer = []
    const what = babbling.filter((v) => {
        for(let i = 0; i < bab.length; i++){
            if(v.includes(bab[i])){
                return v
            }
        }
    })
    // for(let i = 0; i < what.length; i++){
    //     what[i] = what[i].replace("aya", 1)
    //     what[i] = what[i].replace("ye", 1)
    //     what[i] = what[i].replace("woo", 1)
    //     what[i] = what[i].replace("ma", 1)
    // }
    for(let i = 0; i < babbling.length; i++){
        babbling[i] = babbling[i].replace("aya", 1)
        babbling[i] = babbling[i].replace("ye", 1)
        babbling[i] = babbling[i].replace("woo", 1)
        babbling[i] = babbling[i].replace("ma", 1)     
    }
    // return babbling
    return babbling.filter((v) => Number(v.split('').sort().join(''))).length
    // return babbling.filter((v) => Number(v)).length
}