function solution(arr) {
    return arr.map((v) => Array(v).fill(v)).flat();
}
