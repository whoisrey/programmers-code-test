function solution(intStrs, k, s, l) {
    return intStrs.map((v) => v.split('').splice(s, l).join('')).filter((v) => v > k).map((v) => Number(v))
}