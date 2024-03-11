function solution(dots) {
    const sort = dots.sort()
    const garo = Math.abs(dots[3][0] - dots[0][0])
    const sero = Math.abs(dots[3][1] - dots[0][1])
    return garo * sero
}