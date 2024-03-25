function solution(A, B) {
    const sum = A + A
    // let arr = []
    // for(let i = 0; i < A.length; i++){
    //     arr.push(B.indexOf(A[i]) - i)
    // }
    // return arr
    let chai = [];
    for(let i = 1; i < A.length; i++){
        const prev = A.slice(-i)
        const next = A.slice(0, A.length - i)
        
        if(prev + next === B){
            chai.push(i)
        }
    }
    if(A === B){
        return 0
    }
    return !sum.includes(B) ? -1 : Math.min(...chai)
    // if(A === B){
    //     return 0
    // } else if(!sum.includes(B)){
    //     return -1 
    // } else {
    //     return arr[0]
    // }
    // return !sum.includes(B) ? -1 : arr[0]
}


// "aabcaabc"
// "abca"
// "aabc" "caab" "bcaa" "abca"

// "hellohellohello"