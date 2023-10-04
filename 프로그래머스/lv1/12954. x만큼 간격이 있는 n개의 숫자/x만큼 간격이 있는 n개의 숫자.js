function solution(x, n) {
    let array = []
    for(let i = 1; i < n + 1; i++){
        array.push(x * i)
    }
    return array
}