function solution(n) {
    let sum = 0
    if(n % 2 !== 0) {
        for(let i = 1; i < n + 1; i += 2) {
            sum += i
        }
        return sum;
    }
    else if(n % 2 === 0){
        for(let i = 0; i < n + 1; i += 2){
            sum += i*i
        }
        return sum;
    }
}