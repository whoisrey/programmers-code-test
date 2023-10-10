function solution(x) {
    return x % x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b)) === 0
}