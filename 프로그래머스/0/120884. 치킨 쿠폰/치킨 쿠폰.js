function solution(chicken) {
    let coupon = chicken, serviceChickenSum = 0

    while(coupon >= 10){
        const newChickenService = Math.floor(coupon/10)
        serviceChickenSum += newChickenService
        coupon = coupon % 10 + newChickenService
    }
    return serviceChickenSum
}