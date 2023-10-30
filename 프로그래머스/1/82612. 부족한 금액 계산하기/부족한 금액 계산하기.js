function solution(price, money, count) {
    let sum = 0
    let answer = sum - money
    for(let i = 0; i <= count; i++){
        sum += price * i
    }
    return sum - money > 0 ? sum - money : 0
}