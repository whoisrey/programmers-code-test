function solution(n, k) {
    return Array(n).fill().map((v, i) => i + 1).filter((v) => v % k === 0)
}