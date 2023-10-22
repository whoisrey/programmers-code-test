function solution(a, b) {
    let array = []
    for(let i = 0; i < a.length; i++){
        let ad = a[i] * b[i]
        array.push(ad)
    }
    return array.reduce((a, b) => a + b)
}