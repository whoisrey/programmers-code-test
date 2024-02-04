const factorial = (a) => {
    let num = 1;
    for(let i = a; 1 <= i; i--){
        num *= i
    }
    return num
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}
