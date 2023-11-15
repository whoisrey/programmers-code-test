function solution(n) {
    let fact = 1;
    for(let i = 1; i <= 10; i++){
        fact *= i
        if(n === fact) {
            return i
        } else if(n < fact) {
            return i - 1
        }
    }
}