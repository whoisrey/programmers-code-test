function solution(money) {
    const drink = Math.floor(money/5500)
    return [drink,money-drink*5500]
}
