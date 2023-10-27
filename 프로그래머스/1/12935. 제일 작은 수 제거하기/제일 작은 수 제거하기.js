function solution(arr) {
    let minValue = Math.min(...arr)
    arr.splice(arr.indexOf(minValue), 1)
    return arr.length === 0 ? [-1] : arr
}