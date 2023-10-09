// function solution(n) {
//     let sqrt = Math.sqrt(n)
//     return sqrt % 1 === 0 ? parseInt(sqrt + 1) ** 2 : -1
// }

function solution(n) {
    let sqrt = Math.sqrt(n)
    let sqrtInteger = sqrt % 1 === 0
    return sqrtInteger ? parseInt(sqrt + 1) ** 2 : -1
}