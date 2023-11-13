function solution(num, k) {
    let number = String(num)
    return number.indexOf(k) === -1 ? -1 : number.indexOf(k) + 1
}