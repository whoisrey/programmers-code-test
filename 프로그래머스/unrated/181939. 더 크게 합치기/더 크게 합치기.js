function solution(a, b) {
    let aB = Number(String(a) + String(b))
    let bA = Number(String(b) + String(a))
    if(aB > bA) {
        return aB
    } 
    else if(aB < bA) {
        return bA
    }
    else {
        return aB
    }
}