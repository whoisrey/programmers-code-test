function solution(a, b) {
    a = String(a)
    b = String(b)
    let plus = Number(a + b)
    let multiple = Number(2 * a * b)
    if(plus > multiple) {
        return plus
    }
    else if(plus < multiple) {
        return multiple
    }
    
}