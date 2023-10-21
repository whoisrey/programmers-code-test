function solution(numbers) {
    let sum = numbers.reduce((a, b) => a + b)
    return 45 - sum
}