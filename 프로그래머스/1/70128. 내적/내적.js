function solution(a, b) {
    let array = []
    for(let i = 0; i < a.length; i++){
        array.push(a[i] * b[i]);
    }
    return array.reduce((a, b) => a + b)
}