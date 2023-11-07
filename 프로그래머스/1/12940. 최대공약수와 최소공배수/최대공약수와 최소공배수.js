function solution(n, m) {
    let maximum = 0;
    for(let i = 1; i < Math.max(n, m); i++){
        if(n % i === 0 && m % i === 0){
            maximum = i
        }
    }
    return [maximum, n * m / maximum]
}